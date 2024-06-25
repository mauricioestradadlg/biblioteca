
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function FPSxbox({ agregarAlCarrito }) {
    const productos = [
        { id: 'prod_QM04C9o217SiNY', nombre: 'PADRE RICO, PADRE POBRE', precio: 299, imagen: '/imagenes/libro1.jpg' },
        { id: 'prod_QM05VrCk1YluNi', nombre: 'EL NEGOCIADOR', precio: 399, imagen: '/imagenes/libro2.jpg' },
        { id: 'prod_QM05uf7hnIbGS6', nombre: 'EL METODO LEAN START UP', precio: 499, imagen: '/imagenes/libro3.jpg' },
        { id: 'prod_QM06RK8eUEhPZ5', nombre: 'PIENSE Y HAGASE RICO', precio: 299, imagen: '/imagenes/libro4.jpg' },
        { id: 'prod_QM06Yr9Godkb1L', nombre: 'EL ARTE DE LA GUERRA', precio: 399, imagen: '/imagenes/libro5.jpg' },
        { id: 'prod_QM07oY4dbQe4Zn', nombre: 'LA VACA PURPURA', precio: 499, imagen: '/imagenes/libro6.jpg' },
        { id: 'prod_QM071yW0TVXXsu', nombre: 'LOS SECRETOS DE LA MENTE MILLONARIO', precio: 299, imagen: '/imagenes/libro7.jpg' },
        { id: 'prod_QM086WheWcmd2X', nombre: 'VENDES O VENDES', precio: 399, imagen: '/imagenes/libro8.jpg' },
        { id: 'prod_QM09yRDiKjqdkB', nombre: 'EL MITO DEL EMPRENDEDOR', precio: 499, imagen: '/imagenes/libro9.jpg' },
        { id: 'prod_QM09HNnc5jlYPE', nombre:'EL EMPRENDEDOR', precio: 299, imagen: '/imagenes/libro10.jpg' },
    ];

    const navigate = useNavigate();

    const handleClickAgregar = (producto) => {
        agregarAlCarrito(producto);
        alert("Producto agregado al carrito!");
        navigate('/carrito');
    };

    return (
        <main id="mainP">
            <h1 id="h1P" className="text-center">CATALOGO DE LIBROS</h1>
            <Container>
                
                
                <Row>
                    {productos.map((producto) => (
                        <Col key={producto.id} md={4} className="mb-4">
                            <hr />
                            <Card className="h-100 text-center">
                                <Card.Img variant="top" src={producto.imagen} className="imagenProducto" />
                                <Card.Body>
                                    <Card.Title className="nombre">{producto.nombre}</Card.Title>
                                    <Card.Text className="precio">${producto.precio}</Card.Text>
                                    <Button 
                                        className="botonProducto" 
                                        onClick={() => handleClickAgregar(producto)}
                                    >
                                        Agregar a Carrito
                                    </Button>
                                </Card.Body>
                            </Card>
                            
                        </Col>
                    ))}
                </Row>
                <hr />
            </Container>
        </main>
    );
}
