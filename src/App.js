/* eslint-disable import/first */
import React from 'react';
{/* Imports of the UI components*/}
  import Container from './UI/Container/Container';
  import Row from './UI/Row/Row';
  import Cell from './UI/Cell/Cell';
  import Typography from './UI/Typography/Typography';
{/* Imports of the containers and navigation */}
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import Home from './Containers/Home/Home';
  import Reservations from './Containers/Reservations/Reservations';
  import Navbar from './Components/NavBar/NavBar';
  import Footer from './Components/Footer/Footer';
  
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
      <Footer />
    </Router>
  );
};


export default App;