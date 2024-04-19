import React from 'react';
import './DetallesUsuario.css';

const DetallesUsuario = ({ usuario }) => {
    let estadoColor = '';
    if (usuario.status === 'Alive') {
        estadoColor = 'green';
    } else if (usuario.status === 'unknown') {
        estadoColor = 'lightblue';
    } else if (usuario.status === 'Dead') {
        estadoColor = 'red';
    }

    return (
        <div>
            <figure>
                <img src={usuario.image} alt={`Foto de perfil de ${usuario.name}`} />
            </figure>
            <div>
                <h4>{usuario.name}</h4>
                <p>Especie: {usuario.species} <br />
                    Género: {usuario.gender} <br />
                    Estado: <span style={{ color: estadoColor }}>{usuario.status}</span> <br />
                    Tipo: {usuario.type ? usuario.type : 'desconocido'}</p>
            </div>
        </div>
    );
};

export default DetallesUsuario;