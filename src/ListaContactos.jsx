// src/ListaContactos.jsx

import Contacto from './Contacto';

function ListaContactos({ contactos, onEliminar }) {

    if (contactos.length === 0) {
        return <p>No hay contactos todavia.</p>;
    }

    return (<>
        <ul className="lista-contactos">
        {
            contactos.map((contacto) => {
                return <Contacto
                    key={contacto.id}
                    contacto={contacto}
                    onEliminar={onEliminar}
                />
            })
        }
        </ul>
    </>);
}

export default ListaContactos;
