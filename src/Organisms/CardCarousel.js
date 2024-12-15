import React, { useEffect, useState } from "react";
import CardComponent from "../Molecules/CardComponent";

import Glider from "react-glider";
import "glider-js/glider.min.css";

// function CardCarousel(experiences) {
function CardCarousel({ sectionTitle, experiences, idx }) {
  let copyWriteTitle = "";

  const calculateSlidesToShow = (idx) => {
    if (idx === 0) return 1.15;
    if (idx === 1) return 2.15;
    if (idx % 2 === 1) return 2.15;
    if (idx % 3 === 1) return 1.15;
    if (idx >= 2) return 3.15;
  };

  // Example usage:
  // const slidesToShow = calculateSlidesToShow(idx); // idx ranges from 0 to 100

  return (
    <>
      <h3 className="sub-header ">{sectionTitle}</h3>
      <Glider
        draggable
        hasDots
        slidesToShow={`${calculateSlidesToShow(idx)}`}
        slidesToScroll="auto"
        scrollLock="true"
        itemWidth="500px"
      >
        {experiences &&
          experiences?.length > 0 &&
          experiences?.map((item, index) => {
            copyWriteTitle = experiences[1]["title"];
            return (
              <div key={index}>
                <CardComponent data={item} />
              </div>
            );
          })}
      </Glider>
      <div
        style={{
          backgroundColor: "#DBEE63",
          // border: "black 5px solid",
          border: "#EE7663 5px solid",
          padding: "10px",
          margin: "0.5vw",
          maxWidth: "95%",
        }}
      >
        <div
          style={{
            color: "#EE7663",
            backgroundColor: "#DBEE63",
            textAlign: "center",
          }}
        >
          <div style={{ color: "#EE7663", backgroundColor: "#DBEE63" }}>
            <div style={{ color: "#EE7663", backgroundColor: "#DBEE63" }}>
              <div style={{ color: "#EE7663", backgroundColor: "#DBEE63" }}>
                <div
                  variant="2"
                  style={{
                    marginBottom: "15px",
                    color: "#EE7663",
                    backgroundColor: "#DBEE63",
                  }}
                >
                  SELLING OUT FAST!{" "}
                </div>
                <div
                  style={{
                    color: "#EE7663",
                    backgroundColor: "#DBEE63",
                  }}
                >
                  <h3
                    order="2"
                    style={{
                      color: "#EE7663",
                      backgroundColor: "#DBEE63",
                    }}
                  >
                    NEW {copyWriteTitle} Collection
                    {/* NEW {title} Collection */}
                    {/* NEW Thailand Collection */}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            color: "#EE7663",
            backgroundColor: "#DBEE63",
            textAlign: "center",
          }}
        >
          <div style={{ color: "#EE7663", backgroundColor: "#DBEE63" }}>
            <div style={{ color: "#EE7663", backgroundColor: "#DBEE63" }}>
              <a
                style={{ color: "#EE7663", backgroundColor: "#DBEE63" }}
                _uid="de5ba610-b0c0-400d-8e9a-208f0472120c"
                component="wojo-button-atom"
                href="/tours/asia/thailand"
              >
                See the trips 🐘
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardCarousel;
