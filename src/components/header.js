import { Navbar, Container, Nav } from 'react-bootstrap';

function Header() {
    return (
        <>
            {/* Navbar */}
            <header className="sticky-top">
                <Navbar bg="dark" variant="dark" expand="md">
                    <Container>
                        <Navbar.Brand href="/">CTD Commerce</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav>
                                <Nav.Link href="/produtos">Produtos</Nav.Link>
                                <Nav.Link href="/carrinho">Carrinho</Nav.Link>
                                <Nav.Link href="#footer">Sobre nós</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </header>
        </>
    )
}


export default Header;