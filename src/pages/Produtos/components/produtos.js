/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import useAxios from '../../../hooks/useAxios.js';
import './produtos.scss';
import { Helmet } from 'react-helmet-async';
import {Container} from 'react-bootstrap';
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

            {/* Produto */}
            <Container className="produto">                
            <img src= {produto.imagem} className="imagem" alt="asdasd" />
                <p>Nome: {produto.nome}</p>                                
                <p>Descrição: {produto.descricao}</p>                
                <p>Preço: {produto.preco}</p>
            </Container>            
        </>
    )
}

export default Produtos;