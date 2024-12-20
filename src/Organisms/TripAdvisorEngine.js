import React, { useState } from "react";

const TripAdvisorEngine = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("hotels");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Function to search locations
  const searchLocations = async () => {
    setLoading(true);
    setError("");
    setResults([]);

    try {
      const response = await fetch(
        `/tripadvisor/search?searchQuery=${encodeURIComponent(
          searchQuery
        )}&category=${category}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch locations");
      }

      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError(err.message || "An error occurred during the search.");
    } finally {
      setLoading(false);
    }
  };

  const renderResults = () => {
    if (results.length === 0) {
      return <p>No results found.</p>;
    }

    return results.map((result, index) => (
      <div
        key={index}
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        <h3>{result.name}</h3>
        <p>Distance: {result.distance || "N/A"}</p>
        {result.details ? (
          <>
            <p>Address: {result.details.address_obj?.address_string}</p>
            <p>Rating: {result.details.rating} / 5</p>
            <p>Number of Reviews: {result.details.num_reviews}</p>
            <p>Price Level: {result.details.price_level || "N/A"}</p>
            <a
              href={result.details.web_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on TripAdvisor
            </a>
            <div style={{ marginTop: "10px" }}>
              <h4>Photos:</h4>
              <div
                style={{ display: "flex", gap: "10px", overflowX: "scroll" }}
              >
                {result.photos.map((photoUrl, photoIndex) => (
                  <img
                    key={photoIndex}
                    src={photoUrl}
                    alt={`Photo of ${result.name}`}
                    style={{
                      width: "150px",
                      height: "100px",
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                  />
                ))}
              </div>
            </div>
          </>
        ) : (
          <p>Details unavailable for this location.</p>
        )}
      </div>
    ));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>TripAdvisor Search</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "8px" }}>
          Search Query:
        </label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "16px" }}
        />

        <label style={{ display: "block", marginBottom: "8px" }}>
          Category:
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "16px" }}
        >
          <option value="hotels">Hotels</option>
          <option value="attractions">Attractions</option>
          <option value="restaurants">Restaurants</option>
          <option value="geos">Geos</option>
        </select>

        <button
          onClick={searchLocations}
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
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {loading ? <p>Loading...</p> : renderResults()}
    </div>
  );
};

export default TripAdvisorEngine;
