
import { Card } from 'react-bootstrap'
import React from 'react'







const Options = (props) => {
  return (
    <>
      <Card sx={{ maxWidth: 200 }} >
        <Card.Img componentVariant="darkcenter" src={props.src} sx={{ alignItems: 'center', display: 'flex' }} />
        <Card.Body>
          <Card.Title>{props.title} </Card.Title>
          <Card.Text>
            {props.children}
          
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Options
