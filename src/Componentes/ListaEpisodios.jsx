import React from 'react';
import './ListaEpisodio.css';

const ListaEpisodios = ({ episodios }) => {
    return (
        <div>
            <h4>Episodios: </h4>
            <div className="listaEpisodios">
                {episodios.map(episodio => (
                    <div key={episodio.id} className="episodio">
                        <p>{episodio.name}</p>
                        <p>{episodio.episode}</p>
                        <p>{episodio.air_date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListaEpisodios;