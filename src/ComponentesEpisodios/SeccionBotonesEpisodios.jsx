import React from 'react';
import './SeccionBotonesEpisodios.css';
import { NavLink } from 'react-router-dom';

const SeccionBotones = ({ ubicacion, episodio }) => {

    return (
        <div className='seccion-botones-episodios'>
            <ul className="botones-informacion">
                {ubicacion && (
                    <li key="inicio" className='botones-informacion-item'>
                        <NavLink to={`/`} className='botones-informacion-link Inicio'>
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