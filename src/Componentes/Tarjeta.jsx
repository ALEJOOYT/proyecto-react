import React, { useState, useEffect } from 'react';
import './Tarjeta.css';
import DetallesUsuario from './DetallesUsuario';
import SeccionBotones from './SeccionBotones';
import ListaEpisodios from './ListaEpisodios';

const Tarjeta = ({ usuario }) => {
    const [mostrarEpisodios, setMostrarEpisodios] = useState(false);
    const [episodios, setEpisodios] = useState([]);

    useEffect(() => {
        if (mostrarEpisodios) {
            Promise.all(usuario.episode.map(ep => fetch(ep).then(res => res.json())))
                .then(data => setEpisodios(data))
                .catch(error => console.error('Error fetching episodes:', error));
        }
    }, [mostrarEpisodios, usuario.episode]);

    const toggleEpisodios = () => {
        setMostrarEpisodios(!mostrarEpisodios);
    };

    return (
        <div className='contenedor'>
            <div className='tarjeta' onClick={toggleEpisodios}>
                <DetallesUsuario usuario={usuario} />
                {mostrarEpisodios && <ListaEpisodios episodios={episodios} />}
                <SeccionBotones ubicacion={usuario.location} episodio={usuario.episode} />
            </div>
        </div>
    );
};

export default Tarjeta;