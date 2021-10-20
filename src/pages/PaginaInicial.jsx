import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../Style/Style-PaginaInicial.css";
import {FiChevronsRight} from "react-icons/fi";

const PaginaInicial = () => {
    return (
        <>
            <div id='pagina'> 

                <div className= "img-wrapper">
                    <Image src = "https://static.congressoemfoco.uol.com.br/2018/08/plenario_camara_saulo_cruz_agencia_camara-e1541608863305.jpg" bsPrefix/>
                </div>

                <Container>  

                <Row className= "banner">
                    <h1 className="menu" to="/">Câmara dos Deputados</h1>

                </Row>

                <Row className="bannerOne">
                    <Col md= {6}>
                        <Link  className="links" to="/blocos"><FiChevronsRight/>Blocos</Link>
                    </Col>
                    <Col md = {6}>
                        <Link  className="links" to="/deputados"><FiChevronsRight/>Deputados</Link>
                    </Col>
                    <Col md = {6}>
                        <Link  className="links" to="/eventos"><FiChevronsRight/>Eventos</Link>
                    </Col>
                    <Col md = {6}>
                        <Link  className="links" to="/frentes"><FiChevronsRight/>Frentes</Link>
                    </Col>
                    <Col md = {6}>
                        <Link  className="links" to="/legislaturas"><FiChevronsRight/>Legislaturas</Link>
                    </Col>
                    <Col md = {6}>
                    <Link  className="links" to="/partidos"><FiChevronsRight/>Partidos</Link>
                    </Col>
                    <Col md = {6}>
                    <Link  className="links" to="/proposicoes"><FiChevronsRight/>Proposições</Link>
                    </Col>
                    <Col md = {6}>
                    <Link  className="links" to="/referencias"><FiChevronsRight/>Referências</Link>
                    </Col>
                    <Col md = {6}>
                    <Link  className="links" to="/votacoes"><FiChevronsRight/>Votações</Link>
                    </Col>
                    <Col md = {6}>
                    <Link  className="links" to="/orgaos"><FiChevronsRight/>Orgãos</Link>
                    </Col>
                </Row>
                </Container>

            </div>
            
        </>
    )
}

export default PaginaInicial;
