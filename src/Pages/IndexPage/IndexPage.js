import React from 'react';

//Imagenes
import logoApocalipsis from '../../imagenes/logo.png';
import imagenPortada from '../../imagenes/portada.jpg';
import imagenNotebook from '../../imagenes/portadanotebook.png';
import imagenNotebookArquitecto from '../../imagenes/notebookarquitecto.png';
import imagenNotebookDiseno from '../../imagenes/notebookdiseno.png';
import imagenPcGamer from '../../imagenes/pc-gamer.png';


//Estilos
import './IndexPage.css';
import { Link } from 'react-router-dom';



//Icons
import { FaInstagram,FaFacebookF } from 'react-icons/fa';

//Components
import Footer from '../Footer/Footer';



function IndexPage(){

    return(
      <div className='contenedor-principal'>
        <div className='contenedor-portada'>
          <img className='logo-apocalipsis' src={logoApocalipsis}/>
          <h3 className='texto-apocalipsis'>APOCALIPSIS</h3>
          <div className='contenedor-redes-sociales'>
         
              <p className='texto-seguinos'>Seguinos</p>
              <a href='https://www.google.com.ar' className='icono-instagram'><FaInstagram /></a>
              <a href='https://www.google.com.ar' className='icono-facebook'><FaFacebookF /></a>
          
          </div>
          
        
          <img className='imagen-portada-notebook' src={imagenNotebook}/>
     
          <h2 className='texto-presentacion'>SOLUCIONES INFORMATICAS</h2>
          <h3 className='texto-adicional'>para su organización</h3>
          <Link className='boton-verServicios' to='/servicios'>Ver servcios</Link>
      
          <img className='imagen-portada' src={imagenPortada}/>

        </div>

        <div className='contenedor-servicios'>
       
          <div className='contenedor-textos'>
            <h3 className='titulo-elegirnos'>¿Por que elegirnos?</h3>
            <p className='parrafo-elegirnos'>Con más de 25 años en el mercado de tecnología, Apocalipsis se ha consolidado como una organización de referencia y socio 
               estratégico para empresas en relación a la consultoría, diseño, provisión e implementación de soluciones de IT.
                Las soluciones que comercializamos ocupan una posición de liderazgo, lo cual 
                sumado a nuestra experiencia y trayectoria, asegura la optimización del negocio de nuestros clientes.
            </p>
          </div>
      
        </div>


        <div className='contenedor-soluciones'>
       
          <h1 className='titulo-soluciones'>Nuestras soluciones</h1> 
            <div className='cards-soluciones'>

            <div className='card'>
              <span class="material-symbols-outlined icono">home_repair_service</span>
              <h3 className='titulo-card'>Reparación de PC/Notebook</h3>
              <p className='texto-card'>Soluciones de Software y Hardware para su PC. Servicios
                totalmente garantizados para su seguridad.
              </p>
            </div>

            <div className='card'>
              <span class="material-symbols-outlined icono">lan</span>
              <h3 className='titulo-card'>Redes cableadas/WI-FI</h3>
              <p className='texto-card'>
                Implementación, asesoramiento y mantenimiento de redes
                empresariales y particulares. Optimizaciones en general.
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
            <a className='boton-verServicios-secundario' href='/servicios'>Ver servcios</a>
          </div>
          
  
        </div>

        <div className='contenedor-ventas'>
            <h2 className='titulo-ventas'>TU NUEVA PC ESTA ACÁ</h2> 
          <div className='contenedor-cards-pc'>
         
            <div className='contenedor-pc-arquitecto'>
              <h3 className='texto-arquitectura'>ARQUITECTURA</h3>
              <img className='imagen-notebook' src={imagenNotebookArquitecto} />
            </div>
            
            <div className='contenedor-pc-diseno-grafico'>
              <h3 className='texto-diseno-grafico'>DISEÑO GRAFICO</h3>
              <img className='imagen-notebook' src={imagenNotebookDiseno} />
            </div>

            <div className='contenedor-pc-diseno-grafico'>
              <h3 className='texto-diseno-grafico'>GAMER</h3>
              <img className='imagen-notebook' src={imagenPcGamer} />
            </div>
          
          </div>   
        </div>

        <Footer/>

      </div>
     
    )
}

export default IndexPage;