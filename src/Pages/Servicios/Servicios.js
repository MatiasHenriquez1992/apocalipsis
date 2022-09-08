import React from 'react';
import './Servicios.css';
import Navbar from '../IndexPage/Navbar';
import imagen from '../../imagenes/fondo-servicios.png';
import camaras from '../../imagenes/camaras-casa.jpg';
import alarmas from '../../imagenes/alarmas-casa.jpg';
import porteros from '../../imagenes/porteros-casa.jpg';
import antenas from '../../imagenes/antenas-casas.jpg';
import barreras from '../../imagenes/barreras-perimetrales.png';
import edificios from '../../imagenes/porteros-imagen.png';
import camarasSeguridad from '../../imagenes/camaras-seguridad.png';

//Animaciones React-reveal
import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce';


function Servicios(){
    return(

        <div className='contenedor-inicial'>
            <Navbar /> 

        <Flip left cascade>
            <div className='container-cards'>
                <div className='cards-servicios'>
                    <img className='imagen-camaras' src={camaras}></img>
                    <h3 className='titulos'>Cámaras de seguridad</h3>
                </div>
               
                <div className='cards-servicios'>
                    <img className='imagen-camaras' src={alarmas}></img>
                    <h3 className='titulos'>Alarmas domiciliarias y vecinales</h3>
                </div>

                <div className='cards-servicios'>
                    <img className='imagen-camaras' src={porteros}></img>
                    <h3 className='titulos'>Porteros eléctricos</h3>
                </div>

                <div className='cards-servicios'>
                    <img className='imagen-camaras' src={antenas}></img>
                    <h3 className='titulos'>Comunicaciones por medio de antenas a largas distancias</h3>
                </div>
            </div>
            </Flip>

                <Bounce left cascade>

                <div className='contenedor-barreras'>

                   <h3 className='texto-barreras'><b>Camaras de seguridad<hr></hr><br></br></b>
                      La inteligencia artificial le permite detectar y diferenciar personas de animales u otros objetos
                      emitiendo alertas a su Smartphone y omitiendo falsas alarmas. 
                   </h3>
                   <img className='imagen-portero' src={camarasSeguridad}></img>
                </div>

                <div className='contenedor-barreras'>
                    <img className='imagen-barreras' src={barreras}></img>
                    <h3 className='texto-barreras'><b>Barreras perimetrales<hr></hr><br></br></b>Sistemas de detección de intrusos por haz fotoeléctrico activo, diseñado para 
                        proteger perímetros interiores y exteriores 
                        residenciales, comerciales e industriales.
                    </h3>
                </div>
                
                <div className='contenedor-barreras'>
                   
                    <h3 className='texto-barreras'><b>Porteros electronicos<hr></hr><br></br></b>
                        Solucion de acceso a hogares y/o edificios, le permite abrir puertas desde pantallas tactiles como asi tambien 
                        iniciar una video llamada con la persona que llama a su puerta. Se caracteriza por mantener un control estricto en su
                        compañia/hogar, brindandole una tecnologia de vanguardia.
                    </h3>
                    <img className='imagen-portero' src={edificios}></img>
                </div>

                   
             



                </Bounce>

        </div>



    )
}

export default Servicios;