import React from "react";
import './Nosotros.css';
import personas from '../../imagenes/personas.jpg';
import { FaArrowCircleRight, FaBuilding, FaTools } from 'react-icons/fa';
import Slide from 'react-reveal/Slide';

function Nosotros(){
    return(
        <div className="contenedor-principal">
            <h2 className="texto-nosotros">Nosotros</h2>


        <div className="contenedor-nosotros">
            <div className="contenedor-imagen">
                <img className="imagen" src={personas}/>
            </div>

        <Slide right cascade>
          <div className="contenedor-textos">
            <h1 className="titulo-somos">Somos parte de tu proyecto</h1>
            <p className="texto-somos">Un equipo de profesionales enfocados en satisfacer tus necesidades.</p>
        
            <div className="contenedor-datos-empresa">

                <div className="icono-titulo">
                    <div className="icono" style={{margin:'0px 6px', fontSize: '30px', color: '#0077B6'}}><FaArrowCircleRight/></div>
                    <h2 className="titulo-nosotros">Trayectoria</h2>
                </div>
                <div className="textos-nosotros">
                    <p className="textos">Más de 25 años de experiencia en el rubro, 
                        posicionándonos como un referente a nivel regional.
                    </p>
                </div>
              
                <div className="icono-titulo">
                    <div className="icono" style={{margin:'0px 6px', fontSize: '30px', color: '#0077B6'}}><FaBuilding/></div>
                    <h2 className="titulo-nosotros">Infraestructura</h2>
                </div>
                <div className="textos-nosotros">
                    <p className="textos">
                        Contamos con local comercial, atención al cliente presencial y virtual.
                    </p>
                </div>

                <div className="icono-titulo">
                    <div className="icono" style={{margin:'0px 6px', fontSize: '30px', color: '#0077B6'}}><FaTools/></div>
                    <h2 className="titulo-nosotros">Experiencias</h2>
                </div>
                <div className="textos-nosotros">
                    <p className="textos">Nuestro equipo especializado le brinda seguridad y calidad en cada instalación.
                    </p>
                </div>
            </div>
           </div>
        </Slide>
          </div>

        </div>
    )
}

export default Nosotros;