import React, { useState, useEffect, useRef } from "react";
import { Search, Calendar, MapPin, Plane } from "lucide-react";
import "./TopBar.css";
import DateRangePicker from "../Atoms/DateRangePicker";
import DestinationSearch from "../Atoms/DestinationSearch";
import PeopleCounter from "../Atoms/PeopleCounter";

function TopBar() {
  const [query, setQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showDestinationSearch, setShowDestinationSearch] = useState(false);
  const [showPeopleCounter, setShowPeopleCounter] = useState(false);
  const [peopleCount, setPeopleCount] = useState(1);
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const searchBarRef = useRef(null);
  const datePickerRef = useRef(null);
  const destinationSearchRef = useRef(null);
  const peopleCounterRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", { query, arrival, departure, peopleCount });
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

  const handleInputFocus = () => {
    setIsExpanded(true);
  };

  const handleInputBlur = () => {
    if (!showDestinationSearch && !showDatePicker && !showPeopleCounter) {
      setIsExpanded(false);
    }
  };

  const handleDestinationSelect = (type, destination) => {
    if (type === "arrival") {
      setArrival(destination);
    } else {
      setDeparture(destination);
    }
  };

  const handlePeopleCountChange = (count) => {
    setPeopleCount(count);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        handleInputBlur();
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
          placeholder={
            isExpanded ? "Search experiences..." : "Search experiences..."
          }
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={handleInputFocus}
        />
        {isExpanded && (
          <div className="search-options">
            <div className="destination-buttons">
              <button
                type="button"
                className="destination-button"
                onClick={() => setShowDestinationSearch(true)}
              >
                <Plane size={20} />
                <span>{departure || "From"}</span>
              </button>
              <button
                type="button"
                className="destination-button"
                onClick={() => setShowDestinationSearch(true)}
              >
                <MapPin size={20} />
                <span>{arrival || "To"}</span>
              </button>
            </div>
            <div className="selected-dates">
              {query && (
                <>
                  {query} <span className="date-separator">|</span>
                </>
              )}
            </div>
            <button
              type="button"
              className="calendar-button"
              onClick={(e) => {
                e.preventDefault();
                setShowDatePicker(true);
              }}
            >
              <Calendar size={20} />
            </button>
            <div
              className="people-counter"
              onClick={() => setShowPeopleCounter(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span className="people-count">{peopleCount}</span>
            </div>
          </div>
        )}
        <button
          type="submit"
          className="search-button"
          onClick={handleInputFocus}
        >
          <Search size={20} />
        </button>
      </form>
      {showDatePicker && (
        <div ref={datePickerRef} className="modal">
          <div
            className="modal-backdrop"
            onClick={() => setShowDatePicker(false)}
          />
          <div className="modal-content">
            <DateRangePicker
              query={query}
              onSelect={handleDateSelection}
              onClose={() => setShowDatePicker(false)}
            />
          </div>
        </div>
      )}
      {showDestinationSearch && (
        <div ref={destinationSearchRef} className="modal">
          <div
            className="modal-backdrop"
            onClick={() => setShowDestinationSearch(false)}
          />
          <div className="modal-content">
            <DestinationSearch
              onSelectArrival={(destination) =>
                handleDestinationSelect("arrival", destination)
              }
              onSelectDeparture={(destination) =>
                handleDestinationSelect("departure", destination)
              }
              onClose={() => setShowDestinationSearch(false)}
              initialArrival={arrival}
              initialDeparture={departure}
            />
          </div>
        </div>
      )}
      {showPeopleCounter && (
        <div ref={peopleCounterRef} className="modal">
          <div
            className="modal-backdrop"
            onClick={() => setShowPeopleCounter(false)}
          />
          <div className="modal-content">
            <PeopleCounter
              initialCount={peopleCount}
              onCountChange={handlePeopleCountChange}
              onClose={() => setShowPeopleCounter(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default TopBar;
