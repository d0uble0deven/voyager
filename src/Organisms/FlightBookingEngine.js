import React, { useState } from "react";
import "./FlightBookingEngine.css";

function FlightBookingEngine() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [flightOptions, setFlightOptions] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [bookingResponse, setBookingResponse] = useState(null);

  // Fetch flight options from Node.js API
  const fetchFlights = async () => {
    console.log("fetchFlights");
    try {
      const response = await fetch(
        `/flights/flight-search?originCode=${origin}&destinationCode=${destination}&dateOfDeparture=${departureDate}`
      );
      const data = await response.json();
      console.log("fetchFlights - data: ", data);
      setFlightOptions(data.data); // Update with flight data
      console.log("fetchFlights - flightOptions: ", flightOptions);
    } catch (error) {
      console.error("Error fetching flights:", error);
    }
  };

  // Confirm flight price and availability
  const confirmFlight = async () => {
    try {
      const response = await fetch(`/flights/flight-confirmation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ flight: selectedFlight }),
      });
      const data = await response.json();
      setSelectedFlight(data);
    } catch (error) {
      console.error("Error confirming flight:", error);
    }
  };

  // Book the selected flight
  const bookFlight = async () => {
    try {
      const response = await fetch(`/flights/flight-booking`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          flight: selectedFlight,
          name: { first: "John", last: "Doe" },
        }),
      });
      const data = await response.json();
      setBookingResponse(data);
    } catch (error) {
      console.error("Error booking flight:", error);
    }
  };

  return (
    <div className="flight-booking-engine">
      <h2>Book Your Flight</h2>
      <div>
        <label>Origin:</label>
        <input
          type="text"
          placeholder="Enter origin (e.g., JFK)"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
      </div>
      <div>
        <label>Destination:</label>
        <input
          type="text"
          placeholder="Enter destination (e.g., LAX)"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div>
        <label>Departure Date:</label>
        <input
          type="date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        />
      </div>
      <div>
        <label>Return Date:</label>
        <input
          type="date"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />
      </div>
      <div>
        <label>Passengers:</label>
        <input
          type="number"
          min="1"
          max="9"
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
        />
      </div>
      <button onClick={fetchFlights}>Search Flights</button>
      {flightOptions.length > 0 && (
        <div>
          <h3>Available Flights</h3>
          {flightOptions.map((flight, index) => (
            <div key={index}>
              <input
                type="radio"
                name="flight"
                value={index}
                onChange={() => setSelectedFlight(flight)}
              />
              <label>
                {flight.price.grandTotal} {flight.price.currency}
              </label>
            </div>
          ))}
          <button onClick={confirmFlight} disabled={!selectedFlight}>
            Confirm Flight
          </button>
        </div>
      )}
      {selectedFlight && <button onClick={bookFlight}>Book Flight</button>}
      {bookingResponse && (
        <div>
          <h3>Booking Confirmed!</h3>
          <pre>{JSON.stringify(bookingResponse, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default FlightBookingEngine;
