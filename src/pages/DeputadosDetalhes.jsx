import React, { useEffect, useState } from 'react'
import { Card, CardImg, Col, Row } from 'react-bootstrap'
import Cartao from '../components/Cartao.jsx'
import apiCamara from '../services/apiCamara.js'
import Money from "../assets/icons/money.png"
import OrgaosIcon from "../assets/icons/partido-politico.png"
import "../Style/Style-DeputadosDetalhes.css"


const DeputadosDetalhes = (props) => {



    const [deputados, setDeputados] = useState({})
    const [despesas, setDespesas] = useState([])
    const [partido, setPartido] = useState({})
    const [idPartido, setIdPartido] = useState(0)
    const [orgaos, setOrgaos] = useState([])


    useEffect(() => {
        const id = props.match.params.id

        apiCamara.get(`/deputados/${id}`).then(resultado => {
            setDeputados(resultado.data.dados);

            // eslint-disable-next-line no-new-wrappers
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

        apiCamara.get(`/deputados/${id}/orgaos`).then(resultado => {
            setOrgaos(resultado.data.dados);

        })


    }, [props])



    function formatarDataNascimento() {
        const dataNascimento = deputados.dataNascimento
        const dataNascimentoFormatada = dataNascimento.split('-')
        const dataNascimentoFinal = dataNascimentoFormatada[2] + '/' + dataNascimentoFormatada[1] + '/' + dataNascimentoFormatada[0]
        return dataNascimentoFinal

    }

    function formatarEscolaridade() {
        const escolaridade = deputados.escolaridade
        return escolaridade.includes("Incompleto") ? escolaridade : escolaridade + " Completo"
    }

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
                        <Col md={8} className="Col2" >

                            <Cartao >
                                <h1 class='h1'>{deputados.nomeCivil} </h1><br />

                                <p>Naturalidade: {deputados.municipioNascimento}  - {deputados.ufNascimento} </p>

                                <p>Data de nascimento: {formatarDataNascimento()}</p>
                                <p>Sexo: {deputados.sexo}</p>
                                <p>Partido: {deputados.ultimoStatus.siglaPartido}</p>
                                <a href={`/partidos/${idPartido}`}><img src={partido.urlLogo ? partido.urlLogo : "Carregando..."} alt="Logo partido" /></a>
                            </Cartao>
                            <br />
                            <Cartao >
                                <p>Condição Eleitoral: {deputados.ultimoStatus.condicaoEleitoral}</p>
                                <p>Descrição: {deputados.ultimoStatus.descricaoStatus || 'N/A'}</p>
                                <p>Escolaridade: {formatarEscolaridade()}</p>
                                <p>E-mail: {deputados.ultimoStatus.gabinete.email}</p>
                                <p>Telefone: {deputados.ultimoStatus.gabinete.telefone}</p>


                            </Cartao>
                        </Col>
                        
                        <div style={{ backgroundColor: "grey" }}>
                            <Row className="mt-4">
                                <h2 style={{ color: "black", textAlign: "center", backgroundColor: "silver", border: "5px solid", padding: "5px" }}>GASTOS </h2>{despesas.map(despesa => (

                                    <Col key={despesa.mes} md={3} className="mb-3" >
                                        <Cartao  >

                                            <p style={{ backgroundColor: "green", borderRadius: "30px 0px", padding: "4%", color: "white" }}><img src={Money} alt="money logo" width='20px' /> {despesa.tipoDespesa} <br /> </p>
                                            <p style={{ textAlign: "center", color: "red" }}> Custo: R${despesa.valorDocumento} </p>
                                            <p style={{ textAlign: "center" }}>Mês/Ano: {despesa.mes}-{despesa.ano}</p>

                                        </Cartao>

                                    </Col>
                                ))}



                            </Row>
                        </div>

                        <div style={{ backgroundColor: "grey" }}>
                            <Row className="mt-4">
                                <h2 style={{ color: "black", textAlign: "center", backgroundColor: "silver", border: "5px solid", padding: "5px" }}>ORGÃOS </h2> {orgaos.map((orgao, i) => (

                                    <Col key={i} md={4} className="mb-3">
                                        <Cartao title={orgao.siglaOrgao}  >


                                            <p style={{ backgroundColor: "black", borderRadius: "40px 0px", padding: "4%" }}> <a style={{ textDecoration: "none", color: "white" }} href={`/orgaos/${orgao.idOrgao}`}><img src={OrgaosIcon} alt="Orgaos" width='50px' /> {orgao.nomeOrgao}</a> <br /> </p>
                                            <p style={{ textAlign: "center", color: "blue" }}> Cargo: {orgao.titulo} </p>
                                            <p style={{ textAlign: "center" }}> {orgao.nomePublicacao}</p>

                                        </Cartao>

                                    </Col>
                                ))}



                            </Row>
                        </div>

                        <div style={{ backgroundColor: "grey" }}>
                            <Row className="mt-4">
                                <h2 style={{ color: "black", textAlign: "center", backgroundColor: "silver", border: "5px solid", padding: "5px" }}>ORGÃOS </h2> {orgaos.map((orgao, i) => (

                                    <Col key={i} md={4} className="mb-3">
                                        <Cartao title={orgao.siglaOrgao}  >


                                            <p style={{ backgroundColor: "black", borderRadius: "40px 0px", padding: "4%" }}> <a style={{ textDecoration: "none", color: "white" }} href={`/orgaos/${orgao.idOrgao}`}><img src={OrgaosIcon} alt="Orgaos" width='50px' /> {orgao.nomeOrgao}</a> <br /> </p>
                                            <p style={{ textAlign: "center", color: "blue" }}> Cargo: {orgao.titulo} </p>
                                            <p style={{ textAlign: "center" }}> {orgao.nomePublicacao}</p>

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