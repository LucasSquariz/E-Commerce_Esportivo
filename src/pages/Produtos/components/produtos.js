/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import useAxios from '../../../hooks/useAxios.js';
import './produtos.scss';
import { Helmet } from 'react-helmet-async';
import {Container, Button} from 'react-bootstrap';
import { useParams } from 'react-router';
import {CarrinhoContext} from '../../../contexts/CarrinhoContext'
import { useContext } from 'react';


function Produtos() {   
    const {produtoId} = useParams();
    const produto = useAxios(`/produto/${produtoId}`);
    const { addProduto } = useContext(CarrinhoContext); 

    const handleSubmit =(produto) => {
        addProduto(produto);
    }
    
    return (
        <>        
            {/* Nome da página */}
            <Helmet>
                <title>CTD Commerce | {produto.nome ? produto.nome : "produto"}</title>
            </Helmet>             

            {/* Produto */}
            <Container className="produto">                
            <img src={produto.imagem} className="imagem" alt="asdasd" />
                <p>Nome: {produto.nome}</p>                                
                <p>Descrição: {produto.descricao}</p>                
                <p>Preço: {produto.preco}</p>
                <Button variant="primary" onClick={() => handleSubmit(produto)}>Adicionar ao carrinho</Button>
            </Container>            
        </>
    )
}

export default Produtos;