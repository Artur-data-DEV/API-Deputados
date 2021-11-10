import React, { useEffect, useState } from 'react'
import { Card, CardImg, Col, Row } from 'react-bootstrap'
import Cartao from '../components/Cartao.jsx'
import apiCamara from '../services/apiCamara.js'
import Money from "../assets/icons/money.png"

const DeputadosDetalhes = (props) => {



    const [deputados, setDeputados] = useState({})
    const [despesas, setDespesas] = useState([])

    useEffect(() => {
        const id = props.match.params.id

        apiCamara.get(`/deputados/${id}`).then(resultado => {
            setDeputados(resultado.data.dados);
        })

        apiCamara.get(`/deputados/${id}/despesas`).then(resultado => {
            setDespesas(resultado.data.dados);
        })

    }, [props])




    console.log(despesas);

    return (

        <>

            {deputados.id &&
                <>
                    <Row>
                        <Col md={3}  style={{ backgroundColor: "black", paddingTop: "10px" }}>
                            <Card>
                                <CardImg variant="top" src={deputados.ultimoStatus.urlFoto} />
                            </Card>
                        </Col>
                        <Col md={9} style={{ backgroundColor: "silver", paddingTop: "10px" }}>
                            <Cartao >
                                <h1>{deputados.nomeCivil}</h1>
                                <p>UF: {deputados.ufNascimento}</p>
                                <p>Data de nascimento: {deputados.dataNascimento}</p>
                                <p>Sexo: {deputados.sexo}</p>
                                <p>Partido: {deputados.ultimoStatus.siglaPartido}</p>
                            </Cartao>
                        </Col>
                        <div style={{ backgroundColor: "black" }}>
                            <Row className="mt-4">
                                <h2 style={{color: "green", textAlign: "center"}}>GASTOS </h2> {despesas.map(despesa => (

                                    <Col key={despesa.mes} md={3} className="mb-3">
                                        <Cartao  >

                                            <p style={{ backgroundColor: "green", borderRadius: "80px 30px", padding:"4%"}}><img src={Money} width='20px' /> {despesa.tipoDespesa} <br /> </p>
                                            <p style={{textAlign: "center", color: "red"}}> Custo: R${despesa.valorDocumento} </p>
                                            <p style={{textAlign: "center"}}>{despesa.mes}/{despesa.ano}</p>
                                        </Cartao>

                                    </Col>
                                ))}



                            </Row>
                        </div>
                    </Row>



                    {/* {despesas.id &&
                <Row>
                    {creditos.cast.map((ator,) => (
                        <Col key={ator.id} md={2}>
                            <p>{ator.name}</p>
                            <Card>
                                <CardImg variant="top" src={`https://image.tmdb.org/t/p/w500/${ator.profile_path}`} />
                            </Card>
                        </Col>
                    ))
                    }
                </Row>
            } */}

                </>
            }
        </>
    )
}


export default DeputadosDetalhes