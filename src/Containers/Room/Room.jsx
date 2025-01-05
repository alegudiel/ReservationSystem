import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import './Room.css';
import Container from '../../UI/Container/Container';
import Row from '../../UI/Row/Row';
import Cell from '../../UI/Cell/Cell';
import Typography from '../../UI/Typography/Typography';
import Availability from '../../Components/Availability/Availability';
import DatePicker from '../../Components/DatePicker/DatePicker';
import hostels from '../../Data/hostels';

const Room = () => {
    const { hostelId } = useParams();
    const hostel = hostels.find((h) => h.id === parseInt(hostelId, 10));
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedRoom, setSelectedRoom] = useState(hostel?.rooms[0]?.type);

    if (!hostel) {
        return (
            <Container>
                <Typography type="h1">Hostal no encontrado</Typography>
            </Container>
        );
    }

    const handleReservation = () => {
        alert(`Reservando habitación: ${selectedRoom} para la fecha ${selectedDate}`);
    };

    return (
        <Container>
            {/* Información del hostal */}
            <Typography type="title">{hostel.name}</Typography>
            <Typography type="body">{hostel.description}</Typography>

            {/* Información de Check-in y Check-out */}
            <Row>
                <Cell>
                    <Typography type="subtitle">Check-in: {hostel.checkIn}</Typography>
                    <Typography type="subtitle">Check-out: {hostel.checkOut}</Typography>
                </Cell>
            </Row>

            {/* Selector de fecha */}
            <Row>
                <Cell>
                    <DatePicker selectedDate={selectedDate} onDateChange={setSelectedDate} />
                </Cell>
            </Row>

            {/* Selección de habitación */}
            <Row>
                <Cell>
                    <Availability
                        selectedDate={selectedDate}
                        selectedHostel={hostel}
                        onRoomSelect={setSelectedRoom}
                    />
                </Cell>
            </Row>

            {/* Información de habitaciones */}
            <Row>
                {hostel.rooms.map((room, index) => (
                    <Cell key={index}>
                        <div className="room-info">
                            <Typography type="subtitle">{room.type}</Typography>
                            <Typography type="body">{room.description}</Typography>
                            <Typography type="caption">
                                <strong>Capacidad:</strong> {room.capacity}
                            </Typography>
                            <Typography type="body">
                                <strong>Tarifas Afiliado:</strong> {room.affiliateRates.weekday} - {room.affiliateRates.weekend}
                            </Typography>
                            <Typography type="body">
                                <strong>Tarifas Plena:</strong> {room.fullRates.weekday} - {room.fullRates.weekend}
                            </Typography>
                        </div>
                    </Cell>
                ))}
            </Row>

            {/* Servicios del hostal */}
            <Row>
                <Cell>
                    <Typography type="subtitle">Servicios</Typography>
                    <ul>
                        {hostel.services.map((service, index) => (
                            <li key={index}>{service}</li>
                        ))}
                    </ul>
                </Cell>
            </Row>

            {/* Botón de reservación */}
            <Row>
                <Cell>
                    <button onClick={handleReservation} className="reserve-button">
                        Realizar Reservación
                    </button>
                </Cell>
            </Row>
        </Container>
    );
};

export default Room;
