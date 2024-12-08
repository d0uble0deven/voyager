import React, { useEffect, useRef } from "react";

import "./CardComponent.css";

function CardComponent(props) {
  const { data } = props;
  // console.log("data: ", data);

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // console.log("videoRef.current: ", videoRef.current);
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Video is playing
            // console.log("Video is playing");
          })
          .catch((error) => {
            console.error("Error attempting to play the video:", error);
          });
      }
    }
  }, [data?.url]);

  return (
    <>
      <div className="Card-Container">
        <div className="Card">
          <video
            ref={videoRef}
            style={{
              zIndex: "1",
              width: "100%",
              objectFit: "cover",
              aspectRatio: "16/9",
              borderRadius: "10px",
              maxHeight: "20rem",
            }}
            muted
            autoPlay
            loop
          >
            <source src={data?.video || "No URL Available"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="Title">
            <h1>{data?.title || "No Title Available"}</h1>
          </div>
          <div className="Content">
            <h3>{data?.content || "No Content Available"}</h3>
            <p>{data?.fragment || "No Fragment Available"}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardComponent;
