import React from 'react';
import './Carrusel.css';
import fotoP from './images/fotoP.jpg'
import january from './images/january.jpg'
import february from './images/february.jpg'
import march from './images/march.jpg'
import april from './images/april.jpg'
import may from './images/may.jpg'
import june from './images/june.jpg'
import july from './images/july.jpg'
import august from './images/august.jpg'
import sepptember from './images/sepptember.jpg'
import october from './images/october.jpg'
import november from './images/november.jpg'
import december from './images/december.jpg'
import separador from './images/separador.png'

class Carrusel extends React.Component {
    render() {
        return(
            <header>
                <div style={{background: 'red'}}className="carrusel">
                    <div className="carrusel-fotos">
                        
                        <img id="1"src={fotoP} alt='foto principal' />

                        <img id="2" src={january} alt='fotoJanuary' />
    
                        <img id="3"src={february} alt='foto February' />
                        <img id="4"src={march} alt='foto March' />
                        <img id="5"src={april} alt='foto April' />
                        <img id="6"src={may} alt='foto May' />
                        <img id="7"src={june} alt='foto June' />
                        <img id="8"src={july} alt='foto July' />
                        <img id="9"src={august} alt='foto August' />
                        <img id="10"src={sepptember} alt='foto September' />
                        <img id="11"src={october} alt='foto October' />
                        <img id="12" src={november} alt='foto November' />
                        <img id="13"src={december} alt='foto December' />
                        
                    </div>
                    

                </div>
                <div>
                    <ul className= 'menu'>
                        <a href ="#1" >INICIO </a>
                        <a href="#2">January </a>
                        <a href="#3">February </a>
                        <a href="#4">March </a>
                        <a href="#5">April</a>
                        <a href ="#6" >May </a>
                        <a href="#7">June </a>
                        <a href="#8">July </a>
                        <a href="#9">August </a>
                        <a href="#10">September</a>
                        <a href="#11">October</a>
                        <a href="#12">November</a>
                        <a href="#13">December</a>
                    </ul>     

                </div>

                <div>
                    <ul class= 'separador'>
                    <img src={separador} alt='Separador' />
                    </ul>  
                </div>

               

            </header>
        );
    }
}

export default Carrusel;