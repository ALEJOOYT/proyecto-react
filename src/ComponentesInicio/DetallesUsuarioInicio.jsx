import React from 'react';
import './DetallesUsuarioInicio.css';

const DetallesUsuario = (props) => {
    const usuario = props.usuario;
    return (
        <div className="detalle">
            <figure>
                <img src={usuario.image} alt={`Foto de perfil de ${usuario.name}`} />
            </figure>
            <div className="nombre-titulo">
                <h2>{usuario.name}</h2>
                <h4>{usuario.species}</h4>
                <p>Género: {usuario.gender} <br />
                Estado: {usuario.status}</p>
            </div>
            <p>Fecha: {usuario.created}</p>
        </div>
    );
};

export default DetallesUsuario;
