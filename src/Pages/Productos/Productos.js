import React from "react";
import './Productos.css';
import Navbar from '../IndexPage/Navbar';
//IMAGENES CAMARAS
import DOMOHIKVISIONDS2CE76D0TEXIPF from '../../imagenes/productos/DOMO HIKVISION DS-2CE76D0T-EXIPF.png';
import CAMARADAHUAHACT2A21P0280B from '../../imagenes/productos/CAMARA DAHUA HAC-T2A21P-0280B.png';
import CAMARAHIKVISIONDS2CE70DF0TPF from '../../imagenes/productos/CAMARA HIKVISION DS-2CE70DF0T-PF.png';
import CAMARAIPHIKVISIONDS2CD1343G0I from '../../imagenes/productos/CAMARA IP HIKVISION DS-2CD1343G0-I.png';
import CAMARAHIKVISIONDS2CE16D0TEXIF from '../../imagenes/productos/CAMARA HIKVISION DS-2CE16D0T-EXIF.png';
import CAMARAHIKVISIONDS2CE16D0TVFIR3F from '../../imagenes/productos/CAMARA HIKVISION DS-2CE16D0T-VFIR3F.png';
import CAMARADAHUADHHACME1509THPPV0360B from '../../imagenes/productos/CAMARA DAHUA DH-HAC-ME1509THP-PV-0360B.png';


//IMAGENES DVR
import DVR4CHHIKVISIONDS7204HGHIK1S from '../../imagenes/productos/DVR 4CH HIKVISION DS-7204HGHI-K1 (S).png';
import DVR8CHHIKVISIONDS7208HGHIK1 from '../../imagenes/productos/DVR 8CH HIKVISION DS-7208HGHI-K1.png';
import DVR16CHHIKVISIONDS7216HGHIK1STDS from '../../imagenes/productos/DVR 16CH HIKVISION DS-7216HGHI-K1(STD)(S).png';









function Productos(){
    return(
        <div className="contenedor-principal-productos">

            <Navbar />
            <h2 className="titulo-nuestros-productos">Nuestros productos</h2>

            <div className="contenedor-productos">
                <h2 className="titulo-domo">CAMARAS TIPO DOMO</h2>

                <div className="card-producto">
                    <img className="imagen-producto" src={DOMOHIKVISIONDS2CE76D0TEXIPF}></img>
                    <h2 className="titulo-producto">CAMARA HIKVISION<br/> DS-2CE76D0T-EXIPF</h2>
                    <p className="descripcion-producto">
                        Caracteristicas:<br/>
                        2mpx 1920x1080px 2.8mm <br/> CARCAZA PLASTICA <br/> Distancia visual: IR 20 metros.</p>
                </div>

                <div className="card-producto">
                    <img className="imagen-producto" src={CAMARADAHUAHACT2A21P0280B}></img>
                    <h2 className="titulo-producto">CAMARA DAHUA<br/> HAC-T2A21P-0280B</h2>
                    <p className="descripcion-producto">
                        Caracteristicas:<br/>
                        2mpx 1080px 2.8mm<br/>CARCAZA METALICA<br/>Distancia visual: IR 30 metros</p>
                </div>

                <div className="card-producto">
                    <img className="imagen-producto" src={CAMARAHIKVISIONDS2CE70DF0TPF}></img>
                    <h2 className="titulo-producto">CAMARA HIKVISION<br/> DS-2CE70DF0T-PF</h2>
                    <p className="descripcion-producto">
                        Caracteristicas:<br/>
                        2mpx 1920x1080px 2.8MM<br/> CARCAZA PLASTICA<br/>COLOR-VU FULL<br/>Distancia visual: IR 20 metros</p>
                </div>

                <div className="card-producto">
                    <img className="imagen-producto" src={CAMARAIPHIKVISIONDS2CD1343G0I}></img>
                    <h2 className="titulo-producto">CAMARA IP HIKVISION<br/>DS-2CD1343G0-I</h2>
                    <p className="descripcion-producto">
                        Caracteristicas:<br/>
                        4mpx 2.8mm<br/> CARCAZA METAL+PLASTICO EXTERIOR<br/>Distancia visual: IR 30 metros</p>
                </div>


                <h2 className="titulo-bullet">CAMARAS TIPO BULLET</h2>
                

                <div className="card-producto">
                    <img className="imagen-producto" src={CAMARAHIKVISIONDS2CE16D0TEXIF}></img>
                    <h2 className="titulo-producto">CAMARA HIKVISION<br/>DS-2CE16D0T-EXIF</h2>
                    <p className="descripcion-producto">
                        Caracteristicas:<br/>
                        2mpx 2.8mm <br/> CARCAZA METALICA EXTERIOR <br/> Distancia visual: IR 20 metros</p>
                </div>

                <div className="card-producto">
                    <img className="imagen-producto" src={CAMARAHIKVISIONDS2CE16D0TVFIR3F}></img>
                    <h2 className="titulo-producto">CAMARA HIKVISION<br/>DS-2CE16D0T-VFIR3F</h2>
                    <p className="descripcion-producto">
                        Caracteristicas:<br/>
                        2mpx 2.8-12mm<br/> Varifocal<br/>CARCAZA METALICA<br/> Distancia visual: IR 40 metros</p>
                </div>

                <div className="card-producto">
                    <img className="imagen-producto" src={CAMARADAHUADHHACME1509THPPV0360B}></img>
                    <h2 className="titulo-producto">CAMARA DAHUA<br/>DH-HAC-ME1509THP-PV-0360B</h2>
                    <p className="descripcion-producto">
                        Caracteristicas:<br/>
                        5mpx 3.6mm FULL COLOR<br/>CARCAZA METAL+PLASTICO<br/>Distancia visual: IR 40 metros</p>
                </div>
                

                <h2 className="titulo-dvr">DVR'S</h2>

                <div className="card-producto">
                    <img className="imagen-producto" src={DVR4CHHIKVISIONDS7204HGHIK1S}></img>
                    <h2 className="titulo-producto">DVR HIKVISION<br/>DS-7204HGHI-K1 (S)</h2>
                    <p className="descripcion-producto">
                        Caracteristicas:<br/>
                        4 canales<br/> 2mpx<br/>CAMARAS IP <br/>AUDIO COAXIL</p>
                </div>

                <div className="card-producto">
                    <img className="imagen-producto" src={DVR8CHHIKVISIONDS7208HGHIK1}></img>
                    <h2 className="titulo-producto">DVR HIKVISION<br/>DS-7208HGHI-K1</h2>
                    <p className="descripcion-producto">
                        Caracteristicas:<br/>
                        8 canales<br/>2mpx<br/>10 CAMARAS IP<br/>AUDIO COAXIL</p>
                </div>

                <div className="card-producto">
                    <img className="imagen-producto" src={DVR16CHHIKVISIONDS7216HGHIK1STDS}></img>
                    <h2 className="titulo-producto">DVR HIKVISION<br/>DS-7208HGHI-K1</h2>
                    <p className="descripcion-producto">
                        Caracteristicas:<br/>
                        16 canales<br/>2mpx<br/>18 CAMARAS IP<br/>AUDIO COAXIL</p>
                </div>                
        
                
                
            </div>


        </div>
    )
}

export default Productos;