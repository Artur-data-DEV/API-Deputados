import React from "react";
import { ListGroup, Container, Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Style/Style-PaginaInicial.css";
import logo from "../assets/icons/cienciapolitica.png";
import Legislaturas from "../assets/icons/legislaturas.png";
import Blocos from "../assets/icons/blocos.png";
import Deputados from "../assets/icons/deputados.png";
import Eventos from "../assets/icons/eventos.png";
import Frentes from "../assets/icons/frentes.png";
import Partidos from "../assets/icons/partidos.png"
import Proposicoes from "../assets/icons/proposicoes.png"
import Referencias from "../assets/icons/referencias.png"
import Votacoes from "../assets/icons/votacoes.png"
import Orgaos from "../assets/icons/orgaos.png"


const PaginaInicial = () => {
  return (

    <>
    <h1 class='h1'>Câmara dos Deputados</h1>
    <div class='pagina' >

      

      <Container className="container"  >
        <Col md={6} >
          <ListGroup className='listGroup'>
            <ListGroup.Item className='listGroupItem' >
              <img src={Blocos} alt="Blocos" />
              <Link className="links" to="/blocos">
                <h2>Blocos</h2>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="listGroupItem" >
              <img src={Deputados} alt="Deputados" />
              <Link className="links" to="/deputados">
                Deputados
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="listGroupItem" >
              <img src={Eventos} alt="Eventos" />
              <Link className="links" to="/eventos">
                Eventos
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="listGroupItem" >
            <img src={Frentes} alt="Frentes" />
              <Link className="links" to="/frentes">
                Frentes
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="listGroupItem">
              <img src={Legislaturas} alt='Legislaturas' />
              <Link className="links" to="/legislaturas">
                Legislaturas
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <img src={logo} alt="Logo"/>
        <Col md={6}>
          <ListGroup className='listGroup'>
            <ListGroup.Item className="listGroupItem2" >
              <Link className="links" to="/partidos">
                Partidos
              </Link>
              <img src={Partidos} alt="Partidos" />
            </ListGroup.Item>
            <ListGroup.Item className="listGroupItem2"  >
              <Link className="links" to="/proposicoes">
                Proposições
              </Link>
              <img src={Proposicoes} alt="Proposicoes" />
            </ListGroup.Item>
            <ListGroup.Item className="listGroupItem2" >
              <Link className="links" to="/referencias">
                Referências
              </Link>
              <img src={Referencias} alt="Referencias" />
            </ListGroup.Item>
            <ListGroup.Item className="listGroupItem2" >
              <Link className="links" to="/votacoes">
                Votações
              </Link>
              <img src={Votacoes} alt="Votacoes" />
            </ListGroup.Item>
            <ListGroup.Item className="listGroupItem2" >
              <Link className="links" to="/orgaos">
                Orgãos
              </Link>
              <img src={Orgaos} alt="Orgaos" />
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Container>
    </div>
</>
    








  );
};

export default PaginaInicial;
