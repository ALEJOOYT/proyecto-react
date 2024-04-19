import React from 'react';
import './SeccionBotones.css';

const SeccionBotones = (props) => {
    const ubicacion = props.ubicacion;

    return (
        <div className='seccionBotones'>
            <ul className="redes-sociales">
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
