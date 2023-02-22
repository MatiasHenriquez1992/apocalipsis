import React from 'react';
import { Link } from 'react-router-dom';

//Imagenes
import logoApocalipsis from '../../imagenes/logo.png';
import imagenPortada from '../../imagenes/portada.jpg';
import imagenNotebook from '../../imagenes/portadanotebook.png';
import imagenNotebookArquitecto from '../../imagenes/notebookarquitecto.png';
import imagenNotebookDiseno from '../../imagenes/notebookdiseno.png';
import imagenPcGamer from '../../imagenes/pc-gamer.png';


//Estilos
import './IndexPage.css';

//Animations
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';

//Icons
import { FaInstagram,FaFacebookF } from 'react-icons/fa';

//Components
import Footer from '../Footer/Footer';


function IndexPage(){
    return(
      <div className='contenedor-principal'>
        <div className='contenedor-portada'>
          <img className='logo-apocalipsis' alt='logoApocalipsis' src={logoApocalipsis}/>
          <h3 className='texto-apocalipsis'>APOCALIPSIS</h3>
          <div className='contenedor-redes-sociales'>
              <p className='texto-seguinos'>Seguinos</p>
              <a href='https://www.instagram.com/apocalipsiscipolletti/' className='icono-instagram'><FaInstagram /></a>
              <a href='https://www.facebook.com/cybermatica.cipolletti/' className='icono-facebook'><FaFacebookF /></a>
          </div>
              <img className='imagen-portada-notebook' alt='imagenNotebook' src={imagenNotebook}/>
            <Zoom bottom>
              <h2 className='texto-presentacion'>SOLUCIONES INFORMATICAS</h2>
              <h3 className='texto-adicional'>para su organización</h3>
            </Zoom>
            <Bounce bottom>
              <Link to='/servicios' className='boton-verServicios'>Ver servcios</Link>
            </Bounce>
              <img className='imagen-portada' alt='imagenPortada' src={imagenPortada}/>
        </div>

        <div className='contenedor-servicios'>
          <div className='contenedor-textos'>
          <Zoom bottom>
            <h3 className='titulo-elegirnos'>¿Por que elegirnos?</h3>
            <p className='parrafo-elegirnos'>Con más de 25 años en el mercado de tecnología, Apocalipsis se ha consolidado como una organización de referencia y socio 
               estratégico para empresas en relación a la consultoría, diseño, provisión e implementación de soluciones de IT.
               Las soluciones que comercializamos ocupan una posición de liderazgo, lo cual 
               sumado a nuestra experiencia y trayectoria, asegura la optimización del negocio de nuestros clientes.
            </p>
          </Zoom>
          </div>
      
        </div>


        <div className='contenedor-soluciones'>
        <Zoom left cascade>
          <h1 className='titulo-soluciones'>Nuestras soluciones</h1> 
            <div className='cards-soluciones'>

            <div className='card'>
              <span class="material-symbols-outlined icono">home_repair_service</span>
              <h3 className='titulo-card'>Servicio técnico</h3>
              <p className='texto-card'>Le brindamos un servicio de asistencia inmediata con alta 
                prioridad para que su empresa no se detenga por inconvenientes 
                en sus sistemas de cómputo redes internet brindamos una solución integral.
              </p>
            </div>


            <div className='card'>
              <span class="material-symbols-outlined icono">lan</span>
              <h3 className='titulo-card'>Redes cableadas/WI-FI</h3>
              <p className='texto-card'>
                Implementación, asesoramiento y mantenimiento de redes
                empresariales y particulares. Mantenga una comunicación 
                fluida en su organizacion.
              </p>
            </div>

            <div className='card'>
              <span class="material-symbols-outlined icono">web</span>
              <h3 className='titulo-card'>Desarrollo de sitios Web</h3>
              <p className='texto-card'>
                Planificacion de proyecto, desarrollo de diseño, implementación y mantenimiento.
                Implementación de correos electronicos corporativos.
              </p>
            </div>
          </div>

          <div className='contenedor-boton-servicios'>
            <Link reloadDocument to='/servicios' className='boton-verServicios-secundario'>Ver servcios</Link>
          </div> 
        </Zoom> 
        </div>

        <div className='contenedor-ventas'>
            <h2 className='titulo-ventas'>TU NUEVA PC ESTA ACÁ</h2> 
          <div className='contenedor-cards-pc'>
            <div className='contenedor-pc-arquitecto'>
              <h3 className='texto-arquitectura'>ARQUITECTURA</h3>
              <img className='imagen-notebook' alt='imagenNotebookArquitecto' src={imagenNotebookArquitecto} />
            </div>
            
            <div className='contenedor-pc-diseno-grafico'>
              <h3 className='texto-diseno-grafico'>DISEÑO GRAFICO</h3>
              <img className='imagen-notebook' alt='imagenNotebookDiseno' src={imagenNotebookDiseno} />
            </div>

            <div className='contenedor-pc-diseno-grafico'>
              <h3 className='texto-diseno-grafico'>GAMER</h3>
              <img className='imagen-notebook' alt='imagenNotebookGamer' src={imagenPcGamer} />
            </div>
          </div>   
        </div>

        <Footer/>

      </div>
     
    )
}

export default IndexPage;