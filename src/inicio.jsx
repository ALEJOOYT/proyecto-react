import React, { useEffect, useState } from 'react';
import Tarjeta from './ComponentesInicio/TarjetaInicio.jsx';
import PiePagina from './ComponentesGenerales/PiePagina.jsx';
import './inicio.css';

function Inicio() {
  const [todosPersonajes, setTodosPersonajes] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [ordenSeleccionado, setOrdenSeleccionado] = useState(
    localStorage.getItem('ordenSeleccionado') || 'Aleatorio'
  );
  const [caracteresAMostrar, setCaracteresAMostrar] = useState(
    parseInt(localStorage.getItem('caracteresAMostrar')) || 10
  );

  useEffect(() => {
    const obtenerDatos = async () => {
      const datos = [];
      for (let pagina = 1; pagina <= 42; pagina++) {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`);
        const data = await response.json();
        if (data.results) {
          datos.push(...data.results);
        }
      }
      setTodosPersonajes(datos);
    };

    obtenerDatos();
  }, []);

  useEffect(() => {
    if (todosPersonajes.length > 0) {
      const personajesAleatorios = obtenerPersonajesAleatorios(todosPersonajes, caracteresAMostrar, ordenSeleccionado);
      setUsuarios(personajesAleatorios);
    }
  }, [todosPersonajes, caracteresAMostrar, ordenSeleccionado]);

  useEffect(() => {
    localStorage.setItem('ordenSeleccionado', ordenSeleccionado);
  }, [ordenSeleccionado]);

  useEffect(() => {
    localStorage.setItem('caracteresAMostrar', caracteresAMostrar);
  }, [caracteresAMostrar]);

  const obtenerPersonajesAleatorios = (array, n, tipoOrden) => {
    let mezclados;
    switch (tipoOrden) {
      case 'Aleatorio':
        mezclados = array.sort(() => 0.5 - Math.random());
        break;
      case 'ID':
        mezclados = array.sort((a, b) => a.id - b.id);
        break;
      case 'Nombre A-Z':
        mezclados = array.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'Nombre Z-A':
        mezclados = array.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        mezclados = array.sort(() => 0.5 - Math.random());
    }
    return mezclados.slice(0, n);
  };

  const handleChangeOrden = (e) => {
    setOrdenSeleccionado(e.target.value);
  };

  const handleChangeCantidadPersonajes = (e) => {
    setCaracteresAMostrar(parseInt(e.target.value));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
      <div className='todo'>
        <div className="dropdowns">
          <select value={ordenSeleccionado} onChange={handleChangeOrden}>
            <option value="Aleatorio">Aleatorio</option>
            <option value="ID">Ordenar por ID</option>
            <option value="Nombre A-Z">Nombre A-Z</option>
            <option value="Nombre Z-A">Nombre Z-A</option>
          </select>
          <input
            type="number"
            value={caracteresAMostrar}
            onChange={handleChangeCantidadPersonajes}
            min="1"
            step="1"
          />
        </div>
        <button onClick={scrollToTop}>Ir al inicio</button>
        {usuarios.map(usuario => (<Tarjeta key={usuario.id} usuario={usuario} />))}
      </div>
      <PiePagina />
    </div>
  );
}

export default Inicio;