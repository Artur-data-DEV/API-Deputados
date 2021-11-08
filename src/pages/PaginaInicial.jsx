import React from "react";
import { ListGroup, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Style/Style-PaginaInicial.css";


const PaginaInicial = () => {
  return (
    
    <div class='backgroundImg'>

        <Container fluid className="backgroundImg"  >    
      
        <ListGroup className='listGroup'>
          <ListGroup.Item >
           
            <Link className="links" to="/blocos">

              Blocos
            </Link>
          </ListGroup.Item>
          <ListGroup.Item >
            <Link className="links" to="/deputados">

              Deputados
            </Link>
          </ListGroup.Item>
          <ListGroup.Item >
            <Link className="links" to="/eventos">

              Eventos
            </Link>
          </ListGroup.Item>
          <ListGroup.Item >
            <Link className="links" to="/frentes">

              Frentes
            </Link>
          </ListGroup.Item>
          <ListGroup.Item >
            <Link className="links" to="/legislaturas">

              Legislaturas
            </Link>
          </ListGroup.Item>
          
          <ListGroup.Item >
            <Link className="links" to="/partidos">

              Partidos
            </Link>
          </ListGroup.Item>
          <ListGroup.Item >
            <Link className="links" to="/proposicoes">

              Proposições
            </Link>
          </ListGroup.Item>
          <ListGroup.Item >
            <Link className="links" to="/referencias">

              Referências
            </Link>
          </ListGroup.Item>
          <ListGroup.Item >
            <Link className="links" to="/votacoes">

              Votações
            </Link>
          </ListGroup.Item>
          <ListGroup.Item >
            <Link className="links" to="/orgaos">

              Orgãos
            </Link>
          </ListGroup.Item>
        </ListGroup>
        </Container>
    </div>
    
      
          

     


    
  );
};

export default PaginaInicial;
