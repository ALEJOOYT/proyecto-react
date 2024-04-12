import React from 'react';
import DetallesUsuario from './DetallesUsuario';
import SeccionBotones from './SeccionBotones';
import './Tarjeta.css';

const Tarjeta = (props) => {
    const usuario = props.usuario;
    const redesSociales = usuario['Social-links'];
    return (
        <div className='contenedor'>
            <div className='tarjeta'>
                <DetallesUsuario usuario={usuario} />
                <SeccionBotones redesSociales={redesSociales} />
            </div>
        </div>
    );
};

export default Tarjeta;
