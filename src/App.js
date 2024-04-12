import React, { useEffect, useState } from 'react';
import Tarjeta from './Componentes/Tarjeta';
import './App.css';

function App() {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(respuesta => respuesta.json())
      .then(datos => {
        setUsuarios(datos.results);
        console.log(datos.results);
      });
  }, []);

  return (
    <div className='todo'>
      {usuarios.map(usuario => (<Tarjeta key={usuario.id} usuario={usuario} />))}
    </div>
  );
}

export default App;
