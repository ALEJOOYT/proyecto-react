import React from 'react';
import './SeccionBotonesEpisodios.css';
import { NavLink } from 'react-router-dom';

const SeccionBotones = ({ ubicacion, episodio }) => {

    return (
        <div className='seccionBotones'>
            <ul className="redesSociales">
                {ubicacion && (
                    <li key="inicio" className='redesSociales-item'>
                        <NavLink to={`/`} className='redesSociales-link Inicio'>
                            Inicio
                        </NavLink>
                    </li>
                )}
            </ul>
            <h6>SeedProgramming</h6>
        </div>
    );
};

export default SeccionBotones;