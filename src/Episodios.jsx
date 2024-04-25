import React, { useEffect, useState } from 'react';
import './Episodios.css';
import TarjetaEpisodios from './ComponentesEpisodios/TarjetaEpisodios.jsx';

function Episodios() {
    const [personaje, setPersonaje] = useState(null);

    useEffect(() => {
        // Extraer el parámetro 'id' de la URL
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
        <div className='todo'>
            {personaje && <TarjetaEpisodios key={personaje.id} usuario={personaje} />}
        </div>
    );
}

export default Episodios;
