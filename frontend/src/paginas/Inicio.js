import { Container, Row, Col } from 'react-bootstrap';

const textStyle = {
  color: 'black', // Cambia a 'black' si quieres texto negro
  fontFamily: 'Arial, Verdana, sans-serif' // Cambia a 'Verdana' si prefieres esa fuente
  
};

export default function Inicio(){

    return(
        <>
       <main>
      <Container>
        <h1 className="text-center mt-4" style={textStyle}>BIENVENIDO A NUESTRA PAGINA WEB OFICIAL!!</h1><br/><br/>
        <Row>
          <Col md={6}>
            <img className="imagenInicio img-fluid" src="./imagenes/robertKiyosaki.jpeg" alt=" " />
          </Col>
          <Col md={6}>
            <img className="imagenInicio img-fluid" src="./imagenes/brianTracy.jpeg" alt="" />
          </Col>
        </Row>

        <h4 className="text-center mt-4" style={textStyle}>REVISA NUESTRO CATALOGO DE LIBROS!</h4><br/><br/>
        <Row>
          <Col md={12}>
            <img className="imagenInicio img-fluid" src="./imagenes/warrenBuffet.jpg" alt="" />
          </Col>
        </Row>
        <h4 className="text-center mt-4" style={textStyle}>TE DAREMOS UN 10% EN TU PRIMERA COMPRA😉</h4>
      </Container>
    </main>
        </>
    );
}