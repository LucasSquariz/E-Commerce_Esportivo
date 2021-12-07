/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import useAxios from '../../../hooks/useAxios.js';
import { Helmet } from 'react-helmet';
import { Navbar, Container, Nav, Carousel, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import './home.scss';


function Home() {
    const {produtoId} = useParams();
    const produto = useAxios(`/produto/${produtoId}`);
    return (
        <>
            {/* Nome da página */}
            <Helmet>
                <title>CTD Commerce | Home</title>
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

            {/* Carrosel */}
            <Carousel>
                <Carousel.Item className="mx-4 " >
                    <Row >
                        <Col>
                            <Link to="/produto/2">
                                <img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg" className="imagem" alt={produto.imagem} />
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/produto/1">
                                <img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg" className="imagem" alt="asdasd" />
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/produto/1">
                                <img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg" className="imagem" alt="asdasd" />
                            </Link>
                        </Col>
                    </Row>

                </Carousel.Item>
                <Carousel.Item >
                    <Row>
                        <Col>
                            <Link to="/produto/1">
                                <img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg" className="imagem" alt="asdasd" />
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/produto/1">
                                <img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg" className="imagem" alt="asdasd" />
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/produto/1">
                                <img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg" className="imagem" alt="asdasd" />
                            </Link>
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>

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

export default Home;