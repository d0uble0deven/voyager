import React, { useEffect, useRef } from "react";

import "./CardComponent.css";

/*
  get data to port through component -- DONE
  add videos -- DONE
  research perpelexity gpt api
  create new page for Planning
*/

function CardComponent(props) {
  const { data } = props;
  console.log("data: ", data);

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      console.log("videoRef.current: ", videoRef.current);
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Video is playing
            console.log("Video is playing");
          })
          .catch((error) => {
            console.error("Error attempting to play the video:", error);
          });
      }
    }
  }, [data?.url]);

  return (
    <>
      <div className="Card">
        <div className="Title">
          <h1>{data?.title || "No Title Available"}</h1>
        </div>
        <div className="Content">
          <h3>{data?.content || "No Content Available"}</h3>
          <p>{data?.fragment || "No Fragment Available"}</p>
        </div>
        <video
          ref={videoRef}
          style={{
            zIndex: "1000",
            width: "100%",
            objectFit: "cover",
            // objectPosition: "bottom 1% right 1%",
            aspectRatio: "16/9",
          }}
          muted
          autoPlay
          loop
        >
          <source src={data?.video || "No URL Available"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}

export default CardComponent;
