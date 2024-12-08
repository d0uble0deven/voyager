import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./DateRangePicker.css";

function DateRangePicker({ query, onSelect, onClose }) {
  const [value, onChange] = useState(null);
  const [activeStartDate, setActiveStartDate] = useState(new Date());
  const [pendingDayInput, setPendingDayInput] = useState(null);

  console.log("DateRangePicker");

  useEffect(() => {
    if (query && /^[0-9]+$/.test(query)) {
      const month = parseInt(query, 10) - 1;
      if (month >= 0 && month <= 11) {
        const newDate = new Date(new Date().getFullYear(), month, 1);
        setActiveStartDate(newDate);
        setPendingDayInput(null);
      }
    } else if (query && /[ \-\/]/.test(query.slice(-1))) {
      setPendingDayInput("");
    } else if (pendingDayInput !== null && /^[0-9]$/.test(query.slice(-1))) {
      const newInput = pendingDayInput + query.slice(-1);
      setPendingDayInput(newInput);
      const day = parseInt(newInput, 10);
      if (day >= 1 && day <= 31) {
        const selectedDate = new Date(
          activeStartDate.getFullYear(),
          activeStartDate.getMonth(),
          day
        );
        onChange(selectedDate);
        setPendingDayInput(null);
      }
    }
  }, [query, activeStartDate, pendingDayInput]);

  const handleDateChange = (date) => {
    onChange(date);
    if (date) {
      onSelect(date);
      onClose();
    }
  };

  return (
    <div className="date-range-picker">
      <header>
        <h1>Choose your Travel dates</h1>
      </header>
      <Calendar
        onChange={handleDateChange}
        value={value}
        activeStartDate={activeStartDate}
        selectRange={true}
      />
      <button onClick={onClose} className="close-button">
        Close
      </button>
    </div>
  );
}

export default DateRangePicker;
