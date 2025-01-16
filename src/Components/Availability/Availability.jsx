import React, { useState, useEffect } from 'react';
import './Availability.css';
import Container from '../../UI/Container/Container';
import Row from '../../UI/Row/Row';
import Cell from '../../UI/Cell/Cell';
import Typography from '../../UI/Typography/Typography';

const Availability = ({ selectedDate, selectedHostel, onRoomSelect }) => {
    const [availability, setAvailability] = useState({});

    useEffect(() => {
        if (selectedDate && selectedHostel) {
            const newAvailability = {};
            selectedHostel.rooms.forEach((room) => {
                newAvailability[room.type] = Math.floor(Math.random() * 10 + 5); // Simula disponibilidad
            });
            setAvailability(newAvailability);
        }
    }, [selectedDate, selectedHostel]);

    return (
        <Container>
            <Row>
                <Cell>
                    <Typography type="title">Disponibilidad</Typography>
                </Cell>
            </Row>
            {selectedDate && (
                <Row>
                    {Object.keys(availability).map((roomType, index) => (
                        <Cell xs={3} key={index}>
                            <Typography type="subtitle">{roomType}</Typography>
                            <Typography type="body">Habitaciones disponibles: {availability[roomType]}</Typography>
                            <button className='reservation-select-button'
                            onClick={() => onRoomSelect(roomType)}>Seleccionar</button>
                        </Cell>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default Availability;
