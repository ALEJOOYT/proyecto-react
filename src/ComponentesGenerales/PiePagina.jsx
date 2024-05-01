import React from 'react';
import './PiePagina.css';
import gmailLogo from '../assets/imagenes/gmail-logo.png';
import instagramLogo from '../assets/imagenes/instagram-logo.png';
import gitLogo from '../assets/imagenes/git-logo.png';

const PiePagina = () => {
    return (
        <div className="Pie-Pagina">
            <div className="Pie-Pagina-content">
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
                    <p><a href="https://www.google.com/search?sca_esv=260407b5166ebe05&sxsrf=ACQVn08UAklI-5wXTZj7GNjVhnxESmO1xA:1714591650544&q=conocimiento+albert+einstein+dicho&uds=AMwkrPt6PKUe_q33MCW5m509kwWWKDnN9n1pFEA6Hbojltvit71-qgsm3ZwN2b6dio0lH8KLSQHQ3cRsCX6dZEPhOEZQjlcWEIcUng7cuuxZWESb2HZ_YXZy2hVKLJlkeHWtUCkl8ZE_kChO33RTYYIXJgxHK0ab9dUtk0MwyIl8QcovomF1UIZkrEiL7uuiy_urVuwZed9todXFfztARm7Y65Wy1T3Vug7mGRPrXMybC1QtCbXwD3OeQRjOkL0AMfkddNDkej40ww1ffi-qF4FKjeHi5cxth53Sa5jReR5xvTV6L70OXK8&udm=2&prmd=ivsnbmz&sa=X&ved=2ahUKEwi4p4_Sl-2FAxX9qZUCHR_CDvEQtKgLegQIDxAB&biw=1280&bih=617&dpr=1.25#vhid=L-bPT-uyDjAEKM&vssid=mosaic" target="_blank" rel="noopener noreferrer">Conocimiento</a></p>
                </div>
            </div>
        </div>
    );
}

export default PiePagina;