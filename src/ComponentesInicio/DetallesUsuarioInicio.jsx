import React from 'react';
import './DetallesUsuarioInicio.css';

const DetallesUsuario = (props) => {
    const usuario = props.usuario;
    return (
        <div className="detalleInicio">
            <figure>
                <img src={usuario.image} alt={`Foto de perfil de ${usuario.name}`} />
            </figure>
            <div className="nombreTituloInicio">
                <h2>{usuario.name}</h2>
                <h4>{usuario.species}</h4>
                <p>Género: {usuario.gender} <br />
                Estado: {usuario.status}</p>
            </div>
        </div>
    );
};

export default DetallesUsuario;
