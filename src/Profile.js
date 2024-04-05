import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="contenedor">
      <div className="tarjeta">
        <figure>
          <img src="./assets/images/avatar-jessica.jpeg" alt="" />
        </figure>
        <div className="nombre-titulo">
          <h2>Jessica Randall</h2>
          <h4>Londres, Reino Unido</h4>
        </div>
        <p>"Desarrolladora de front-end y ávida lectora."</p>
        <ul id="redes-sociales">
          <li><a href="#">GitHub</a></li>
          <li><a href="#">Frontend Mentor</a></li>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
          <li><h6>SeedProgramming</h6></li> { }
        </ul>
      </div>
    </div>
  );
}

export default Profile;