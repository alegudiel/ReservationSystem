import { Link } from 'react-router-dom';
import './RoomCard.css';
import Typography from '../../UI/Typography/Typography';

const RoomCard = ({ hostelId, name, description }) => {
    return (
        <div className="room-card" >
            <Typography type="subtitle">{name}</Typography>
            <Typography type="body">{description}</Typography>
            <Typography type='link'>
                <Link to={`/room/${hostelId}`} className="room-details-link">
                    Ver Detalles
                </Link>
            </Typography>
        </div>
    );
};

export default RoomCard;
