import { useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { CarrinhoContext } from '../../../contexts/CarrinhoContext';
import '../../Carrinho/carrinho.scss';
import { useNavigate } from 'react-router-dom';



const ListaProdutos = () => {
  const { produto } = useContext(CarrinhoContext);
  const navigate = useNavigate();

  

  return produto.length ? (
    produto.map(produto => (
      <Container key={produto.id} >
          <Container className="produtos"> 
          <Row>               
            <img src={produto.imagem} className="imagem" alt={produto.nome} />
            <Col className="col" sm>
            <p>Nome: {produto.nome}</p>                                
            <p>Descrição: {produto.descricao}</p>                
            <p>Preço: R${produto.preco}</p>
            <Button variant="success" onClick={() => navigate(`/`)}>Finzalizar Pedido</Button>
            </Col> 
            </Row>               
          </Container> 
        </Container>
    ))
  ) : (
    <h1>Nenhum produto no carrinho</h1>
  )
}

export default ListaProdutos;