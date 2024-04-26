import React, { useState, useEffect } from 'react';
import './TarjetaEpisodios.css';
import DetallesUsuarioEpisodios from './DetallesUsuarioEpisodios';
import SeccionBotonesEpisodios from './SeccionBotonesEpisodios';
import ListaEpisodiosEpisodios from './ListaEpisodios';

const Tarjeta = ({ usuario }) => {
    const [episodios, setEpisodios] = useState([]);

    useEffect(() => {
        const fetchEpisodes = async () => {
            try {
                const episodesData = await Promise.all(usuario.episode.map(ep => fetch(ep).then(res => res.json())));
                setEpisodios(episodesData);
            } catch (error) {
                console.error('Error fetching episodes:', error);
            }
        };

        fetchEpisodes();
    }, [usuario.episode]);

    return (
        <div className='tarjeta'>
            <DetallesUsuarioEpisodios usuario={usuario} />
            <ListaEpisodiosEpisodios episodios={episodios} />
            <SeccionBotonesEpisodios ubicacion={usuario.location} episodio={usuario.episode} />
        </div>
    );
};

export default Tarjeta;