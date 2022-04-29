import React from 'react';
import './Parte3.css';
import separador from './images/separador.png';


class Parte3 extends React.Component {
    render() {
        return(
            <header>
                
                <div className='grid-titulo'>
                    <div className='titulo' id="Presse"> PRESSE </div>

                    <div className='titulo2'id="Gps"> GPS-SPAZIERGANG </div>
                     
                </div>  
                
                <div className='grid-contenedor'>      
                    
                    <div className="grid-text2">Für alle Vertreter der Presse und andere Interessierte gibt es hier ein Informations-Paket mit ausführlichem Pressetext, Bildern vom Kalender und vom Fotograf in druckbarer Qualität. Über die E-Mail Adresse
                        <a href="mailto:info@lebensraum-eilenriede.de?Subject=Presseanfrage">info@lebensraum-eilenriede.de</a> können Sie direkt mit Jens Franke Kontakt aufnehmen.
                        
                        <div className='button'>
                            <form method="get" action="/page2">
                                <button type="submit">PRESSEPAKET HERUNTERLADEN</button>
                            </form>
                        </div>
                    </div>

                
                
                                
                    <div className="grid-text2">Würden Sie gerne die Kalendermotive mit ihren eigenen Augen entdecken? Wenn Sie ein GPS-fähiges Gerät besitzen, können Sie sich jetzt den ersten von insgesamt drei Spaziergängen kostenlos herunterladen. Zusätzlich stehen die Routen auch auf dem Portal GPS-Tours zur Verfügung.
                        
                        <div>
                            <il >
                                <div className='link1'>
                                    <b>Spaziergang #1</b>
                                    <a href='https://www.gps-tour.info/de/touren/detail.69763.html' target='blank' title="Spaziergang #1 auf GPS-Tour.info ansehen">Auf GPS-Tour.info ansehen</a>
                                    <a href="gps/lebensraum_eilenriede_tour_1.zip" target='_blank' title='Spaziergang #1 GPX-als Datei herunterladen'>GPX-Datei herunterladen</a>
                                </div>
                            </il>

                            <div >
                                <il className='link2'>
                                    <il>
                                        <b>Spaziergang #2</b>
                                        <a href='https://www.gps-tour.info/de/touren/detail.71647.html' target='blank' title="1">Auf GPS-Tour.info ansehen</a>
                                        <a href='https://www.gps-tour.info/de/touren/detail.71647.html' target='blank' title='2'>Auf GPS-Tour.info ansehen</a>

                                    </il>
                                    

                                </il>
                           
                            </div>
                            <div />
                        </div>

                        

                      
                    </div>
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

export default Parte3;
