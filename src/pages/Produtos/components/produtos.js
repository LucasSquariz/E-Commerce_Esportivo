/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import Hooks from '../../../hooks/hooks.js';
import './produtos.scss';
import { Helmet } from 'react-helmet';
import { Navbar, Container, Nav, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

function Produtos() {   
    const {produtoId} = useParams();
    const produto = Hooks(`/produto/${produtoId}`);
    return (
        <>
        
            {/* Nome da página */}
            <Helmet>
                <title>CTD Commerce | Produtos</title>
            </Helmet>

             {/* Navbar */}
             <header className="sticky-top">
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">CTD Commerce</Navbar.Brand>
                        <Nav className="me-auto">                            
                            <Nav.Link href="/produtos">Produtos</Nav.Link>
                            <Nav.Link href="/carrinho">Carrinho</Nav.Link>
                            <Nav.Link href="#footer.container">Sobre nós</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </header>

            {/* Produto */}

            <Container className="produto">
                console.log(produtoId);
                <p>Imagem</p>
                <p>Nome:{produto}</p>                
                <p>Categoria</p>
                <p>Descrição</p>
                <p>Avaliação</p>
                <p>Preço</p>
            </Container>

            {/* Footer */}
            <Container className="footer">
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        Sobre nós:
                    </Col>
                    <Col md="auto">Variable width content</Col>
                    <Col xs lg="2">
                        3 of 3
                    </Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col md="auto">Variable width content</Col>
                    <Col xs lg="2">
                        3 of 3
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Produtos;