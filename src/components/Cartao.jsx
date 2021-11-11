import { Avatar } from '@mui/material'
import {Card} from 'react-bootstrap'
import React from 'react'


const Cartao = (props) => {
    return (
        <>
          <Card sx={{ maxWidth: 345 }} >
                  <Card.Img  componentvariant="darkcenter" src={props.src} sx={{alignItems: 'center', display: 'flex' }} />
                  <Card.Body>
                    <Card.Title>{props.title} </Card.Title>
                    <hr />
                    <Card.Text>
                        {props.children}
                    </Card.Text>
                  </Card.Body>
                </Card> 
        </>
    )
}

export default Cartao
