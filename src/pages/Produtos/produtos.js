import useAxios from '../../hooks/useAxios.js';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Produtos() {
    const produtos = useAxios(`/produtos`);

    return (
        <>
        {/* Botões para as categorias */}
            <Container>
                <Link to={`/produtos/categoria/1`}><Button variant="primary">Bermudas</Button></Link>
                <Link to={`/produtos/categoria/2`}><Button variant="primary">Tênis</Button></Link>
                <Link to={`/produtos/categoria/3`}><Button variant="primary">Camisas</Button></Link>                
            </Container>

        {/* Lista de produtos */}
            {produtos.length !== 0 && (
                produtos.map((produto) => {
                    return (
                        <Container key={produto.id} className="produtos">
                            <Link to={`/produtos/${produto.id}`}><img src={produto.imagem} className="imagem" alt={produto.nome} /></Link>
                            <p>Nome: {produto.nome}</p>
                            <p>Descrição: {produto.descricao}</p>
                            <p>Preço: R${produto.preco}</p>
                        </Container>

                    )
                })

            )}

        </>
    )
}

export default Produtos;