import React from 'react';
import DetallesUsuario from './DetallesUsuario';
import SeccionBotones from './SeccionBotones';
import './Tarjeta.css';


const Tarjeta = () => {
    return (
        <div className='contenedor'>
            <div className='tarjeta'>
                <DetallesUsuario />
                <SeccionBotones />
            </div>
        </div>
    );
};

export default Tarjeta;
