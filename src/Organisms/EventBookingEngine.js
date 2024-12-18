import React, { useState, useEffect } from "react";

const EventBookingEngine = () => {
  const [events, setEvents] = useState([]);
  const [attraction, setAttraction] = useState(null);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = process.env.REACT_APP_TICKETMASTER_API_KEY;
  const API_SECRET = process.env.REACT_APP_TICKETMASTER_API_SECRET;

  // Fetch events
  const fetchEvents = async (pageNumber) => {
    setLoading(true);
    setError("");
    setAttraction(null);

    try {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&size=4&page=${pageNumber}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }
      const data = await response.json();
      const eventsData = data._embedded?.events || [];
      setEvents(eventsData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch attraction details
  const fetchAttraction = async (id) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/attractions/${id}.json?apikey=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch attraction");
      }
      const data = await response.json();
      setAttraction(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents(page);
  }, [page]);

  const renderEvents = () => {
    if (events.length === 0) {
      return <p>No events found.</p>;
    }

    return events.map((event, index) => (
      <div
        key={index}
        className="list-group-item"
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "10px",
          marginBottom: "10px",
          cursor: "pointer",
        }}
        onClick={() =>
          event._embedded?.attractions?.[0]?.id &&
          fetchAttraction(event._embedded.attractions[0].id)
        }
      >
        <h4 className="list-group-item-heading">{event.name}</h4>
        <p className="list-group-item-text">{event.dates.start.localDate}</p>
        <p className="venue">
          {event._embedded?.venues?.[0]?.name} in{" "}
          {event._embedded?.venues?.[0]?.city?.name}
        </p>
      </div>
    ));
  };

  const renderAttraction = () => {
    if (!attraction) {
      return null;
    }

    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={() => setAttraction(null)}
          style={{
            padding: "10px 20px",
            marginBottom: "20px",
            backgroundColor: "#0073e6",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Back to Events
        </button>
        <div>
          <h4>{attraction.name}</h4>
          <img
            src={attraction.images?.[0]?.url}
            alt={attraction.name}
            style={{ maxWidth: "100%", maxHeight: "300px", margin: "10px 0" }}
          />
          <p>
            {attraction.classifications?.[0]?.segment?.name} -{" "}
            {attraction.classifications?.[0]?.genre?.name} -{" "}
            {attraction.classifications?.[0]?.subGenre?.name}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Event Browser</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : attraction ? (
        renderAttraction()
      ) : (
        <div>
          {renderEvents()}
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
              style={{
                padding: "10px 20px",
                marginRight: "10px",
                backgroundColor: "#0073e6",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Previous
            </button>
            <button
              onClick={() => setPage((prev) => prev + 1)}
              style={{
                padding: "10px 20px",
                backgroundColor: "#0073e6",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventBookingEngine;
