import React from 'react';
import './Parte2.css';
import separador from './images/separador.png';



class Parte2 extends React.Component {
    render() {
        return(
            <header>
                <div className='titulo' id="Making-of" >MAKING-OF
                     
                </div>

              <div class="video">
                    <iframe  src="https://www.youtube.com/embed/sOnqjkJTMaA"frameborder="0" color='b6ae51' width="890" height='506'  allowfullscreen="allowfullscreen"></iframe>
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

export default Parte2;
