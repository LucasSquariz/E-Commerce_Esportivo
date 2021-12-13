/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import useAxios from '../../hooks/useAxios.js';
import './produto.scss';
import { Helmet } from 'react-helmet-async';
import {Container, Button, Row, Col, Alert} from 'react-bootstrap';
import { useParams } from 'react-router';
import {CarrinhoContext} from '../../contexts/CarrinhoContext';
import { useContext, useState } from 'react';



function Produto() {   
    //Buscando as informações da API
    const {produtoId} = useParams();
    const produto = useAxios(`/produtos/${produtoId}`);
    const { addProduto } = useContext(CarrinhoContext); 
    const [alerta, setAlerta] = useState(false);

    //Adicionando no carrinho
    const handleSubmit =(produto) => {
        addProduto(produto);
        setAlerta(true)
        setTimeout(() => {
        setAlerta(false)
        }, 1800);
        }

    return (
        <>        
            {/* Nome da página */}
            <Helmet>
                <title>SPORT STORE | {produto.nome ? produto.nome : "produto"}</title>
            </Helmet>             

            {/* Produto */}
            <Container className="produto"> 
            <Row>
            <Col md={6}>
                <img src={produto.imagem} className="imagem" alt={produto.nome} /></Col>
            <Col className="oi" md={6}>
                <p>Nome: {produto.nome}</p>                                
                <p>Descrição: {produto.descricao}</p>                
                <p>Preço: R${produto.preco}</p>
                <Button variant="primary" onClick={() => handleSubmit(produto)}>Adicionar ao carrinho</Button></Col>
            </Row>               
            </Container>
            {alerta&&<Alert variant="dark">
        Produto adicionado ao carrinho!
        </Alert>}            
        </>
    )
}

export default Produto;