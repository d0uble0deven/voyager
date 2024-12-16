import React, { useState } from "react";

const HotelBookingEngine = () => {
  const [city, setCity] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState("");

  const searchHotels = async () => {
    setLoading(true);
    setError("");
    setHotels([]);

    try {
      const response = await fetch(
        `/hotels/searchHotels?city=${encodeURIComponent(
          city
        )}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch hotels");
      }

      const data = await response.json();
      setHotels(data.hotels || []);
    } catch (err) {
      setError(err.message || "An error occurred while fetching hotels.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Hotel Booking Engine</h2>
      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "8px" }}>City:</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "16px" }}
        />

        <label style={{ display: "block", marginBottom: "8px" }}>
          Check-In Date:
        </label>
        <input
          type="date"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "16px" }}
        />

        <label style={{ display: "block", marginBottom: "8px" }}>
          Check-Out Date:
        </label>
        <input
          type="date"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "16px" }}
        />

        <button
          onClick={searchHotels}
          style={{
            padding: "10px 20px",
            backgroundColor: "#0073e6",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          disabled={loading}
        >
          {loading ? "Searching..." : "Search Hotels"}
        </button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        {hotels.length > 0
          ? hotels.map((hotel, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              >
                <h3>{hotel.name}</h3>
                <p>{hotel.address}</p>
                <p>Check-in: {hotel.checkInDate}</p>
                <p>Check-out: {hotel.checkOutDate}</p>
                <p>Price: {hotel.price}</p>
                <p>Category: {hotel.category}</p>
              </div>
            ))
          : !loading && <p>No hotels found.</p>}
      </div>
    </div>
  );
};

export default HotelBookingEngine;
