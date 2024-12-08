import React, { useState, useEffect, useRef } from "react";
import { Search, Calendar } from "lucide-react";
import "./TopBar.css";
import DateRangePicker from "./Atoms/DateRangePicker";

function TopBar() {
  const [query, setQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const searchBarRef = useRef(null);
  const datePickerRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
    // Implement your search logic here
  };

  const handleDateSelection = (date) => {
    if (Array.isArray(date)) {
      setQuery(
        `${date[0].toLocaleDateString()} - ${date[1].toLocaleDateString()}`
      );
    } else {
      setQuery(date.toLocaleDateString());
    }
    setShowDatePicker(false);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleInputFocus = () => {
    setIsExpanded(true);
  };

  const handleInputBlur = () => {
    // Use setTimeout to allow the calendar icon click event to trigger first
    setTimeout(() => {
      if (!searchBarRef.current?.contains(document.activeElement)) {
        setIsExpanded(false);
      }
    }, 0);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target) &&
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setShowDatePicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="topbar-container">
      <form
        ref={searchBarRef}
        className={`search-bar ${isExpanded ? "expanded" : ""}`}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="search-input"
          placeholder="Search or enter dates"
          value={query}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <button
          type="button"
          className={`calendar-button ${
            isExpanded || query.length > 0 ? "visible" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            setShowDatePicker(true);
          }}
        >
          <Calendar size={20} />
        </button>
        <button type="submit" className="search-button">
          <Search size={20} />
        </button>
      </form>
      {showDatePicker && (
        <div ref={datePickerRef} className="date-picker-modal">
          <div
            className="date-picker-backdrop"
            onClick={() => setShowDatePicker(false)}
          />
          <div className="date-picker-content">
            <DateRangePicker
              query={query}
              onSelect={handleDateSelection}
              onClose={() => setShowDatePicker(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default TopBar;
