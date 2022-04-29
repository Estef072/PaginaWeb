import React from 'react';
import './Intro.css';


class Intro extends React.Component {
    render() {
        return(
            <header>
                <div className='grid-1colum'>
                    <div className='grid-text'>Im Herzen Hannovers erstreckt sich auf einer Fläche von rund 650 Hektar einer der bedeutendsten Stadtwälder Europas – die Eilenriede. Über einen Zeitraum von zwei Jahren hat der Hannoveraner Jens Franke diesen faszinierenden Lebensraum fast täglich fotografisch festgehalten.</div>
                </div>
                <div className='grid-contenedor'>        
                    <div className="grid-text2">Das Resultat der Dokumentation: 12 Kalendermotive – ausgewählt aus über 5.000 Aufnahmen – zeigen die Strahlkraft der Jahreszeiten und sind eine Hommage an die Charakterzüge der Natur aber auch an die Stadt Hannover.</div>
                    <div className="grid-text2">Das Projekt verfolgt keine kommerziellen Ziele. Sobald die Produktionskosten gedeckt sind, wird der Überschuss für die Umgestaltung einer Auffang- und Krankenstation für Tiere in der Waldstation Eilenriede gespendet.</div>
                </div>
                        
            

                
                
            </header>
        );
    }
}

export default Intro;
