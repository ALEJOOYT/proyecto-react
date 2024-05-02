import React from 'react';
import './PiePagina.css';
import gmailLogo from '../assets/imagenes/gmail-logo.png';
import instagramLogo from '../assets/imagenes/instagram-logo.png';
import gitLogo from '../assets/imagenes/git-logo.png';

const PiePagina = () => {
    return (
        <div className="Pie-Pagina">
            <div className="Pie-Pagina-contenido">
                <div className="Pie-Pagina-item">
                    <h4>Creador:</h4>
                    <p>Izai Alejandro Zalles Merino</p>
                </div>
                <div className="Pie-Pagina-item">
                    <h4>Empresa:</h4>
                    <p>SeedProgramming</p>
                </div>
                <div className="Pie-Pagina-item">
                    <h4>Instagram:</h4>
                    <p><a href="https://www.instagram.com/ialejandrozalles/" target="_blank" rel="noopener noreferrer"><img src={instagramLogo} alt="Instagram" className="logo" /> ialejandrozalles</a></p>
                </div>
                <div className="Pie-Pagina-item">
                    <h4>Correo Electrónico:</h4>
                    <p><a href="mailto:zallesrene@gmail.com"><img src={gmailLogo} alt="Gmail" className="logo" /> zallesrene@gmail.com</a></p>
                </div>
                <div className="Pie-Pagina-item">
                    <h4>Git Hub:</h4>
                    <p><a href="https://github.com/ALEJOOYT"><img src={gitLogo} alt="GitHub" className="logo" /> ALEJOOYT</a></p>
                </div>
                <div className="Pie-Pagina-item">
                    <h4>Repositorio de GitHub:</h4>
                    <p><a href="https://github.com/ALEJOOYT/proyecto-react" target="_blank" rel="noopener noreferrer">proyeco-react</a></p>
                </div>
                <div className="Pie-Pagina-item">
                    <h4>API utilizada:</h4>
                    <p><a href="https://rickandmortyapi.com/" target="_blank" rel="noopener noreferrer">Rick and Morty API</a></p>
                </div>
                <div className="Pie-Pagina-item">
                    <h4>En la búsqueda del conocimiento</h4>
                    <p><a href="https://www.pinterest.com/pin/718324209290229520/" target="_blank" rel="noopener noreferrer">Conocimiento</a></p>
                </div>
            </div>
        </div>
    );
}

export default PiePagina;