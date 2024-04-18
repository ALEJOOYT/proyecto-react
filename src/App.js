// App.js
import React, { useEffect, useState } from 'react';
import Tarjeta from './Componentes/Tarjeta';
import './App.css';

function App() {
    const [todosPersonajes, setTodosPersonajes] = useState([]);
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(respuesta => respuesta.json())
            .then(datos => {
                setTodosPersonajes(datos.results);
            })
            .catch(error => console.error('Error fetching characters:', error));
    }, []);

    useEffect(() => {
        if (todosPersonajes.length > 0) {
            const personajesAleatorios = obtenerPersonajesAleatorios(todosPersonajes, 10);
            setUsuarios(personajesAleatorios);
        }
    }, [todosPersonajes]);

    const obtenerPersonajesAleatorios = (array, n) => {
        const mezclados = array.sort(() => 0.5 - Math.random());
        return mezclados.slice(0, n);
    };

    return (
        <div className='todo'>
            {usuarios.map(usuario => (<Tarjeta key={usuario.id} usuario={usuario} />))}
        </div>
    );
}

export default App;
