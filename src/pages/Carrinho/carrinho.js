/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './carrinho.scss';
import { Helmet } from 'react-helmet-async';
import { CarrinhoContext } from '../../contexts/CarrinhoContext';
import { Container } from 'react-bootstrap';
import { useContext } from 'react';
import Listaprodutos from '../Carrinho/components/ListaProdutos'


function Carrinho() {
    const {produto} = useContext(CarrinhoContext);
    return (
        <>
            {/* Nome da página */}
            <Helmet>
                <title>CTD Commerce | Carrinho</title>
            </Helmet>

            <Container>
                       <Listaprodutos />    
            </Container>            
        </>
    )
    
}

export default Carrinho;