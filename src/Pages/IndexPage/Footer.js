import React from 'react';
import './Footer.css';
import imagenFooter from '../../imagenes/IMAGEN-FOOTER.jpg';
import { FaInstagram, FaFacebook, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa';

//Animaciones React-Reveal
import Swing from 'react-reveal/Swing';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';


function Footer(){
    return(
        <div className='contenedor-footer'>
            <img className='imagen-footer' src={imagenFooter}/>

                <div className='titulo'>
                    <Swing>
                    <h2 className='texto-contactanos'>CONTACTANOS</h2>
                    </Swing>
                </div>


                <div className='form-contacto'>
                <Flip bottom>
                    <form className='formulario' method='POST'>
                        <input type='text' placeholder='Escriba su nombre'></input>
                        <input type='number' placeholder='Teléfono'></input>
                        <input type='e-mail' placeholder='e-mail (opcional)'></input>
                        <button type='submit'>Enviar solicitud</button>
                     </form>
                </Flip>     

                <Zoom>
                    <div className='contenedor-redesSociales'>
                        <p className='texto-redesSociales'>Seguinos</p>
                        <div className='iconos-redesSociales'>
                                <a style={{margin: '10px 15px', fontSize: '40px', color:'#000'}} href='https://www.youtube.com'><FaInstagram/></a>
                                <a style={{margin: '10px 15px', fontSize: '40px', color:'#000'}} href='https://www.youtube.com'><FaFacebook/></a>
                                <a style={{margin: '10px 15px', fontSize: '40px', color:'#000'}} href='https://www.youtube.com'><FaTwitter/></a>
                        </div>


                    <div className='datos-contacto'>
                        <div className='ventas-datos'>
                            <h2>VENTAS</h2>
                            <p>(0299) 154 365 247</p>
                        </div>

                        <div className='soporte-datos'>
                            <h2>SOPORTE TECNICO</h2>
                            <p>(0299) 155 472 173</p>
                        </div>

                        <div className='direccion-datos'>
                            <h2>DIRECCION</h2>
                            <div><FaMapMarkerAlt/></div>
                            <p>J.J.LASTRA 1060, NEUQUEN CAP. CP 8300</p>
                        </div>

                        <div className='desarrollador'>
                            <p>Desarrollado por Apocalipsis. Todos los derechos reservados.</p>
                        </div>


                    </div>
                   
                  </div>
                  </Zoom>
                </div>
        </div>
    )
}

export default Footer;