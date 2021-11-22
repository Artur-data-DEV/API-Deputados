import React, { useEffect, useState } from 'react'
import { Card, CardImg, Col, Row } from 'react-bootstrap'
import Cartao from '../components/Cartao.jsx'
import Options from '../components/Options.jsx'
import Deputado from "../components/Deputado.jsx"
import apiCamara from '../services/apiCamara.js'
import Money from "../assets/icons/money.png"
import OrgaosIcon from "../assets/icons/partido-politico.png"
import "../Style/Style-DeputadosDetalhes.css"
import gastosIcon from '../assets/icons/gastos.png'
import frentesIcon from '../assets/icons/agreement.png'
import eventosIcon from '../assets/icons/calendar.png'




const DeputadosDetalhes = (props) => {



    const [deputados, setDeputados] = useState({})
    const [despesas, setDespesas] = useState([])
    const [partido, setPartido] = useState({})
    const [idPartido, setIdPartido] = useState(0)
    const [orgaos, setOrgaos] = useState([])
    const [frentes, setFrentes] = useState([])
    const [eventos, setEventos] = useState([])


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

        apiCamara.get(`/deputados/${id}/despesas?itens=12&ordem=ASC`).then(resultado => {
            setDespesas(resultado.data.dados);

        })

        apiCamara.get(`/deputados/${id}/orgaos?itens=9&ordem=ASC&ordenarPor=nomeOrgao`).then(resultado => {
            setOrgaos(resultado.data.dados);

        })
        apiCamara.get(`/deputados/${id}/frentes`).then(resultado => {
            setFrentes(resultado.data.dados);

        })
        apiCamara.get(`/deputados/${id}/eventos?itens=6&ordem=ASC&ordenarPor=dataHoraInicio`).then(resultado => {
            setEventos(resultado.data.dados);

        })



    }, [props])



    function formatarDataNascimento() {
        const dataNascimento = deputados.dataNascimento
        const dataNascimentoFormatada = dataNascimento.split('-')
        const dataNascimentoFinal = dataNascimentoFormatada[2] + '/' + dataNascimentoFormatada[1] + '/' + dataNascimentoFormatada[0]
        return dataNascimentoFinal

    }
    function formatarDataFalecimento() {
        const dataFalecimento = deputados.dataFalecimento
        if (dataFalecimento == null || undefined) {
            const dataFalecimento = "N/A"
            return dataFalecimento
        }
        const dataFalecimentoFormatada = dataFalecimento.split('-')
        const dataFalecimentoFinal = dataFalecimentoFormatada[2] + '/' + dataFalecimentoFormatada[1] + '/' + dataFalecimentoFormatada[0]
        return dataFalecimentoFinal

    }

    function formatarEscolaridade() {
        const escolaridade = deputados.escolaridade
        return escolaridade.includes("Incompleto") ? escolaridade : escolaridade + " Completo"
    }

    function formatarDataEvento(params) {
        let dataEvento = params
        let arrayEvento = dataEvento.split("T")
        let dataEventoFormatada = arrayEvento[0].split("-")
        const dataEventoFinal = dataEventoFormatada[2] + '/' + dataEventoFormatada[1] + '/' + dataEventoFormatada[0]
        const horaEvento = arrayEvento[1]
        return [dataEventoFinal, horaEvento]

    }





    return (


        <>

            {deputados.id &&
                <>
                    <Row className="Row1">
                        <Col md={3} className="Col1">
                            <Cartao >
                                <Card >
                                    <CardImg variant="top" src={deputados.ultimoStatus.urlFoto} style={{ width: "283px", height: "300px" }} />
                                </Card>
                                <br />
                                <h4 class="nome">{deputados.nomeCivil} </h4><br />
                                <p>Naturalidade: {deputados.municipioNascimento}  - {deputados.ufNascimento} </p>
                                <p>Sexo: {deputados.sexo}</p>

                                <p>Escolaridade: {formatarEscolaridade()}</p>
                                <p>Data de nascimento: {formatarDataNascimento()}</p>
                                <p>Data de falecimento: {formatarDataFalecimento()}</p>


                            </Cartao>
                        </Col>
                        <Col md={4} className="Col2" style={{ backgroundColor: "black", width: "73%" }} >



                            <br />


                            <Deputado >
                            <div class="partido">
                                <h5> PARTIDO</h5>
                                <a href={`/partidos/${idPartido}`}><img src={!partido.urlLogo ? "Carregando..." : partido.urlLogo} alt="Logo partido" /></a>

                            </div>
                            <br />

                                <p> Nome Eleitoral: {deputados.ultimoStatus.nomeEleitoral || 'N/A'}</p>
                                <p>Descrição: {deputados.ultimoStatus.descricaoStatus || 'N/A'}</p>
                                <p>Condição Eleitoral: {deputados.ultimoStatus.condicaoEleitoral}</p>
                                <p>E-mail: {deputados.ultimoStatus.gabinete.email}</p>
                                <p>Telefone: {deputados.ultimoStatus.gabinete.telefone}</p>

                            </Deputado>
                            <br />
                            < Options>

                                <div style={{ paddingLeft: "1px", paddingTop: "5px", display: "flex", justifyContent: "space-between" }}>

                                    <p style={{ textAlign: "center" }}>Gastos <br /><a href='#gastos'><img src={gastosIcon} alt="gastos" style={{ width: "100px" }} /></a></p>
                                    <p style={{ textAlign: "center" }}>Orgãos <br /><a href='#orgaos'><img src={OrgaosIcon} alt="orgaos" style={{ width: "100px" }} /></a></p>
                                    <p style={{ textAlign: "center" }}>Frentes <br /><a href='#frentes'><img src={frentesIcon} alt="frentes" style={{ width: "100px" }} /></a></p>
                                    <p style={{ textAlign: "center" }}>Eventos <br /><a href='#eventos'><img src={eventosIcon} alt="eventos" style={{ width: "100px" }} /></a></p>

                                </div></Options>

                        </Col>
                        <div id="gastos">
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

                        <div id="orgaos" style={{ backgroundColor: "silver" }}>
                            <Row className="mt-4">
                                <h2 style={{ color: "black", textAlign: "center", backgroundColor: "silver", border: "5px solid", padding: "5px" }}>ORGÃOS </h2> {orgaos.map((orgao, i) => (

                                    <Col key={i} md={4} className="mb-3">
                                        <Cartao title={orgao.siglaOrgao}  >
                                            <p style={{ backgroundColor: "purple", borderRadius: "40px 0px", padding: "4%", fontSize: "12px", display: "flex", justifyContent: "center", alignItems: "center" }}> <img src={OrgaosIcon} alt="Orgaos" width='50px' height="50px" /> <a style={{ textDecoration: "none", color: "white" }} href={`/orgaos/${orgao.idOrgao}`}>{orgao.nomePublicacao}</a> <br /> </p>
                                            <p style={{ textAlign: "center", color: "blue" }}> Cargo: {orgao.titulo} </p>
                                            <p style={{ textAlign: "center", fontSize: "12px" }}> {orgao.nomeOrgao}</p>

                                        </Cartao>

                                    </Col>
                                ))}



                            </Row>
                        </div>

                        <div id="frentes">
                            <Row className="mt-4">
                                <h2 style={{ color: "black", textAlign: "center", backgroundColor: "silver", border: "5px solid", padding: "5px" }}>FRENTES </h2> {frentes.map((frente) => (

                                    <Col key={frente.id} md={4} className="mb-3">
                                        <Cartao >


                                            <p style={{ backgroundColor: "blue", borderRadius: "40px 0px", padding: "4%" }}> <a style={{ textDecoration: "none", color: "white" }} href={`/frentes/${frente.id}`}><img src={frentesIcon} alt="frentes" width='50px' /> </a> <br /> </p>
                                            <p style={{ textAlign: "center", color: "black" }}>{frente.titulo} </p>
                                            <p style={{ textAlign: "center" }}> {frente.nomePublicacao}</p>

                                        </Cartao>

                                    </Col>
                                ))}



                            </Row>
                        </div>

                        <div id="eventos">
                            <Row className="mt-4">
                                <h2 style={{ color: "black", textAlign: "center", backgroundColor: "silver", border: "5px solid", padding: "5px" }}>EVENTOS </h2>
                                {eventos.map((evento) => (
                                    <Col key={evento.id} md={4} className="mb-3">
                                        <Cartao title={evento.descricaoTipo}  >
                                            <p style={{ backgroundColor: "red", borderRadius: "40px 0px", padding: "4%" }}> <a style={{ textDecoration: "none", color: "white" }} href={`/eventos/${evento.id}`}><img src={eventosIcon} alt="eventos" width='50px' /> {evento.descricaoTipo}</a> <br /> </p>
                                            <p style={{ textAlign: "center", color: "blue" }}> Inicio: {formatarDataEvento(evento.dataHoraInicio)[0]} às {formatarDataEvento(evento.dataHoraInicio)[1]} <br />Fim: {evento.dataHoraFim ? formatarDataEvento(evento.dataHoraFim)[0] + " às " + `${formatarDataEvento(evento.dataHoraFim)[1]}` : "N/A"}</p>
                                            <p style={{ textAlign: "center" }}> {""}</p>
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