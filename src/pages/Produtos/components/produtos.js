/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import useAxios from '../../../hooks/useAxios.js';
import './produtos.scss';
import { Helmet } from 'react-helmet-async';
import { Navbar, Container, Nav, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

function Produtos() {   
    const {produtoId} = useParams();
    const produto = useAxios(`/produto/${produtoId}`);  
    
    return (
        <>        
            {/* Nome da página */}
            <Helmet>
                <title>CTD Commerce | Produto</title>
            </Helmet>

             {/* Navbar */}
             <header className="sticky-top">
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">CTD Commerce</Navbar.Brand>
                        <Nav className="me-auto">                            
                            <Nav.Link href="/produtos">Produtos</Nav.Link>
                            <Nav.Link href="/carrinho">Carrinho</Nav.Link>
                            <Nav.Link href="#footer">Sobre nós</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </header>

            {/* Produto */}
            <Container className="produto">                
            <img src= {produto.imagem} className="imagem" alt="asdasd" />
                <p>Nome: {produto.nome}</p>                                
                <p>Descrição: {produto.descricao}</p>                
                <p>Preço: {produto.preco}</p>
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