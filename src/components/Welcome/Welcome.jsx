import React from 'react'
import "./Welcome.scss";
import picture from "../../images/picture.png";
import picresponsive from "../../images/pictureresponsive.png";


const Welcome = () => {
  return (
    <div className="welcome-container">
    <div className="welcome-phrase">
    <h1>¡Te damos la bienvenida a tu comunidad profesional!</h1>
    <ul>
      <li>Buscar un empleo</li>
      <li>Encontrar a personas que conoces</li>
      <li>Adquirir una nueva aptitud</li>
    </ul>
    </div>
    <div className="img-container">
    <img src={picture}></img>
    </div>
    </div>
  )
}

export default Welcome