/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import useAxios from '../../hooks/useAxios.js';
import { Helmet } from 'react-helmet-async';
import { Carousel, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './home.scss';


function Home() {
    const produto1 = useAxios(`/produtos/1`);
    const produto2 = useAxios(`/produtos/2`);
    const produto3 = useAxios(`/produtos/3`);
    const produto4 = useAxios(`/produtos/4`);
    const produto5 = useAxios(`/produtos/5`);
    const produto6 = useAxios(`/produtos/6`);    
    
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
                            <Link to="/produtos/1">
                                <img src={produto1.imagem} className="imagem" alt={produto1.nome}/>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/produtos/2">
                                <img src={produto2.imagem} className="imagem" alt={produto2.nome} />
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/produtos/3">
                                <img src={produto3.imagem} className="imagem" alt={produto3.nome}/>                            </Link>
                        </Col>
                    </Row>

                </Carousel.Item>
                <Carousel.Item >
                    <Row>
                        <Col>
                            <Link to="/produtos/4">
                                <img src={produto4.imagem} className="imagem" alt={produto4.nome}/>                            </Link>
                        </Col>
                        <Col>
                            <Link to="/produtos/5">
                                <img src={produto5.imagem} className="imagem" alt={produto5.nome}/>                            </Link>
                        </Col>
                        <Col>
                            <Link to="/produtos/6">
                                <img src={produto6.imagem} className="imagem" alt={produto6.nome}/>                             </Link>
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>

           
        </>
    )
}

export default Home;