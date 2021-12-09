/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import useAxios from '../../hooks/useAxios.js';
import './produto.scss';
import { Helmet } from 'react-helmet-async';
import {Container, Button} from 'react-bootstrap';
import { useParams } from 'react-router';
import {CarrinhoContext} from '../../contexts/CarrinhoContext';
import { useContext } from 'react';


function Produto() {   
    //Buscando as informações da API
    const {produtoId} = useParams();
    const produto = useAxios(`/produtos/${produtoId}`);
    const { addProduto } = useContext(CarrinhoContext); 

    //Adicionando no carrinho
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
            <img src={produto.imagem} className="imagem" alt={produto.nome} />
                <p>Nome: {produto.nome}</p>                                
                <p>Descrição: {produto.descricao}</p>                
                <p>Preço: R${produto.preco}</p>
                <Button variant="primary" onClick={() => handleSubmit(produto)}>Adicionar ao carrinho</Button>
            </Container>            
        </>
    )
}

export default Produto;