import { Container, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Header(){

  return(

     
        <Container>
          <Row className='header'>
          <img alt ="" src ="/imagenes/logo.jpg" width = "100" height = "100"/>
          <h1 id = "h1Index">BIBLIOTECA DEL EMPRENDEDOR</h1>
          <Link to = "/carrito"><img alt ="" id ="carritoCompras" src ="/imagenes/carrito.jpg" width = "100" height = "100"/></Link>
          </Row>
        </Container>
      
  
  );

}

export default Header;


