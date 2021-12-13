/* eslint-disable no-lone-blocks */
import { Container, Col, Row } from 'react-bootstrap';
import './footer.scss';

function Footer() {
    return (
        <>
            {/* Footer */}
            <footer className="footer">
            <Container>
            <Row>
            <Col sm={12} lg={6}>
                <p>Projeto de um e-commerce desenvolvido em React e Bootstrap </p>
                <p>com ♥ pelos alunos do Certified Tech Developer by Digital House.</p>
                <p>&copy; 2021 — CTD Commerce Ltda. Todos os direitos reservados.</p>
            </Col>
            <Col sm={12} lg={6}>
                <p><strong>Contato:</strong> (11) 99999-9999</p>
                <img src="https://www.digitalhouse.com/logo-dh-blanco.png" className="deploying-page__text--dh-logo" alt="Digital House"></img>
            </Col>
            </Row>
        </Container>
        </footer>
        </>
    )

}

export default Footer;