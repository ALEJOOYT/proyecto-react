import React from 'react';
import DetallesUsuario from './DetallesUsuario';
import SeccionBotones from './SeccionBotones';
import './Tarjeta.css';

const Tarjeta = (props) => {
    const usuario = props.usuario;
    const ubicacion = usuario.location;
    return (
        <div className='contenedor'>
            <div className='tarjeta'>
                <DetallesUsuario usuario={usuario} />
                <SeccionBotones ubicacion={ubicacion} />
            </div>
        </div>
    );
};

export default Tarjeta;
