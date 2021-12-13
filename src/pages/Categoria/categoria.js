import useAxios from '../../hooks/useAxios';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Categorias() {
    const {categoria} = useParams();
    const categorias = useAxios(`/produtos/categoria/${categoria}`);       
    return (
        <>
        {/* Nome da página */ }
        < Helmet >
            <title>SPORT STORE | categoria</title>
        </Helmet > 

       
        
        {categorias.length !== 0 && (
                categorias.map((produto) => {
                    return (
                        <Container key={produto.id} className="categorias">
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

export default Categorias;