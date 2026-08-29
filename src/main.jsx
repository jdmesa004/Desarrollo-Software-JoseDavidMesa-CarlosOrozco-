import React from 'react';
import ReactDOM from 'react-dom/client';
import HelloWorld from './HelloWorld';
import Bienvenidos from './Bienvenidos'
import './index.css';
import PrintMessage from './PrintMessage';
import Contador from './Contador';
import Arrays from './Arrays';
import Contactos from './Contactos';

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
        < HelloWorld  />
        < Bienvenidos/>
        < PrintMessage message='Como te va?'  />
        < PrintMessage message='Soy un mensaje!!!'  />
        < Contador  />
        < Arrays  />
        < Contactos  />
    </React.StrictMode>
)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => console.log('Service Worker registrado'))
      .catch(err => console.log('Error:', err));
  });
}