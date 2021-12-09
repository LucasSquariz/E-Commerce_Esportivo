import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { CarrinhoContext } from '../../../contexts/CarrinhoContext';

const ListaProdutos = () => {
  const { produto } = useContext(CarrinhoContext);

  return produto.length ? (
    produto.map(produto => (
      <Container key={produto.id} >
          <Container className="produtos">                
            <img src={produto.imagem} className="imagem" alt={produto.nome} />
                <p>Nome: {produto.nome}</p>                                
                <p>Descrição: {produto.descricao}</p>                
                <p>Preço: R${produto.preco}</p>                
            </Container> 
        </Container>
    ))
  ) : (
    <p>Não há produtos</p>
  )
}

export default ListaProdutos;