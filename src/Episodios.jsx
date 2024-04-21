import React, { useEffect, useState } from 'react';
import './App.css';
import Tarjeta from './ComponentesEpisodios/TarjetaEpisodios.jsx';

function App() {
    const [todosPersonajes, setTodosPersonajes] = useState([]);
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const paginaAleatoria = Math.floor(Math.random() * 43);
        fetch(`https://rickandmortyapi.com/api/character/?page=${paginaAleatoria}`)
            .then(respuesta => respuesta.json())
            .then(datos => {
                setTodosPersonajes(datos.results);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    useEffect(() => {
        if (todosPersonajes.length > 0) {
            const personajesAleatorios = obtenerPersonajesAleatorios(todosPersonajes, 10);
            setUsuarios(personajesAleatorios);
        }
    }, [todosPersonajes]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Esto proporciona un desplazamiento suave
        });
    };

    const obtenerPersonajesAleatorios = (array, n) => {
        const mezclados = array.sort(() => 0.5 - Math.random());
        return mezclados.slice(0, n);
    };

    return (
        <div className='todo'>
            <button onClick={scrollToTop}>Ir al inicio</button>
            {usuarios.map(usuario => (<Tarjeta key={usuario.id} usuario={usuario} />))}
        </div>
    );
}

export default App;