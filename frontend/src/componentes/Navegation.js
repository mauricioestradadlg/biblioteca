import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



function Navegation(){

    
    return(<>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto navbar">
          <Link className = 'navbarli' to = "/">Inicio</Link>
          <Link className = 'navbarli' to = "/aboutus">Sobre Nosotros</Link>
          <Link className = 'navbarli' to = "/catalogo">Libros</Link>
          <Link className = 'navbarli' to = "/contacto">Contacto</Link>
          </Nav>
        </Container>
      </Navbar>
        </>);


}

export default Navegation

