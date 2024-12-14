import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import "./DestinationSearch.css";

const popularDestinations = [
  { city: "New York", code: "NYC" },
  { city: "Los Angeles", code: "LAX" },
  { city: "London", code: "LHR" },
  { city: "Paris", code: "CDG" },
  { city: "Tokyo", code: "HND" },
  { city: "Sydney", code: "SYD" },
  { city: "Dubai", code: "DXB" },
  { city: "Singapore", code: "SIN" },
  { city: "Hong Kong", code: "HKG" },
  { city: "Frankfurt", code: "FRA" },
  { city: "Amsterdam", code: "AMS" },
  { city: "Seoul", code: "ICN" },
  { city: "Bangkok", code: "BKK" },
  { city: "Mumbai", code: "BOM" },
  { city: "São Paulo", code: "GRU" },
];

function DestinationSearch({
  onSelectArrival,
  onSelectDeparture,
  onClose,
  initialArrival,
  initialDeparture,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDestinations, setFilteredDestinations] =
    useState(popularDestinations);
  const [selectedDeparture, setSelectedDeparture] = useState(initialDeparture);
  const [selectedArrival, setSelectedArrival] = useState(initialArrival);

  useEffect(() => {
    if (searchQuery) {
      const lowercaseQuery = searchQuery.toLowerCase();
      setFilteredDestinations(
        popularDestinations.filter(
          (dest) =>
            dest.city.toLowerCase().includes(lowercaseQuery) ||
            dest.code.toLowerCase().includes(lowercaseQuery)
        )
      );
    } else {
      setFilteredDestinations(popularDestinations);
    }
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement actual search logic here if needed
  };

  const handleSelectDeparture = (destination) => {
    setSelectedDeparture(destination);
    onSelectDeparture(destination);
  };

  const handleSelectArrival = (destination) => {
    setSelectedArrival(destination);
    onSelectArrival(destination);
  };

  return (
    <div className="destination-search">
      <h2>Search Destinations</h2>
      <form onSubmit={handleSearch}>
        <div className="search-input-wrapper">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter a destination"
          />
          <button type="submit">
            <Search size={20} />
          </button>
        </div>
      </form>
      <div className="destination-columns">
        <div className="destination-column">
          <h3>Departures</h3>
          <ul>
            <li
              key="any-departure"
              onClick={() => handleSelectDeparture("Any Destination")}
              className={
                selectedDeparture === "Any Destination" ? "selected" : ""
              }
            >
              Any Destination
            </li>
            {filteredDestinations.map((destination) => (
              <li
                key={`departure-${destination.code}`}
                onClick={() =>
                  handleSelectDeparture(
                    `${destination.city} - ${destination.code}`
                  )
                }
                className={
                  selectedDeparture ===
                  `${destination.city} - ${destination.code}`
                    ? "selected"
                    : ""
                }
              >
                {destination.city} - {destination.code}
              </li>
            ))}
          </ul>
        </div>
        <div className="destination-column">
          <h3>Arrivals</h3>
          <ul>
            <li
              key="any-arrival"
              onClick={() => handleSelectArrival("Any Destination")}
              className={
                selectedArrival === "Any Destination" ? "selected" : ""
              }
            >
              Any Destination
            </li>
            {filteredDestinations.map((destination) => (
              <li
                key={`arrival-${destination.code}`}
                onClick={() =>
                  handleSelectArrival(
                    `${destination.city} - ${destination.code}`
                  )
                }
                className={
                  selectedArrival ===
                  `${destination.city} - ${destination.code}`
                    ? "selected"
                    : ""
                }
              >
                {destination.city} - {destination.code}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button onClick={onClose} className="close-button">
        Close
      </button>
    </div>
  );
}

export default DestinationSearch;
