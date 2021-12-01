/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Helmet } from 'react-helmet';
import {Navbar, Container, Nav} from 'react-bootstrap';


function Header() {
    return (
        <>
            <Helmet>
                <title>CTD Commerce | Home</title>
            </Helmet>
            <header className="sticky-top">
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Produtos</Nav.Link>
                            <Nav.Link href="#pricing">Carrinho</Nav.Link>
                            <Nav.Link href="#pricing">Sobre nós</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}

export default Header;