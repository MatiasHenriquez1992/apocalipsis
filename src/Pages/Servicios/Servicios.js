import {Link} from 'react-router-dom';
import './Servicios.css';
import Footer from '../Footer/Footer.js';


//Images
import ImagenSoftware from '../../imagenes/imagensoftware.png';
import ImagenWeb from '../../imagenes/imagenweb.png';

//Animations
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';


//Icons
import { FaInstagram,FaFacebookF, FaHome } from 'react-icons/fa';


function Servicios(){
  return(
    <div className='contenedor-principal-servicios'>
      <div className='navbar'>
        <Link className='boton-inicio' to={'/'}><FaHome/>Inicio</Link>
          <div className='contenedor-redes-sociales-servicios'>
            <p className='texto-seguinos-servicios'>Seguinos</p>
            <a href='https://www.google.com.ar' className='icono-redes-servicios'><FaInstagram /></a>
            <a href='https://www.google.com.ar' className='icono-redes-servicios'><FaFacebookF /></a>
          </div>
      </div>

      <div className='contenedor-portada-servicios'>  
      <Bounce bottom cascade>
          <div className='contenedor-topologia'>
            <div className='contenedor-textos'>
              <h2 className='titulo-topologia'>COMUNICACION EN SU EMPRESA</h2>
              <p className='parrafo-topologia'>
                Nuestras soluciones de redes empresariales le permiten mantener conectada
                su organización con fines de producción y alta velocidad en procesos 
                a nivel corporativo. Con sistemas de redes corporativas usted
                puede almacenar la información privada de su organización con niveles
                de accesos acorde a sus necesidades, ademas de compartir impresoras,
                accesos a correos electronicos empresariales, entre otras caracteristicas.
              </p>
            </div>
          </div>
      </Bounce>
      </div>


      <div className='contenedor-software'>
      <Zoom bottom cascade>
          <div className='contenedor-textos-software'>
            <h2 className='titulo-software'>SOFTWARE PARA SU ORGANIZACIÓN</h2>
            <p className='parrafo-software'>Tener sus programas y sistemas operativos actualizados
              le permiten disfrutar de los ultimos avances tecnologicos del mercado. 
              obteniendo asi un mejor rendimiento y seguridad en su estación de trabajo.
            </p>
          </div>
        <img className='imagen-software' alt='imagenSoftware' src={ImagenSoftware}/>
      </Zoom>
      </div>

      <div className='contenedor-web'>
      <Zoom bottom cascade>
        <img className='imagen-web' alt='imagenSitioWeb' src={ImagenWeb} />
        <div className='contenedor-textos-web'>
            <h2 className='titulo-web'>MOSTRA TU NEGOCIO AL MUNDO</h2>
            <p className='parrafo-web'>
              Posicionate en la Web a nivel mundial y mostra tus
              productos y/o servicios a tus potenciales clientes brindandoles
              la información necesaria para su necesidad e inconveniente.
              Del desarrollo e implementacion nos ocupamos nosotros para brindarle
              un servicio en produccion 24/7 los 365 dias del año
            </p>
          </div>
      </Zoom>
      </div>

      <Footer />
    </div>



    )
}

export default Servicios;