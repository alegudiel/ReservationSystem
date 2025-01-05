import React, { useState } from "react";
import './Home.css';
import Container from '../../UI/Container/Container';
import Row from '../../UI/Row/Row';
import Cell from '../../UI/Cell/Cell';
import Typography from '../../UI/Typography/Typography';
import { IconButton } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import img1 from '../../Assets/Images/Xetulul/xetulul21.jpg';
import img2 from '../../Assets/Images/Xetulul/xetulul24.jpg';
import img3 from '../../Assets/Images/Xetulul/xetulul41.jpg';

const Home = () => {
    const images = [img1, img2, img3];
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToNext = () =>{
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }

    return (
        <Container>
            <Row>
                <Cell>
                    <img src={images[currentIndex]} alt="Carousel" className="carousel-image" />
                </Cell>
                {/* Botones de navegación */}
                <Cell>
                    <IconButton onClick={goToPrevious}>
                        <ArrowBack />
                    </IconButton>
                    <IconButton onClick={goToNext}>
                        <ArrowForward />
                    </IconButton>
                </Cell>
            </Row>
            <Row>
                <Cell>
                    <Typography type="title" align="center">IRTRA es felicidad</Typography>
                </Cell>
            </Row>
            <Row>
                <Cell>
                    <Typography type="subtitle" align="center">Somos un centro de recreación con parques de diversiones y complejo habitacional en donde en cada rincón habita la magia y felicidad. ¡Ven a visitarnos!
                    </Typography>
                </Cell>
            </Row>
        </Container>
    );
};

export default Home;