// src/Contacto.jsx

function Contacto({ contacto, onEliminar }) {
    return (<>
        <li className="contacto-item">
            <span className="contacto-info">
                { contacto.nombre }
                <small>{ contacto.telefono }</small>
            </span>
            <button onClick={() => onEliminar(contacto.id)}>
                Eliminar
            </button>
        </li>
    </>);
}

export default Contacto;
