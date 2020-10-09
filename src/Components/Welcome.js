import React from 'react';
import Button from 'react-bootstrap/Button';
import {Link, useLocation} from 'react-router-dom';

import '../Styles/Welcome.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Welcome(){
    const location = useLocation().pathname;

    if(location==="/"){
        return(
            <div className="Welcome">
                <header className="Welcome-header">
                    <img src="./logo512.png" className="Welcome-logo" alt="logo" />
                    <p>
                    Sistema Experto para elegir una metodología
                    </p>
                    <Link to="/start">
                        <Button style={{height:'50px'}} variant="primary" size="lg">
                            Comenzar
                        </Button>
                    </Link>
                </header>
            </div>
        );
    }
    else{
        return null;
    }    
    
}

export default Welcome;