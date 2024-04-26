import React from 'react';
import './DetallesUsuarioEpisodios.css';

const DetallesUsuario = ({ usuario }) => {
    const estadoColor = usuario.status === 'Alive' ? 'green' : usuario.status === 'Dead' ? 'red' : 'lightblue';
    const tipo = usuario.type || 'desconocido';

    return (
        <div className="detalles-usuario">
            <figure>
                <img src={usuario.image} alt={`Foto de perfil de ${usuario.name}`} />
            </figure>
            <div>
                <h4>{usuario.name}</h4>
                <p>Especie: {usuario.species} <br />
                    Género: {usuario.gender} <br />
                    Estado: <span className={`estado-${estadoColor}`}>{usuario.status}</span> <br />
                    Tipo: {tipo}</p>
            </div>
        </div>
    );
};

export default DetallesUsuario;