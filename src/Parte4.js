import React from 'react';
import './Parte4.css';
import separador from './images/separador.png';
import foto from './images/foto.jpg';


class Parte4 extends React.Component {
    render() {
        return(
            <div>
                
                <div className='grid-titulo'>
                    <div className='titulo'id ="Jens"> JENS FRANKE 
                        
                    </div>

                </div>  
                <div  className = "row">
                    <div className='columna1'>
                        <img className='foto' src={foto} alt='logo' />

                    </div>
                    <div className='columna2'>
                        <div className='grid-contenedor'>
                            <div className="grid-text22">Jens Franke, 29, arbeitet und lebt in Hannover als Senior Interactive Developer und Autor. Er ist zudem Dozent für Interaction Design an der HAWK Hildesheim.
                                <div>Hildesheim
                                    <a href="https://www.xing.com/profile/Jens_Franke2">XING|</a> 
                                    <a href="https://twitter.com/jensfranke">Twitter|</a> 
                                    <a href="https://www.facebook.com/jensfranke/">Facebook|</a> 
                            

                                </div>
                            
                        
                            </div>
                        
                            <div className="grid-text23">Vor mehr als 15 Jahren unternahm Jens Franke seine ersten zaghaften Schritte im Bereich der Fotografie. Seitdem hat der ausgewiesene Autodidakt seine Fähigkeiten auf unzähligen Workshops und Fotoreisen in Deutschland, Österreich, Norwegen, Schweden und Island immer weiter vertieft.
                            </div>

                        </div>
                        

                    </div>
                    
 
                    
                </div>
                
                

                
                <div>
                    <ul className='separador'>
                        <img src={separador} alt='Separador' />
                    </ul>  
                </div>
                        
            

                
                
            </div>
        );
    }
}

export default Parte4;
