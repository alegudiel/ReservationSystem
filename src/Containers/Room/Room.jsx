import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './Room.css';
import Container from '@mui/material/Container';
import Typography from "../../UI/Typography/Typography";
import Row from "../../UI/Row/Row"
import Cell from "../../UI/Cell/Cell"
import Card from "../../UI/Card/Card"
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import hostels from '../../Data/hostels';
import { getData, postData } from '../../api/services';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import Switch from '@mui/material/Switch';

const Room = () => {
    const { hostelId } = useParams();
    const hostel = hostels.find((h) => h.id === parseInt(hostelId, 10));
    const [selectedRoom, setSelectedRoom] = useState(0);
    const [rooms, setRooms] = useState([]);
    const [reservations, setReservations] = useState([]);
    const [error, setError] = useState(null);
    const [adultsQty, setAdultsQty] = useState(1);
    const [childrenQty, setChildrenQty] = useState(0);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [userData, setUserData] = useState({
        name: '',
        mail: '',
        phone: '',
        member: 0
    });

    const getRooms = async () => {
        try {
            const roomsData = await getData(`api/rooms/hotel/${hostelId}`);
            setRooms(roomsData);
            if (roomsData.length > 0) {
                setSelectedRoom(roomsData[0]);
            }
        } catch (error) {
            setError('Error al obtener habitaciones');
            console.error('Error al obtener habitaciones:', error);
        }
    }

    const getReservationsDates = async () => {
        if (!selectedRoom) return;
        
        try {
            const reservationsData = await getData(`api/reservations/dates?roomType=${selectedRoom.type}`);
            setReservations(reservationsData);
        } catch (error) {
            setError('Error al obtener las fechas de reservación');
            console.error('Error al obtener las fechas', error);
        }
    }

    useEffect(() => {
        getRooms();
    }, []);

    useEffect(() => {
        if (selectedRoom) {
            getReservationsDates();
        }
    }, [selectedRoom]);

    const createUser = async () => {
        try {
            const response = await postData('api/users/', userData);
            console.log(response)
            return response.result.insertId;
        } catch (error) {
            throw new Error('Error al crear usuario');
        }
    };

    const handleReservation = async () => {
        if (!startDate || !endDate || !selectedRoom) {
            setError('Por favor seleccione las fechas y habitación');
            return;
        }

        if (!userData.name || !userData.mail || !userData.phone) {
            setError('Por favor complete todos los datos del huésped');
            return;
        }

        try {
            const userId = await createUser();
            
            const reservationData = {
                roomId: selectedRoom,
                clientId: userId,
                startDate: startDate.format('YYYY-MM-DD'),
                endDate: endDate.format('YYYY-MM-DD'),
                noChildren: childrenQty === 0,
                adultsQty,
                childrenQty
            };

            await postData('api/reservations/', reservationData);
            setError(null);
            alert('Reservación realizada con éxito');
        } catch (error) {
            setError('Error al realizar la reservación');
            console.error('Error al realizar la reservación:', error);
        }
    };

    const isDateDisabled = (date) => {
        if (!reservations || reservations.length === 0) return false;
        
        return reservations.some(reservation => {
            const reservationStart = dayjs(reservation.startDate);
            const reservationEnd = dayjs(reservation.endDate);
            return date.isBetween(reservationStart, reservationEnd, 'day', '[]');
        });
    };

    return (
        <Container maxWidth="lg">
            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
            
            <Typography type="title" >{hostel.name}</Typography>
            <Typography type="caption" paragraph>{hostel.description}</Typography>

            <Row>
                <Cell xs={12} md={6}>
                    <Typography type={"subtitle"}>Horarios</Typography>
                    <Typography>Check-in: {hostel.checkIn}</Typography>
                    <Typography>Check-out: {hostel.checkOut}</Typography>
                </Cell>
            </Row>

            <Row>
                <Cell xs={12}>
                    <Typography type={"subtitle"} >Habitaciones disponibles</Typography>
                    <Row >
                        {rooms.map((room) => (
                            <Cell xs={12} md={4} key={room.idRoom}>
                                <Card selected={selectedRoom === room.idRoom} onClick={() => {setSelectedRoom(room.idRoom)}}>
                                    <Typography style={{margin: 0}} type="subsubtitle">{room.type}</Typography>
                                    <Typography type="text">{room.description}</Typography>
                                    <Typography type="text">
                                        Capacidad adultos: {room.adultsCapacity}
                                    </Typography>
                                    <Typography type="text">
                                        Capacidad niños: {room.childrenCapacity}
                                    </Typography>
                                    <Typography type="label">
                                        Tarifa Afiliado: Q{room.memberPrice}
                                    </Typography> <br/>
                                    <Typography type="label">
                                        Tarifa Normal: Q{room.normalPrice}
                                    </Typography>
                                </Card>
                            </Cell>
                        ))}
                    </Row>
                </Cell>
            </Row>

            <Row>
                <Cell xs={12} md={6}>
                            <Typography type="subtitle">Seleccionar Fechas</Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    
                                    label="Fecha de inicio"
                                    value={startDate}
                                    onChange={(newValue) => setStartDate(newValue)}
                                    shouldDisableDate={isDateDisabled}
                                    disablePast
                                    sx={{ width: '100%', mb: 2 }}
                                />
                                <DatePicker
                                    label="Fecha de fin"
                                    value={endDate}
                                    onChange={(newValue) => setEndDate(newValue)}
                                    shouldDisableDate={isDateDisabled}
                                    disablePast
                                    minDate={startDate}
                                    sx={{ width: '100%' }}
                                />
                            </LocalizationProvider>
                </Cell>
            </Row>

            <Row>
                <Cell xs={12} md={6}>
                    <Typography type='subtitle' >Datos del Huésped Principal</Typography>
                    <TextField
                        label="Nombre Completo"
                        value={userData.name}
                        onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))}
                        fullWidth
                        sx={{ mb: 2 }}
                        required
                    />
                    <TextField
                        label="Correo Electrónico"
                        value={userData.mail}
                        onChange={(e) => setUserData(prev => ({ ...prev, mail: e.target.value }))}
                        fullWidth
                        sx={{ mb: 2 }}
                        required
                    />
                    <TextField
                        label="Teléfono"
                        value={userData.phone}
                        onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                        fullWidth
                        sx={{ mb: 2 }}
                        required
                    />
                    <Typography type="caption">¿Deseas afiliarte?</Typography>
                    <Switch
                        checked={userData.member === 1}
                        onChange={(e) => setUserData(prev => ({ 
                            ...prev, 
                            member: e.target.checked ? 1 : 0 
                        }))}
                        color="primary"
                    />
                </Cell>
            </Row>

            <Row>
                <Cell xs={12} md={6}>
                    <Typography type='subtitle' >Cantidad de Huéspedes</Typography>
                    <TextField
                        type="number"
                        label="Adultos"
                        value={adultsQty}
                        onChange={(e) => setAdultsQty(parseInt(e.target.value))}
                        inputProps={{ min: 1, max: selectedRoom?.adultsCapacity || 1 }}
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        type="number"
                        label="Niños"
                        value={childrenQty}
                        onChange={(e) => setChildrenQty(parseInt(e.target.value))}
                        inputProps={{ min: 0, max: selectedRoom?.childrenCapacity || 0 }}
                        fullWidth
                        
                    />
                </Cell>
            </Row>            

            <Row>
                <Cell xs={12}>
                    <Button
                        variant="outlined"
                        size="large"
                        onClick={handleReservation}
                        disabled={!startDate || !endDate || !selectedRoom}
                        fullWidth 
                    >
                        Realizar Reservación
                    </Button>
                </Cell>
            </Row>
        </Container>
    );
};

export default Room;
