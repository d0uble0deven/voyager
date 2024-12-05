import React, { useState } from "react";
import { ChevronsUpDown, Check, ArrowRight } from "lucide-react";
import "./TripCard.css";

function TripCard({ name, version, icon, tripItenerary }) {
  const [selectedVersion, setSelectedVersion] = useState(version);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const versions = [version, "1.1.0-alpha", "2.0.0-beta1"];

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const launchFilePicker = () => {
    document.getElementById("trip-media-file-picker").click();
  };

  // Sort tripItenerary by date to ensure correct chronological order
  const sortedItenerary = [...tripItenerary].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  // Group itinerary items by location and date
  const groupedItinerary = sortedItenerary.reduce((acc, currentItem) => {
    const key = `${currentItem.location}_${currentItem.date}`;
    if (!acc[key]) {
      acc[key] = {
        ...currentItem,
        media: [],
      };
    }
    if (currentItem.media_url) {
      acc[key].media.push(currentItem);
    }
    return acc;
  }, {});

  const itineraryItems = Object.values(groupedItinerary);

  return (
    <div className="trip-card">
      <div className="trip-card-header">
        <div className="trip-card-icon">{icon}</div>
        <div className="trip-card-title">{name}</div>
        <div className="trip-card-version">{selectedVersion}</div>
        <div className="trip-card-open">
          Open
          <ArrowRight className="trip-card-open-icon" />
        </div>
      </div>
      <div className="trip-card-content">
        <div className="trip-card-dropdown">
          <button
            className="trip-card-dropdown-button"
            onClick={toggleDropdown}
          >
            <span>{selectedVersion}</span>
            <ChevronsUpDown />
          </button>
          <div
            className={`trip-card-dropdown-content ${
              isDropdownOpen ? "show" : ""
            }`}
          >
            {versions.map((v) => (
              <div
                key={v}
                className="trip-card-dropdown-item"
                onClick={() => {
                  setSelectedVersion(v);
                  setIsDropdownOpen(false);
                }}
              >
                v{v}
                {v === selectedVersion && <Check />}
              </div>
            ))}
          </div>
        </div>
        <div className="trip-card-changes-container">
          {itineraryItems.map((item, index) => {
            // Construct Google Maps link for the coordinates
            const googleMapsLink = `https://www.google.com/maps?q=${item.coordinates.lat},${item.coordinates.lon}`;

            return (
              <React.Fragment key={index}>
                <div className="trip-card-change-container">
                  <div className="trip-card-change-content-container">
                    <span className="trip-card-change-title-date">
                      <div>
                        <span className="trip-card-change-dot"></span>
                        <a
                          href={googleMapsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="trip-card-change-title"
                        >
                          {item.location}
                        </a>
                      </div>
                      <span className="trip-card-change-date">{item.date}</span>
                    </span>
                    <br />
                    <div className="trip-card-media">
                      {item.media.length > 0 ? (
                        item.media.map((mediaItem, mediaIndex) => (
                          <div key={mediaIndex} className="media-item">
                            {/* Render image or video based on media type */}
                            {mediaItem.media_type === "image" && (
                              <img
                                className="trip-card-image"
                                src={mediaItem.media_url}
                                alt={`${item.location} media`}
                              />
                            )}
                            {mediaItem.media_type === "video" && (
                              <video
                                className="trip-card-video"
                                muted
                                autoPlay
                                loop
                              >
                                <source
                                  src={mediaItem.media_url}
                                  type="video/mp4"
                                />
                                Your browser does not support the video tag.
                              </video>
                            )}
                          </div>
                        ))
                      ) : (
                        <div className="media-item-none">
                          <p>No media available for {item.location}.</p>
                        </div>
                      )}
                    </div>
                    <input
                      type="button"
                      id="trip-media-button"
                      value="+"
                      onClick={launchFilePicker}
                    />
                    <input
                      type="file"
                      style={{ display: "none" }}
                      id="trip-media-file-picker"
                      name="trip-media-file-picker"
                      accept="image/*, video/*"
                      multiple
                    />
                  </div>
                </div>
                {index < itineraryItems.length - 1 && (
                  <div className="trip-card-change-separator"></div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TripCard;
