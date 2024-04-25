import React from 'react';
import './SeccionBotonesEpisodios.css';
import { NavLink } from 'react-router-dom';

const SeccionBotones = ({ ubicacion, episodio }) => {
    
    return (
        <div className='seccionBotones'>
            <ul className="redesSociales">
                {ubicacion && (
                    <NavLink to={`/`} className='Inicio'>
                        Inicio
                    </NavLink>
                )}
            </ul>
            <h6>SeedProgramming</h6>
        </div>
    );
};

export default SeccionBotones;