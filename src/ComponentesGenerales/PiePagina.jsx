import React from 'react';
import './PiePagina.css';
import gmailLogo from '../assets/imagenes/gmail-logo.png';
import instagramLogo from '../assets/imagenes/instagram-logo.png';

const PiePagina = () => {
    return (
        <div className="Pie-Pagina">
            <div className="Pie-Pagina-content">
                <div className="Pie-Pagina-item">
                    <h4>Nombre:</h4>
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
            </div>
        </div>
    );
}

export default PiePagina;