import './NavBar.css';
import '../../UI/Typography/Typography.jsx';
import '../../UI/Container/Container.jsx';
import '../../UI/Row/Row.jsx';
import '../../UI/Cell/Cell.jsx';

const NavBar = () => {
    return (
        <Container>
            <Row>
                <Cell>
                    <Typography type="title" align="center">Reservation System</Typography>
                </Cell>
            </Row>
        </Container>
    );
}