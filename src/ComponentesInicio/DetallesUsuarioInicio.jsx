import React from 'react';
import './DetallesUsuarioInicio.css';

const DetallesUsuario = ({ usuario }) => {
    const estadoColor = usuario.status === 'Alive' ? 'green' : usuario.status === 'Dead' ? 'red' : 'lightblue';
    return (
        <div className="detalle-inicio">
            <figure>
                <img src={usuario.image} alt={`Foto de perfil de ${usuario.name}`} />
            </figure>
            <div className="nombre-titulo-inicio">
                <h2>{usuario.name}</h2>
                <h4>{usuario.species}</h4>
                <p>Género: {usuario.gender} <br />
                    Estado: <span className={`estado-${estadoColor}`}>{usuario.status}</span> <br /></p>
            </div>
        </div>
    );
};

export default DetallesUsuario;