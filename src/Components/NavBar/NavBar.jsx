import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';
import Container from '../../UI/Container/Container.jsx';
import Row from '../../UI/Row/Row.jsx';
import Cell from '../../UI/Cell/Cell.jsx';
import Typography from '../../UI/Typography/Typography.jsx';

const NavBar = () => {
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'Inicio' },
        { path: '/reservations', label: 'Reservaciones' },
        { path: '/gallery', label: 'Galería' },
        { path: '/contactUs', label: 'Contáctanos' },
    ];

    return (
        <Container className="navbar">
            <Row>
                <Cell>
                    <Link to="/">
                        <img src="https://irtra.org.gt/wp-content/themes/irtra/images/logo-irtra.png" alt="IRTRA Logo" />
                    </Link>
                </Cell>
                {/* Enlaces de navegación */}
                {navItems.map((item, index) => (
                    <Cell key={index} className="navbar-item">
                        <Typography type="link">
                            <Link
                                to={item.path}
                                className={location.pathname === item.path ? 'active' : ''}
                            >
                                {item.label}
                            </Link>
                        </Typography>
                    </Cell>
                ))}
            </Row>
        </Container>
    );
};

export default NavBar;
