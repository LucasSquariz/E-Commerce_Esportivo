/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import useAxios from '../../../hooks/useAxios.js';
import { Helmet } from 'react-helmet-async';
import { Carousel, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import './home.scss';


function Home() {
    const produto = useAxios(`/produto`);
    return (
        <>
            {/* Nome da página */}
            <Helmet>
                <title>CTD Commerce | Home</title>
            </Helmet>
            
            {/* Carrosel */}
            <Carousel>
                <Carousel.Item className="mx-4">
                    <Row >
                        <Col>
                            <Link to="/produto/1">
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

           
        </>
    )
}

export default Home;