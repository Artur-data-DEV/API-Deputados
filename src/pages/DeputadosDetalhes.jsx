import React, { useEffect, useState } from 'react'
import { Card, CardImg, Col, Row } from 'react-bootstrap'
import apiCamara from '../services/apiCamara.js'

const DeputadosDetalhes = (props) => {



    const [deputados, setDeputados] = useState({})
    // const [despesas, setDespesas] = useState({})

    useEffect(() => {
        const id = props.match.params.id

        apiCamara.get(`/deputados/${id}`).then(resultado => {
            setDeputados(resultado.data.dados);
        })

        // apiCamara.get(`/deputados/${id}/despesas`).then(resultado => {
        //     setDespesas(resultado.data);
        // })
        
    }, [props])

    console.log(deputados)

    return (
        
        <>
        
            {deputados.id && 
            <>
                <Row>
                    <Col md={3}>
                        <Card>
                            <CardImg variant="top" src={deputados.ultimoStatus.urlFoto} />
                        </Card>
                    </Col>
                    <Col md={3}>
                        <h1>{deputados.nomeCivil}</h1>
                        <p>UF: {deputados.ufNascimento}</p>
                        <p>Data de nascimento: {deputados.dataNascimento}</p>
                        <p>Sexo: {deputados.sexo}</p>
                        
                        
                        {/* <p>Popularidade: {deputados.popularity}</p>
                        <p>Lançamento: {deputados.release_date}</p>
                        <p>Generos:
                            {deputados.genres.map((genre, indexg) => (
                                <span key={indexg}> {genre.name} | </span>
                            ))}
                        </p>
                        <p>Empresas:
                            {deputados.production_companies.map(company => (
                                <span key={company.id}>
                                    <img
                                        height="30px"
                                        src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
                                        alt={company.name}
                                        title={company.name}
                                    />
                                </span>
                            ))}
                        </p> */}
                    </Col>
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