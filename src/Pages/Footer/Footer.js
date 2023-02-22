import React from 'react';
import './Footer.css';

//Icons
import { FaInstagram,FaFacebookF } from 'react-icons/fa';


function Footer(){
  return(
  <div className='contenedor-principal-footer'> 
    
      <div className='contenedor-formulario'>
       <form>
          <h2 className='titulo-contactanos'>Escribinos</h2>
          <input type='text' placeholder='Nombre'/>
          <input type='text' placeholder='Apellido'/>
          <input type='number' placeholder='Teléfono'/>
          <button className='boton-enviar' type='Submit'>Enviar</button>
       </form>
    </div>

    <div className='contenedor-redes'>
      <h1 className='titulo-redes-sociales'>REDES SOCIALES</h1>
      <a href='https://www.instagram.com/apocalipsiscipolletti/' className='icono-instagram'><FaInstagram /></a>
      <a href='https://www.facebook.com/cybermatica.cipolletti/' className='icono-facebook'><FaFacebookF /></a>
    </div>

    <div className='contenedor-contacto'>
      <h1 className='texto-titulo-contacto'>CONTACTO</h1>
      <p className='textos'>Whatsapp:<br></br>+54 299-4620179<br></br>+54 299-5024104</p>
      <p className='textos'>E-mail: servicios@apocalipsis.com</p>
      <h1 className='texto-titulo-horario'>HORARIO</h1>
      <p className='textos'>LUN-VIE: 9 a 19hs</p>
    </div>

  </div>
  )
}

export default Footer