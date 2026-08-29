const CACHE_NAME = "contactos-pwa-v1";

const APP_SHELL = [
  "/",
  "/index.html",
  "/manifest.json",
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
});

// --- Helpers para reconocer el tipo de recurso ---

function esHTML(request) {
  return request.destination === "document";
}

function esEstaticoJSoCSS(request) {
  return request.destination === "script" || request.destination === "style";
}

function esImagen(request) {
  return request.destination === "image";
}

function esAPI(request) {
  return request.url.includes("/api/");
}

// --- Estrategias ---

// HTML -> Network First: evita servir versiones viejas de la app
function networkFirst(event) {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
}

// JS/CSS -> Cache First: llevan hash en el nombre, si cambian el nombre cambia
function cacheFirst(event) {
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) {
        return cached;
      }
      return fetch(event.request).then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      });
    })
  );
}

// Imagenes -> Cache First + Stale While Revalidate: responde rapido con cache
// y en paralelo actualiza el cache para la proxima vez
function staleWhileRevalidate(event) {
  event.respondWith(
    caches.match(event.request).then(cached => {
      const fetchPromise = fetch(event.request).then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      });
      return cached || fetchPromise;
    })
  );
}

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") {
    return;
  }

  if (esHTML(event.request)) {
    networkFirst(event);
    return;
  }

  if (esEstaticoJSoCSS(event.request)) {
    cacheFirst(event);
    return;
  }

  if (esImagen(event.request)) {
    staleWhileRevalidate(event);
    return;
  }

  if (esAPI(event.request)) {
    networkFirst(event);
    return;
  }

  // Cualquier otro recurso: intenta red, si falla usa cache
  networkFirst(event);
});
