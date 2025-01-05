import React from 'react';
import './Footer.css';
import Container from '../../UI/Container/Container';
import Row from '../../UI/Row/Row';
import Cell from '../../UI/Cell/Cell';
import Typography from '../../UI/Typography/Typography';

const Footer = () => {
    return (
        <Container className="footer">
            <Row>
                <Cell>
                    <Typography type="caption" align="center">
                        © 2025 IRTRA. Todos los derechos reservados.
                    </Typography>
                </Cell>
            </Row>
            <Row>
                <Cell>
                    <Typography type="link" align="center">
                        <a href="mailto:contacto@irtra.org.gt">contacto@irtra.org.gt</a>
                    </Typography>
                </Cell>
            </Row>
        </Container>
    );
};

export default Footer;
