import React from 'react';
import './Parte1.css';
import logo from './images/logo.png';


class Parte1 extends React.Component {
    render() {
        return(
            <div  className = 'logo'>
               <img src={logo} alt='logo' />
               <ul className='seleccion'>
               
                    <a href ="#" >MAKING-OF </a>
                    <a href="#">PRESEE </a>
                    <a href="#">JENS FRANKE </a>
                    <a href="#">SPONSOREN </a>
                    <a href="#">GPS-SPAZIERGANG</a>
                    
               </ul>

            </div>
            

            
        )
    }
}

export default Parte1;
