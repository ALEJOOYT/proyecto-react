import React, { useEffect, useState } from 'react';
import Tarjeta from './Componentes/Tarjeta';
import './App.css';

function App() {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    fetch('https://6617f7f49a41b1b3dfbbda36.mockapi.io/api/v1/prueba')
      .then(respuesta => respuesta.json())
      .then(datos => {
        setUsuarios(datos);
        console.log(datos);
      });
  }, []);

  return (
    <div className='todo'>
      {usuarios.map(usuario => (<Tarjeta key={usuario.id} usuario={usuario} />))}
    </div>
  );
}

export default App;
