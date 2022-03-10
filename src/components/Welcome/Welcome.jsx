import React from 'react'
import "./Welcome.scss";
import picture from "../../images/picture.png";
import picresponsive from "../../images/pictureresponsive.png";
import { RightOutlined } from "@ant-design/icons";



const Welcome = () => {
  return (
    <div className="welcome-container">
    <div className="welcome-phrase">
    <h1>¡Te damos la bienvenida a tu comunidad profesional!</h1>
    <ul>
      <li>Buscar un empleo<RightOutlined className="arrow"/></li>
      <li>Encontrar a personas que conoces<RightOutlined className="arrow"/></li>
      <li>Adquirir una nueva aptitud<RightOutlined className="arrow"/></li>
    </ul>
    </div>
    <div className="img-container">
    <img src={picture}></img>
    </div>
    </div>
  )
}

export default Welcome