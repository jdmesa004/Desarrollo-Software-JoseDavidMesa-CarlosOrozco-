// src/FormularioContacto.jsx

import { useState } from 'react';

function FormularioContacto({ onAgregar }) {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');

    const manejarAgregar = () => {
        if (nombre.trim() === '' || telefono.trim() === '') {
            return;
        }

        onAgregar(nombre, telefono);

        setNombre('');
        setTelefono('');
    }

    return (<>
        <div className="formulario-contacto">
            <input
                value={nombre}
                placeholder="Nombre"
                onChange={(e) => setNombre(e.target.value)}
            />
            <input
                value={telefono}
                placeholder="Telefono"
                onChange={(e) => setTelefono(e.target.value)}
            />
            <button onClick={manejarAgregar}>
                Agregar
            </button>
        </div>
    </>);
}

export default FormularioContacto;
