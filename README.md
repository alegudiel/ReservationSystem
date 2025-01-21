# Reservation System - Inspired by IRTRA Hostels

Welcome to the Reservation System! This project is inspired by the [IRTRA](irtra.org.gt/) hostels in Guatemala. While it's not an official system, it aims to enhance the experience by including features like making reservations online, which the official site currently does not support.

## Features
- **Browse Hotel Information:** Explore basic details about the hotel, including location and amenities.
- **Make Reservations:** Easily book your stay online.

## Technologies Used
- **Frontend:** JavaScript, React, Material UI, CSS
- **Backend:** Node.js, Express, MySQL

## Getting Started
Follow these steps to run the project on your local machine:

### Prerequisites
- Node.js installed on your system
- MySQL server running
- A code editor (e.g., VS Code)

### Installation
1. Clone the repositories:
   ```bash
   git clone https://github.com/alegudiel/ReservationSystem.git
   git clone https://github.com/alegudiel/ReservationSystem-Backend.git
   ```
2. Navigate to each project directory and install dependencies:
   ```bash
   cd ReservationSystem
   npm install
   cd ../ReservationSystem-Backend
   npm install
   ```

### Running the Project
1. Start the backend server:
   ```bash
   cd ReservationSystem-Backend
   npm run dev
   ```
2. Open a new terminal and start the frontend:
   ```bash
   cd ReservationSystem
   npm start
   ```
3. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Project Structure

### Frontend (`ReservationSystem`)
```
Reservation-System
|-- src/
|      |-- api/
|      |-- Assets/
|      |-- Components/
|      |-- Containers/
|      |-- Styles/
|      |-- UI/
|      |-- Utils/
|-- App.js
|-- Index.js
```

### Backend (`ReservationSystem-Backend`)
```
reservation-system-backend
|-- src/
|      |-- config/
|      |-- controllers/
|      |-- routes/
|      |-- scripts/
|      |-- types/
|-- app.ts
|-- .env
```

## Available Scripts

### Frontend
#### `npm start`
Starts the application in development mode.
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
- The page automatically reloads when you make changes.
- Console displays any lint errors.

### Backend
#### `npm run dev`
Starts the backend server using nodemon for live updates.

## Acknowledgments
- **IRTRA Hostels:** For inspiring the design and concept.
- **Open-Source Tools:** A big thanks to the creators of the tools and libraries used in this project.

