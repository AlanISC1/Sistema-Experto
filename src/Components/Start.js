import React from 'react';
import {useState, useEffect} from 'react';
import filterObjectArray from 'filter-object-array';
//bootstrap
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//materialize
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowAltCircleRight, faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons'
//components
import Navigation from './Navigation';
import Pregunta from './Pregunta';
import Resultado from './Resultado';
//api
import metodos from '../API/metodos';


import '../Styles/Start.css'

function Start(){

    const [loaded, setLoaded] = useState(false);
    const [porcentaje, setPorcentaje] = useState(0);
    const [filtrarState, setFiltrarState] = useState({});
    const [tradicionales, setTradicionales]=useState([]);
    const [agiles, setAgiles]=useState([]);
    const [questNumber, setQuestNumber] = useState(0);
    const [selected, setSelected] = useState(false);
    const pregDictionary = {
        0: "dev_team",
        1: "team_exp",
        2: "proy_size",
        3: "lapso_tiempo",
        4: "control_riesgos",
        5: "planeacion",
        6: "pruebas",
        7: "calidad_final",
        8: "interaccion_cliente",
        9: "mantenimiento",
        10: "documentacion",
        11: "adaptacion_cambio"
    }

    const reload = ()=>{
        //alert('Reload from Start');
        window.location.reload();
    }

    const home = () => {
        
    }

    const setSel = (sel) =>{
        const nomFilt = pregDictionary[questNumber];
        const filtrados = {...filtrarState};
        filtrados[nomFilt]=sel;
        setFiltrarState(filtrados);
        setSelected(true);
    }

    const nextQuest = async() =>{
        if(!selected){
            return
        }
        if(questNumber<12){
            setQuestNumber(questNumber+1);
            let porc = 0;
            porc= ((questNumber+1)*100)/12;
            setPorcentaje(porc);
            setSelected(false);
            let filtTrad = await filterObjectArray({array: metodos.tradicionales, objFilter:filtrarState});
            let filtAg = await filterObjectArray({array: metodos.agiles, objFilter: filtrarState});
            setTradicionales(filtTrad);
            setAgiles(filtAg);
        }
    }

    const prevQuest = async() =>{
        if(questNumber>0){
            setQuestNumber(questNumber-1);
            let porc = 0;
            porc= ((questNumber-1)*100)/12;
            setPorcentaje(porc);
            setSelected(false);
            const filt = filtrarState;
            console.log(pregDictionary[questNumber-1]);
            delete filt[pregDictionary[questNumber-1]];
            setFiltrarState(filt);
            let filtTrad = await filterObjectArray({array: metodos.tradicionales, objFilter:filt});
            let filtAg = await filterObjectArray({array: metodos.agiles, objFilter: filt});
            setTradicionales(filtTrad);
            setAgiles(filtAg);
        }
        
    }

    useEffect(()=>{
        setTimeout(()=>{
            setLoaded(true);
        }, 2000)
    },[]);

    return(
        <div className="Start">
        {!loaded &&
            <Spinner style={{width:"5rem", height:"5rem"}} className="loading" animation="grow" variant="dark" />
        }
        {loaded &&
            <div>
                <header>
                    <Navigation reload={reload} home={home}/>
                </header>
                <div>
                    <Pregunta setSel={setSel} questNumber={questNumber}/>
                </div>
                {questNumber<12 &&
                <div>
                    <div className="barra">
                        <div className="progress">
                            <div className="determinate" style={{width:`${porcentaje}%`}}></div>
                        </div>
                    </div>
                    <div className="siguiente">
                        <Button onClick={prevQuest} style={{height:'3.4rem'}} variant="success"><FontAwesomeIcon style={{fontSize:"3rem", paddingBottom:'4px'}} icon={faArrowAltCircleLeft} /></Button>
                        <Button onClick={nextQuest} style={{height:'3.4rem', marginLeft:'10px'}} variant="success"><FontAwesomeIcon style={{fontSize:"3rem", paddingBottom:'4px'}} icon={faArrowAltCircleRight} /></Button>
                    </div>
                    <Row className="RowNombre">
                        <Col className="nombres">
                            <h4>Tradicionales</h4>
                            <ul>
                            {
                                tradicionales.map((trad)=>
                                    <li key={trad.nombre}>{trad.nombre}</li>
                                )
                            }
                            </ul>
                        </Col>
                       <Col className="nombres">
                            <h4>Ágiles</h4>
                            <ul>
                            {
                                agiles.map((agil)=>
                                    <li key={agil.nombre}>{agil.nombre}</li>
                                )
                            }
                            </ul>
                       </Col>
                    </Row>
                </div>
                }
                {
                    questNumber>=12 &&
                    <div>
                       <Resultado tradicionales={tradicionales} agiles={agiles} /> 
                    </div>
                }
            </div>
        }
        </div>
    );
}

export default Start;