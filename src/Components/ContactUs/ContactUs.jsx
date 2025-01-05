import React from "react";
import './ContactUs.css';
import Container from '../../UI/Container/Container';
import Row from '../../UI/Row/Row';
import Cell from '../../UI/Cell/Cell';
import Typography from '../../UI/Typography/Typography';
import contactData from '../../Data/contactUs';

const ContactUs = () => {
    return (
        <Container>
            <Row>
                <Cell>
                    <Typography type="title">Contáctanos</Typography>
                </Cell>
            </Row>

            {/* Información de contacto */}
            {contactData.map((contact, index) => (
                <Row key={index}>
                    <Cell>
                        <Typography type="subtitle">{contact.name}</Typography>
                        <Typography type="body">Dirección: {contact.address} </Typography>
                        <Typography type="caption" style={{fontSize: "1rem"}}>Teléfono: {contact.phone}</Typography> <br />
                        <Typography type="link">{contact.email}</Typography>
                        <Typography type="body">{contact.pbx}</Typography>
                    </Cell>
                </Row>
            ))}

        </Container>
    );
}

export default ContactUs;