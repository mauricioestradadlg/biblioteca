import { Container, Row, Col } from 'react-bootstrap';

const textStyle = {
  color: 'black', // Cambia a 'black' si quieres texto negro
  fontFamily: 'Arial, Verdana, sans-serif' // Cambia a 'Verdana' si prefieres esa fuente
  
};

export default function AboutUs() {
  return (
    <main>
      <Container>
        <h1 className="text-center mt-4" style={textStyle}>Sobre Nosotros</h1>
        <Row>
          <Col md={12}>
            <img className="imagenInicio img-fluid" src="./imagenes/elonMusk.jpg" alt="Sobre nosotros" />
          </Col>
        </Row>
        <p id = "parrafoAU" className="text-justify mt-4" style={textStyle}>
          Experimento social desarrollado en React, Bootstrap, mySQL y PHP por un programador fullstack Amateur
        </p>
        <p id = "parrafoAU" className="text-justify" style={textStyle}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id magni commodi 
          neque eligendi exercitationem molestias rerum accusamus laudantium vero nostrum 
          dicta minima suscipit nam obcaecati animi pariatur, doloremque ex expedita.
        </p>
        <p id = "parrafoAU" className="text-justify" style={textStyle}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id magni commodi 
          neque eligendi exercitationem molestias rerum accusamus laudantium vero nostrum 
          dicta minima suscipit nam obcaecati animi pariatur, doloremque ex expedita.
        </p>
        <p id = "parrafoAU" className="text-justify" style={textStyle}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id magni commodi 
          neque eligendi exercitationem molestias rerum accusamus laudantium vero nostrum 
          dicta minima suscipit nam obcaecati animi pariatur, doloremque ex expedita.
        </p>
        <p id = "parrafoAU" className="text-justify" style={textStyle}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id magni commodi 
          neque eligendi exercitationem molestias rerum accusamus laudantium vero nostrum 
          dicta minima suscipit nam obcaecati animi pariatur, doloremque ex expedita.
        </p>
      </Container>
    </main>
  );
}


