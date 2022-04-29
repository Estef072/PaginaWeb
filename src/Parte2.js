import React from 'react';
import './Parte2.css';
import separador from './images/separador.png';



class Parte2 extends React.Component {
    render() {
        return(
            <header>
                <div className='titulo' id="Making-of" >MAKING-OF</div>

                <div className='video'>
                    <iframe  src='https://www.youtube.com/embed/sOnqjkJTMaA' color='b6ae51' width="890" height='506' ></iframe>
                </div>

                <div>
                    <ul className='separador'>
                        <img src={separador} alt='Separador' />
                    </ul>  
                </div>

          

                
                
            </header>
        );
    }
}

export default Parte2;
