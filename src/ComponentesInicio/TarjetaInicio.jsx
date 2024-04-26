import React from 'react';
import { NavLink } from 'react-router-dom';
import DetallesUsuarioInicio from './DetallesUsuarioInicio';
import './TarjetaInicio.css';

const Tarjeta = ({ usuario }) => {
    const idTarjeta = usuario.id;

    return (
        <div className='contenedorInicio'>
            <NavLink to={`/episodios?id=${idTarjeta}`} className="enlaceTarjetaInicio">
                <div className='tarjetaInicio'>
                    <DetallesUsuarioInicio usuario={usuario} />
                </div>
            </NavLink>
        </div>
    );
};

export default Tarjeta;