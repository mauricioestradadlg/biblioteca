import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { Button, Row, Col } from 'react-bootstrap';

const stripePromise = loadStripe('pk_test_51PVI2vLFklFNM5Kg8g1oHE9rhfiQpSAZuxPdILSlMe4xBtbw5XZHniCn0AAgpqsVHeYDEnrWzRHgTQsmDyVgWqEU00ZUq3bUF0');

const Carrito = ({ productosEnCarrito, setProductosEnCarrito }) => {
    const [walletConfig, setWalletConfig] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/wallet-config')
            .then(response => {
                setWalletConfig(response.data);
            })
            .catch(error => {
                console.error('Error al obtener la configuración del wallet:', error);
            });
    }, []);

    const vaciarCarrito = () => {
        setProductosEnCarrito([]);
        localStorage.removeItem('productosEnCarrito');
    };

    const handleCheckout = async () => {
        const stripe = await stripePromise;

        const response = await axios.post('http://localhost:3000/checkout-session', {
            productos: productosEnCarrito,
        });

        const result = await stripe.redirectToCheckout({
            sessionId: response.data.sessionId,
        });

        if (result.error) {
            console.error('Error al iniciar el checkout:', result.error);
            alert('Error al iniciar el checkout');
        }
    };

    return (
        <>
            <Row>
                <Col sm={12}>
                    <h1 id="h1Inicio">CARRITO DE COMPRAS: </h1><br /><br />
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <ul id="carrito">
                        {productosEnCarrito.map((producto, index) => (
                            <li key={index}>
                                {producto.nombre} - ${producto.precio}
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <p id="total">Total a pagar: ${productosEnCarrito.reduce((total, producto) => total + producto.precio, 0)}</p>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <Button id="vaciarCarrito" onClick={vaciarCarrito}>Vaciar Carrito</Button>
                    <Button onClick={handleCheckout}>Comprar Carrito</Button>
                </Col>
            </Row>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </>
    );
};

export default Carrito;

