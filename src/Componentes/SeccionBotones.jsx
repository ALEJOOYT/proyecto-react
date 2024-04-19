import React from 'react';
import './SeccionBotones.css';

const SeccionBotones = ({ ubicacion, episodio }) => {
    return (
        <div className='seccionBotones'>
            <ul className="redesSociales">
                {ubicacion && (
                    <li key={ubicacion.url}>
                        <a href={ubicacion.url}>{ubicacion.name}</a>
                    </li>
                )}
            </ul>
            <h6>SeedProgramming</h6>
        </div>
    );
};

export default SeccionBotones;