import React from 'react';
import foto from './assets/images/avatar-jessica.jpeg';
import './DetallesUsuario.css';

const DetallesUsuario = () => {
    return (
        <div className="detalle">
            <figure>
                <img src={foto} alt="Foto de perfil de Jessica Randall" />
            </figure>
            <div className="nombre-titulo">
                <h2>Jessica Randall</h2>
                <h4>Londres, Reino Unido</h4>
            </div>
            <p>"Desarrolladora de front-end y ávida lectora."</p>
        </div>
    );
};

export default DetallesUsuario;