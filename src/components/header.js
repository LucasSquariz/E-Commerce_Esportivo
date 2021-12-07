import { Navbar, Container, Nav } from 'react-bootstrap';

function Header(){
    return (
        <>
            {/* Navbar */}
            <header className="sticky-top">
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">CTD Commerce</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/produtos">Produtos</Nav.Link>
                            <Nav.Link href="/carrinho">Carrinho</Nav.Link>
                            <Nav.Link href="#footer">Sobre nós</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}


export default Header;