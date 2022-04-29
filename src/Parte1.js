import React from 'react';
import './Parte1.css';
import logo from './images/logo.png';


class Parte1 extends React.Component {
    render() {
        return(
            <div  className = 'logo'>
               <img src={logo} alt='logo' />
               <ul className='seleccion'>
               
                    <a href ="#Making-of" >MAKING-OF </a>
                    <a href="#Presse">PRESEE </a>
                    <a href="#Jens">JENS FRANKE </a>
                    <a href="#Sponsoren">SPONSOREN </a>
                    <a href="#Gps">GPS-SPAZIERGANG</a>
                    
               </ul>

            </div>
            

            
        )
    }
}

export default Parte1;
