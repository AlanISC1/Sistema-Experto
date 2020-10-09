import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

function Resultado(props){

    const tradicionales = Object.keys(props.tradicionales).length>0 ? props.tradicionales.map((pr)=>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pr.imagen} />
            <Card.Body>
                <Card.Title>{pr.nombre}</Card.Title>
                <Card.Text>
                   {pr.descripcion}
                </Card.Text>
            </Card.Body>
        </Card>
    ) : (
        <div style={{textAlign:'center', justifyContent:'center'}}><img alt="notfound" style={{width:'20%'}} src="https://cdn.iconscout.com/icon/free/png-512/data-not-found-1965034-1662569.png"/></div>
    );
    const agiles = Object.keys(props.agiles).length>0 ? props.agiles.map((pr)=>
        <Card style={{ width: '18rem', display:'inline'}}>
            <Card.Img variant="top" src={pr.imagen} />
            <Card.Body>
                <Card.Title>{pr.nombre}</Card.Title>
                <Card.Text>
                   {pr.descripcion}
                </Card.Text>
            </Card.Body>
        </Card>
    ) : (<div style={{textAlign:'center', justifyContent:'center'}}><img alt="notfound" style={{width:'20%'}} src="https://cdn.iconscout.com/icon/free/png-512/data-not-found-1965034-1662569.png"/></div>);

    return(
        <div>
            <div className="cards">
                <h3>Metodologías Tradicionales</h3>
                <CardDeck>
                    {tradicionales}
                </CardDeck>
            </div>
            <div style={{display:'inline'}}>
                <h3>Metodologías Ágiles</h3>
                <CardDeck>
                    {agiles}
                </CardDeck>

            </div>
        </div>

    );
}

export default Resultado;