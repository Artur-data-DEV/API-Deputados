import React from "react";
import { ListGroup, Container, Col } from "react-bootstrap";
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
     
    <div class='pagina' >

  
    
      <Container className="container"  >
        
        <Col md={8} >
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
     

        <h1 style={{marginTop:"-50px", textAlign: "center", fontSize: '40px', color: "white ", textShadow: '2px 0 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000'}}> C??mara dos Deputados <img src={logo} alt="Logo"/> </h1>
      
        <Col md={8}>
          <ListGroup className='listGroup'>
            <ListGroup.Item className="listGroupItem2" >
              <Link className="links" to="/partidos">
                Partidos
              </Link>
              <img src={Partidos} alt="Partidos" />
            </ListGroup.Item>
            <ListGroup.Item className="listGroupItem2"  >
              <Link className="links" to="/proposicoes">
                Proposi????es
              </Link>
              <img src={Proposicoes} alt="Proposicoes" />
            </ListGroup.Item>
            <ListGroup.Item className="listGroupItem2" >
              <Link className="links" to="/referencias">
                Refer??ncias
              </Link>
              <img src={Referencias} alt="Referencias" />
            </ListGroup.Item>
            <ListGroup.Item className="listGroupItem2" >
              <Link className="links" to="/votacoes">
                Vota????es
              </Link>
              <img src={Votacoes} alt="Votacoes" />
            </ListGroup.Item>
            <ListGroup.Item className="listGroupItem2" >
              <Link className="links" to="/orgaos">
                Org??os
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
