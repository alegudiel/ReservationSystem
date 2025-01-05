import React from 'react';
import './DatePicker.css';

const DatePicker = ({ selectedDate, onDateChange }) => {
    const handleDateChange = (event) => {
        onDateChange(event.target.value);
    };

    return (
        <div className="date-picker">
            <label htmlFor="date">Selecciona una fecha:</label>
            <input
                type="date"
                id="date"
                value={selectedDate || ''}
                onChange={handleDateChange}
            />
        </div>
    );
};

export default DatePicker;