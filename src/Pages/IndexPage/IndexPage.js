import React from 'react';

//Imagenes
import imagen from '../../imagenes/logo.png';
import imagenportada from '../../imagenes/imagen-portada.png';


//Estilos
import './IndexPage.css';
import { FaHeadphonesAlt, FaCarAlt, FaBookOpen } from 'react-icons/fa';

//Componentes
import NuestrosServicios from './NuestrosServicios';
import Servicios from '../Servicios/Servicios';
import Nosotros from './Nosotros';
import Footer from './Footer';
import Navbar from './Navbar';

//Animaciones React-reveal
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';



function IndexPage(){

    return(
      <div className='contenedor-index'>

        <div className='barra-navegacion'>
          <img className='imagen-logo' src={imagen}></img>
          <h4 className='titulo-apocalipsis'>APOCALIPSIS</h4>
        </div>

        <Navbar />
      
          <div className='contenedor-portada'>
          <Slide left>
            <img className='imagen-portada' src={imagenportada}></img>
          </Slide>

            <div className='textos-portada'>
            <Flip right>
              <h4 className='titulo-soluciones'>SOLUCIONES DE SEGURIDAD</h4>
            </Flip>

            <Zoom bottom>
              <h5 className='texto-empresa'>Tecnologia de innovación<br/>líder en la industria, captura videos a todo color y de alta calidad las 24 horas del día, los 7 días de 
                                  la semana, para que su personal de seguridad pueda proteger a las personas y 
                                    las propiedades durante la noche con la misma nitidez que durante el día.
              </h5>
            </Zoom>
            </div>
          </div>

        <div className='servicios'>
          <h2>Nuestros servicios</h2>  
        </div>  

      <Zoom>
      <div className='contenedor-cards'>
        <NuestrosServicios 
          icono={<FaHeadphonesAlt/>}
          tituloCard='SOPORTE PRE VENTA Y POST VENTA'
          textoCard='Asesoramos 
            a nuestros clientes desde la 
            identificación de su necesidad, 
            desarrollando la solución adecuada y acompañándolos en su implementación.'/>

        <NuestrosServicios 
          icono={<FaCarAlt />}
          tituloCard='ENTREGA AGILIZADA'
          textoCard='Contamos con una flota 
          de vehículos propios aptos para cumplir con los requerimientos 
          de nuestros clientes, garantizando eficiencia y rapidez en la entrega.' />
     

      <NuestrosServicios 
          icono={<FaBookOpen />}
          tituloCard='ASESORAMIENTO'
          textoCard='Brindamos experiencias para 
          que nuestros clientes puedan profundizar sus conocimientos y 
          tomar contacto directo con las nuevas tecnologías 
          que se presentan en el mercado.' />
      </div>

      </Zoom>
      
        <Nosotros />
        <Footer />
      </div>
    )
}

export default IndexPage;