// src/Contactos.jsx

import { useState, useEffect } from 'react';
import Loader from './Loader';
import ListaContactos from './ListaContactos';
import FormularioContacto from './FormularioContacto';
import contactosHero from './assets/contactos-hero.png';

const contactosIniciales = [
    { id: 1, nombre: 'Ana Torres', telefono: '3001234567' },
    { id: 2, nombre: 'Carlos Ruiz', telefono: '3009876543' },
    { id: 3, nombre: 'Laura Gomez', telefono: '3155551234' },
];

function Contactos() {
    const [cargando, setCargando] = useState(true);
    const [contactos, setContactos] = useState([]);

    // Simula la carga inicial de datos (por ejemplo, una llamada a una API)
    useEffect(() => {
        const timer = setTimeout(() => {
            setContactos(contactosIniciales);
            setCargando(false);
        }, 1500);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const agregarContacto = (nombre, telefono) => {
        const nuevoContacto = {
            id: Date.now(),
            nombre: nombre,
            telefono: telefono,
        };

        setContactos(prev => [...prev, nuevoContacto]);
    }

    const eliminarContacto = (id) => {
        setContactos(prev => prev.filter(contacto => contacto.id !== id));
    }

    if (cargando) {
        return <Loader />;
    }

    return (<>
        <div className="contactos">
            <h2>Mis Contactos</h2>
            <img
                className="contactos-hero"
                src={contactosHero}
                alt="Ilustracion de una lista de contactos"
            />
            <FormularioContacto onAgregar={agregarContacto} />
            <ListaContactos contactos={contactos} onEliminar={eliminarContacto} />
        </div>
    </>);
}

export default Contactos;
