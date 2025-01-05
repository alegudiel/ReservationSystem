import React, { useState } from 'react';
import './Reservations.css';
import Container from '../../UI/Container/Container';
import Row from '../../UI/Row/Row';
import Cell from '../../UI/Cell/Cell';
import Typography from '../../UI/Typography/Typography';
import RoomCard from '../../Components/RoomCard/RoomCard';
import DatePicker from '../../Components/DatePicker/DatePicker';
import Availability from '../../Components/Availability/Availability';
import hostels from '../../Data/hostels';

const Reservations = () => {
    const [selectedHostel, setSelectedHostel] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedRoom, setSelectedRoom] = useState(null);

    return (
        <Container>
            <Typography type="title">Reservaciones</Typography>
            {!selectedHostel ? (
                <Row>
                    {hostels.map((hostel) => (
                        <Cell key={hostel.id}>
                            <RoomCard
                                hostelId={hostel.id}
                                name={hostel.name}
                                description={hostel.description}
                                onClick={() => setSelectedHostel(hostel)}
                            />
                        </Cell>
                    ))}
                </Row>
            ) : (
                <>
                    <Row>
                        <Cell>
                            <Typography type="subtitle">{selectedHostel.name}</Typography>
                            <Typography type="text">{selectedHostel.description}</Typography>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>
                            <DatePicker selectedDate={selectedDate} onDateChange={setSelectedDate} />
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>
                            <Availability selectedDate={selectedDate} onRoomSelect={setSelectedRoom} />
                        </Cell>
                    </Row>
                </>
            )}
        </Container>
    );
};

export default Reservations;
