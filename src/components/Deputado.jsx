
import { Card } from 'react-bootstrap'
import React from 'react'


const Deputado = (props) => {
    return (
        <>
            <Card sx={{ maxWidth: 345 }} >
                <Card.Img componentVariant="darkcenter" src={props.src} sx={{ alignItems: 'center', display: 'flex' }} />
                <Card.Body>
                    <Card.Title>{props.title} </Card.Title>
                    <h3 style={{ textAlign: 'center', paddingRight: "10px" }}> Detalhes</h3>
                    <hr />
                    <Card.Text>
                        {props.children}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Deputado
