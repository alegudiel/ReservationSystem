import React from 'react';
import { useParams } from 'react-router-dom';
import './RoomDetails.css';
import Container from '../../UI/Container/Container';
import Typography from '../../UI/Typography/Typography';
import hostels from '../../Data/hostels';
import { formatPrice } from '../../Utils/Helpers';

const RoomDetails = () => {
    const { hostelId, roomType } = useParams();
    const hostel = hostels.find((h) => h.id === parseInt(hostelId, 10));
    const room = hostel?.rooms.find((r) => r.type === roomType);

    if (!room) {
        return (
            <Container>
                <Typography type="title">Habitación no encontrada</Typography>
            </Container>
        );
    }

    return (
        <Container className="room-details">
            <Typography type="title">{room.type}</Typography>
            <Typography type="body">{room.description}</Typography>
            <Typography type="body">
                <strong>Capacidad:</strong> {room.capacity}
            </Typography>
            <Typography type="caption">
                <strong>Tarifa Afiliado:</strong> {formatPrice(room.affiliateRates.weekday)} -{' '}
                {formatPrice(room.affiliateRates.weekend)}
            </Typography>
            <Typography type="caption">
                <strong>Tarifa Plena:</strong> {formatPrice(room.fullRates.weekday)} -{' '}
                {formatPrice(room.fullRates.weekend)}
            </Typography>
        </Container>
    );
};

export default RoomDetails;