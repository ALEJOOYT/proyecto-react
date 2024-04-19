import React from 'react';
import './DetallesUsuario.css';

const DetallesUsuario = ({ usuario }) => {
    return (
        <div>
            <figure>
                <img src={usuario.image} alt={`Foto de perfil de ${usuario.name}`} />
            </figure>
            <div>
                <h2>{usuario.name}</h2>
                <h4>{usuario.species}</h4>
                <p>Género: {usuario.gender} <br />
                    Estado: {usuario.status} <br />
                    Tipo: {usuario.type}</p>
            </div>
            <p>Fecha: {usuario.created}</p>
        </div>
    );
};

export default DetallesUsuario;