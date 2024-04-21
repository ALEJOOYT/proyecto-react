import React from 'react';
import { NavLink } from 'react-router-dom';
import DetallesUsuario from './DetallesUsuarioInicio';
import SeccionBotones from './SeccionBotonesInicio';
import './TarjetaInicio.css';

const Tarjeta = (props) => {
    const usuario = props.usuario;
    const ubicacion = usuario.location;
    const idTarjeta = usuario.id;

    return (
        <div className='contenedor'>
            <NavLink to={`/episodios/${idTarjeta}`} className='tarjeta-link'>
                <div className='tarjeta'>
                    <DetallesUsuario usuario={usuario} />
                    <SeccionBotones ubicacion={ubicacion} />
                </div>
            </NavLink>
        </div>
    );
};

export default Tarjeta;
