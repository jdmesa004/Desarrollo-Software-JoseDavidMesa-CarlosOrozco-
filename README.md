# Mis Contactos - PWA

App en React (Vite) que permite listar, agregar y eliminar contactos, transformada en una **Progressive Web App (PWA)** con estrategia hibrida de cache.

## Demo en vivo

**https://regal-concha-9d900e.netlify.app**

## Como instalar la app en el celular

### Android (Chrome)

1. Abre el link de la demo en Chrome desde tu celular.
2. Toca el menu de tres puntos (arriba a la derecha).
3. Selecciona **"Instalar app"** o **"Agregar a pantalla de inicio"**.
4. Confirma tocando **"Instalar"**.
5. El icono de la app aparecera en tu pantalla de inicio, como una app nativa.

### iPhone (Safari)

1. Abre el link de la demo en Safari (debe ser Safari, no Chrome).
2. Toca el boton de **compartir** (el cuadrado con la flecha hacia arriba).
3. Desplazate y selecciona **"Agregar a pantalla de inicio"**.
4. Toca **"Agregar"** en la esquina superior derecha.
5. El icono aparecera en tu pantalla de inicio.

Una vez instalada, la app funciona sin barra de navegador (modo standalone) y sigue funcionando aunque pierdas la conexion, gracias al Service Worker.

## Estrategia de cache (Hybrid Strategy)

| Recurso | Estrategia | Motivo |
|---|---|---|
| HTML | Network First | Evita servir una version vieja de la app |
| JS / CSS | Cache First | Los archivos llevan hash en el nombre |
| Imagenes | Cache First + Stale While Revalidate | Prioriza rendimiento |
| APIs | Network First | Los datos deben estar actualizados |

## Correr el proyecto en local

```bash
npm install
npm run dev
```

## Build de produccion

```bash
npm run build
npm run preview
```

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
