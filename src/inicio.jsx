import React, { useEffect, useState } from 'react';
import Tarjeta from './ComponentesInicio/TarjetaInicio.jsx';
import './App.css';

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

  const obtenerPersonajesAleatorios = (array, n) => {
    const mezclados = array.sort(() => 0.5 - Math.random());
    const personajesSeleccionados = [];
    let i = 0;
    while (personajesSeleccionados.length < n && i < mezclados.length) {
      const personaje = mezclados[i];
      if (!personajesSeleccionados.find(personajeSeleccionado => personajeSeleccionado.id === personaje.id)) {
        personajesSeleccionados.push(personaje);
      }
      i++;
    }
    return personajesSeleccionados;
  };

  return (
    <div className='todo'>
      {usuarios.map(usuario => (<Tarjeta key={usuario.id} usuario={usuario} />))}
    </div>
  );
}

export default App;