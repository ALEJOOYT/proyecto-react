import React from 'react';
import './DetallesUsuario.css';

const DetallesUsuario = (props) => {
    const usuario = props.usuario;
    return (
        <div className="detalle">
            <figure>
                <img src={usuario.image} alt={`Foto de perfil de ${usuario.name}`} />
            </figure>
            <div className="nombre-titulo">
                <h2>{usuario.name}</h2>
                {/* <h4>{usuario.location}</h4>{/* revisar */} 
            </div>
            <p>{usuario.description}</p>
        </div>
    );
};

export default DetallesUsuario;
