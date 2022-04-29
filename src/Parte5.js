import React from 'react';
import './Parte5.css';
import separador from './images/separador.png';
import coso from './images/coso.png';
import coso2 from './images/coso2.png';

class Parte5 extends React.Component {
    render() {
        return(
            <div>
                
                <div className='grid-titulo'>
                    <div className='titulo'id="Sponsoren"> SPONSOREN / PARTNER
                        
                    </div>

                </div>  
                <div  className = "row">
                    <div className='columna01'>
                       
                        <ul className="grid-text2">Der Kalender wurde klimaneutral und umweltfreundlich von der Druckerei Münstermann aus Hannover auf FSC-zertifiziertem Papier gedruckt.
                        </ul>
                            
                        <ul className="grid-text2">Der FSC ist eine gemeinnützige und unabhängige internationale Organisation zur Förderung verantwortungsvoller Waldwirtschaft. Alle FSC-zertifizierten Papiere stammen aus nachhaltig bewirtschafteten Wäldern und anderen kontrollierten Quellen. Durch die Verwendung unterstützen wir direkt eine umweltgerechte, sozialverträgliche und wirtschaftlich tragfähige Waldbewirtschaftung.
                
                        </ul>
                        <ul className="grid-text2">Darüber hinaus findet ein CO2-Ausgleich für die Produktion dieses Kalenders statt. Das Projekt entspricht dem „Gold Standard“ und unterstützt das „Windenergieprojekt in der Marmara-Region“ mit der Ident-Nr.
                
                        </ul>

                       
                        

                    </div>
                    <div className='columna02'>
                        <div className='letra'>MIT FREUNDLICHER UNTERSTÜTZUNG VON
                            <img className='foto1' src={coso2} alt='logo' />
                        </div>

                        <div className='letra'>UND DEM BEZIRKSRAT MITTE DER
                            <img className='foto2' src={coso} alt='logo' />
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

export default Parte5;
