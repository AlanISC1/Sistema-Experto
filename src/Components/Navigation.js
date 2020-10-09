import React from 'react';
import {Link} from 'react-router-dom';
//bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
//materialize
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo, faHome } from '@fortawesome/free-solid-svg-icons'

function Navigation(props){
  const reload = ()=>{
   props.reload();
  }

    return(
        <>
        <Navbar className="navBar" bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link><Button onClick={reload} variant="success"><FontAwesomeIcon style={{fontSize:"2rem", paddingBottom:'4px'}} icon={faRedo} /></Button></Nav.Link>
            <Nav.Link><Link to="/"><Button variant="info"><FontAwesomeIcon style={{fontSize:"2rem", paddingBottom:'4px'}} icon={faHome} /></Button></Link></Nav.Link>
          </Nav>
        </Navbar>
        </>
    );
}

export default Navigation;