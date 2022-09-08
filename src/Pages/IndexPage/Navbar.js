import React from "react";
import './IndexPage.css';
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <div>
            <div className='links-info'>
            <Link className='nosotros' to={'/servicios'}>SERVICIOS</Link>
            <Link className='contacto' to={'/contacto'}>CONTACTO</Link>
            <Link className='productos' to={'/productos'}>PRODUCTOS</Link>
        </div>
        </div>
    )
}

export default Navbar;