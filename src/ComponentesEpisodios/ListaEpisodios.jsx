import React from 'react';
import './ListaEpisodio.css';

const ListaEpisodios = ({ episodios }) => {
    const desglosarFormato = formato => {
        const temporada = formato.substring(1, 3);
        const episodio = formato.substring(4);
        return { temporada, episodio };
    };

    return (
        <div>
            <h4>Episodios: </h4>
            <div className="lista-episodios">
                {episodios.map(episodio => {
                    const { temporada, episodio: numeroEpisodio } = desglosarFormato(episodio.episode);
                    return (
                        <div key={episodio.id} className="episodio">
                            <p className='nombre-episodio'>{episodio.name}</p>
                            <p>Temporada: {temporada}</p>
                            <p>Episodio: {numeroEpisodio}</p>
                            <p>{episodio.air_date}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ListaEpisodios;