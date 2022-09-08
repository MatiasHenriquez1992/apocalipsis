import React from "react";
import './NuestrosServicios.css';


function NuestrosServicios({tituloCard,textoCard, icono}){
    return(

        <div className='contenedor-cards'>
          <div className='cards'>
                <div style={{fontSize:'40px', color: '#03045E'}}>{icono}</div>
              <h3 className='titulo-card'>{tituloCard}</h3>
              <p className='texto-card'>{textoCard}</p>
          </div>
        </div>


    )
}

export default NuestrosServicios;