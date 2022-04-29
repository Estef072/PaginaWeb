import React from "react";
import './Pagina.css';
import Parte1 from './Parte1'
import Intro from "./Intro";
import Carrusel from './Carrusel';
import Parte2 from './Parte2'
import Parte3 from "./Parte3";
import Parte4 from "./Parte4";
import Parte5 from "./Parte5";
import Parte6 from "./Parte6";


class Pagina extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <Parte1></Parte1>
                <div>
                    <Intro></Intro>

                </div>
                <div>
                    <Carrusel></Carrusel>

                </div>
                <div>
                    <Parte2></Parte2>

                </div>
                <div>
                    <Parte3></Parte3>

                </div>
                <div>
                    <Parte4></Parte4>

                </div>

                <div>
                    <Parte5></Parte5>

                </div>

                <div>
                    <Parte6></Parte6>

                </div>
            </div>

            

            
        );
    }
}
export default Pagina;