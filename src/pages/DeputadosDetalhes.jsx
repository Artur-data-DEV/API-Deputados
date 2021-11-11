import React, { useEffect, useState } from 'react'
import { Card, CardImg, Col, Row } from 'react-bootstrap'
import Cartao from '../components/Cartao.jsx'
import apiCamara from '../services/apiCamara.js'
import Money from "../assets/icons/money.png"
import "../Style/Style-DeputadosDetalhes.css"

const DeputadosDetalhes = (props) => {



    const [deputados, setDeputados] = useState({})
    const [despesas, setDespesas] = useState([])
    const [partido, setPartido] = useState({})
    const [idPartido, setIdPartido] = useState(0)
    

    useEffect(() => {
        const id = props.match.params.id

        apiCamara.get(`/deputados/${id}`).then(resultado => {
            setDeputados(resultado.data.dados);

            const urlSplitted = new String(resultado.data.dados.ultimoStatus.uriPartido).split('/')
            const lastIndex = urlSplitted.length - 1

            const idPartido = urlSplitted[lastIndex]
            setIdPartido(idPartido)
            
            apiCamara.get(`/partidos/${idPartido}`).then(partido => {
                setPartido(partido.data.dados)

            })
        })
        apiCamara.get(`/deputados/${id}/despesas`).then(resultado => {
            setDespesas(resultado.data.dados);

        })
    }, [props])

    return (

        <>

            {deputados.id &&
                <>
                    <Row className="Row1">
                        <Col md={3} className="Col1">
                            <Card>
                                <CardImg variant="top" src={deputados.ultimoStatus.urlFoto} />
                            </Card>
                        </Col>
                        <Col md={8} className="Col2">
                            <Cartao >
                                <h1>{deputados.nomeCivil}</h1>
                                <p>UF: {deputados.ufNascimento}</p>
                                <p>Data de nascimento: {deputados.dataNascimento}</p>
                                <p>Sexo: {deputados.sexo}</p>
                                <p>Partido: {deputados.ultimoStatus.siglaPartido}</p>
                               <p>Logo: <a href={`/partidos/${idPartido}`}><img src={partido.urlLogo} alt="Logo partido" href /></a></p>
                            </Cartao>
                        </Col>
                        <div style={{ backgroundColor: "grey" }}>
                            <Row className="mt-4">
                                <h2 style={{ color: "black", textAlign: "center" }}>GASTOS </h2> {despesas.map(despesa => (

                                    <Col key={despesa.mes} md={3} className="mb-3">
                                        <Cartao  >

                                            <p style={{ backgroundColor: "green", borderRadius: "80px 30px", padding: "4%" }}><img src={Money} width='20px' /> {despesa.tipoDespesa} <br /> </p>
                                            <p style={{ textAlign: "center", color: "red" }}> Custo: R${despesa.valorDocumento} </p>
                                            <p style={{ textAlign: "center" }}>Mês/Ano: {despesa.mes}-{despesa.ano}</p>

                                        </Cartao>

                                    </Col>
                                ))}



                            </Row>
                        </div>
                    </Row>

                </>
            }
        </>
    )
}


export default DeputadosDetalhes