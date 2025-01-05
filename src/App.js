//-----Import Libraries
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//-----Components
import Navbar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Gallery/Gallery';
import RoomDetails from './Components/RoomDetails/RoomDetails';
import ContactUs from './Components/ContactUs/ContactUs';
//-----Containers
import Home from './Containers/Home/Home';
import Reservations from './Containers/Reservations/Reservations';
import Room from './Containers/Room/Room';

const App = () => {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/room-details/:hostelId" element={<RoomDetails />} />
        <Route path="/room/:hostelId" element={<Room />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path='/contactUs'  element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
