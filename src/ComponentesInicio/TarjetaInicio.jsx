import React from 'react';
import { NavLink } from 'react-router-dom';
import DetallesUsuarioInicio from './DetallesUsuarioInicio';
import './TarjetaInicio.css';

const Tarjeta = ({ usuario }) => {
    const idTarjeta = usuario.id;

    return (
        <div className='contenedor-inicio'>
            <NavLink to={`/episodios?id=${idTarjeta}`} className="enlace-tarjeta-inicio">
                <div className='tarjeta-inicio'>
                    <DetallesUsuarioInicio usuario={usuario} />
                </div>
            </NavLink>
        </div>
    );
};

export default Tarjeta;