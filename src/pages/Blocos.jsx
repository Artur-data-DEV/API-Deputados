import Button from '@restart/ui/esm/Button'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Cartao from '../components/Cartao'
import apiCamara from '../services/apiCamara'
import "../Style/Style-Blocos.css"


const Blocos = () => {

    const [blocos, setblocos] = useState([])

    useEffect(() => {

        apiCamara.get('/blocos/').then(resultado => {
            setblocos(resultado.data.dados);
        })
    }, [])



    return (
        <>

            <Container fluid className="blocos">
                <div >


                    <Row className="mt-4">
                        {blocos.map(bloco => (
                            <Col key={bloco.id} md={12} className="mb-3">

                                <Cartao title={"Número: " + bloco.idLegislatura + " - " + bloco.nome} href={bloco.uri}>

                                </Cartao>

                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default Blocos;
