import React, { useEffect, useState } from 'react';
import './Episodios.css';
import TarjetaEpisodios from './ComponentesEpisodios/TarjetaEpisodios.jsx';
import PiePagina from './ComponentesGenerales/PiePagina.jsx';

function Episodios() {
    const [personaje, setPersonaje] = useState(null);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(respuesta => respuesta.json())
            .then(personaje => {
                setPersonaje(personaje);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <div className='todo'>
                {personaje && <TarjetaEpisodios key={personaje.id} usuario={personaje} />}
            </div>
            <PiePagina />
        </div>
    );
}

export default Episodios;
