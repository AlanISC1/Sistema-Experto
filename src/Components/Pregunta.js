import React from 'react';
import preguntas from '../API/preguntas';

import '../Styles/Pregunta.css'
import 'materialize-css/dist/css/materialize.min.css'

function Pregunta(props){
    if(props.questNumber>=12){
        return null;
    }
    const pregunta = preguntas.preguntas[props.questNumber];

    const setSel = (event) =>{
        props.setSel(event.target.value);
    }

    const opciones = pregunta.opciones.map((opcion)=>
        <p key={props.questNumber + opcion}>
            <label>
                <input onClick={setSel} value={opcion} name={props.questNumber} type="radio"/>
                    <span style={{fontSize:'large'}}>{opcion}</span>
            </label>
        </p>
    );

    return(
        <div className="contPreg">
            <p className="descripcion">
                {pregunta.pregunta}
            </p>
            <div className="opciones">
                {opciones}
            </div>
        </div>
    );
}

export default Pregunta;