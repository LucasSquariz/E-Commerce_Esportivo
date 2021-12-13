/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './carrinho.scss';
import { Helmet } from 'react-helmet-async';
import { Container } from 'react-bootstrap';
import Listaprodutos from '../Carrinho/components/ListaProdutos'


function Carrinho() {    
    return (
        <>
            {/* Nome da página */}
            <Helmet>
                <title>SPORT STORE | Carrinho</title>
            </Helmet>

            <Container>
                    <Listaprodutos />    
            </Container>            
        </>
    )
    
}

export default Carrinho;