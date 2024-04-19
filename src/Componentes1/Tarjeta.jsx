import React, { useState, useEffect } from 'react';
import './Tarjeta.css';
import DetallesUsuario from './DetallesUsuario';
import SeccionBotones from './SeccionBotones';
import ListaEpisodios from './ListaEpisodios';

const Tarjeta = ({ usuario }) => {
    const [episodios, setEpisodios] = useState([]);

    useEffect(() => {
        Promise.all(usuario.episode.map(ep => fetch(ep).then(res => res.json())))
            .then(data => setEpisodios(data))
            .catch(error => console.error('Error:', error));
    }, [usuario.episode]);

    return (
        <div className='tarjeta'>
            <DetallesUsuario usuario={usuario} />
            <ListaEpisodios episodios={episodios} />
            <SeccionBotones ubicacion={usuario.location} episodio={usuario.episode} />
        </div>
    );
};

export default Tarjeta;