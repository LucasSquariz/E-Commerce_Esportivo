import useAxios from '../../hooks/useAxios.js';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Produtos() {
    const produtos = useAxios(`/produtos`);
    const navigate = useNavigate();
    return (
        <>        

        {/* Lista de produtos */}
            {produtos.length !== 0 && (
                produtos.map((produto) => {
                    return (
                        <Container style={{width: '500px', marginBottom: '10px'}} key={produto.id}>
                <Link to={`/produtos/${produto.id}`}><img src={produto.imagem} className="imagem" alt={produto.nome} /></Link>
                            <p>Nome: {produto.nome}</p>
                            <p>Descrição: {produto.descricao}</p>
                            <p>Preço: R${produto.preco}</p>
                            <Button variant="primary" onClick={() => navigate(`/produtos/${produto.id}`)}>Ver produto</Button>
                        </Container>

                    )
                })

            )}

        </>
    )
}

export default Produtos;