import Button from '@restart/ui/esm/Button'
import React, { useEffect, useState } from 'react'
import {Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Cartao from '../components/Cartao'
import apiCamara from '../services/apiCamara'
import "../Style/Style-Deputados.css"


const Deputados = () => {
    
    const [deputados, setdeputados] = useState([])

    useEffect(() => {

        apiCamara.get('/deputados').then(resultado => {
            setdeputados(resultado.data.dados);
        })
    }, [])



    return (
    <div class="deputados">

        <Container>


            <Row className="mt-4">
                {deputados.map(deputado => (
                    <Col key={deputado.id} md={3} className="mb-3">

                        <Cartao
                            title={deputado.nome} src={deputado.urlFoto} >
                            <p>Partido: {deputado.siglaPartido} ({deputado.siglaUf})</p>
                            <hr />
                            <Link style={{ textDecoration: 'none' }} to={"/deputados/" + deputado.id}>
                                <div className="d-grid gap-2">
                                    <Button className="btn btn-dark">
                                        Mais Detalhes
                                    </Button>
                                </div>
                            </Link>
                        </Cartao>

                    </Col>
                ))}
            </Row>
        </Container>
    </div>
    )
}

export default Deputados;