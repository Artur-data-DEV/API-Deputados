import Button from "@restart/ui/esm/Button"
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import logo from "../assets/icons/logo-camara.png"




const Menu = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" >
        <Container fluid className='Menu' >
          <Navbar.Brand href="/"><img src={logo} width="200px" /></Navbar.Brand>
          <Nav className='Menu'>
            <Link className="nav-link" to="/blocos">
              Blocos
            </Link>
            <Link className="nav-link" to="/deputados">
              Deputados
            </Link>
            <Link className="nav-link" to="/eventos">
              Eventos
            </Link>
            <Link className="nav-link" to="/frentes">
              Frentes
            </Link>

            <Link className="nav-link" to="/legislaturas">
              Legislatura
            </Link>
            <Link className="nav-link" to="/partidos">
              Partidos
            </Link>
            <Link className="nav-link" to="/proposicoes">
              Proposições
            </Link>


            <Link className="nav-link" to="/referencias">
              Referencias
            </Link>
            <Link className="nav-link" to="/votacoes">
              Votações
            </Link>
            <Link className="nav-link" to="/orgaos">
              Órgãos
            </Link>

            <Form className="d-flex">
              <FormControl

                type="procurar"
                placeholder="Pesquisar..."
                className="me-2"
                aria-label="procurar"
              />
              <Button variant="outline-success">Search</Button>
            </Form>

          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Menu
