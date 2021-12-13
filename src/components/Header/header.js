import { Navbar, Container, Nav, NavDropdown, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.scss';

function Header() {
    return (
        <>
            {/* Navbar */}
            <header className="sticky-top">
            <Navbar bg="light" style={{ color: "#000" }} expand="lg">   
            <Container className="head">
            <img src="https://bit.ly/3yzfKjD" id="logo-camisa" alt="logo"/>
            <Navbar.Brand id="nome" href="/">SPORT STORE</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '150px' }}
                navbarScroll
            >
            <NavDropdown title="Produtos" id="navbarScrollingDropdown">
            <NavDropdown.Item Link as={Link} to="/produtos">
                Todos os Produtos
            </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/categoria">Categorias</Nav.Link>
            <Nav.Link as={Link} to="/sobre">Sobre nós</Nav.Link>
            </Nav>
            <Nav.Link as={Link} to="/carrinho"><img src="https://www.freeiconspng.com/thumbs/shopping-cart-icon/shopping-cart-icon-2.png" id="carrinho" alt="carrinho" /></Nav.Link>
            </Navbar.Collapse>
            </Container>
            </Navbar>
            </header>
        </>
    )
}


export default Header;