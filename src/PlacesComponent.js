import React from "react";
import CardComponent from "./Molecules/CardComponent";

import Glider from "react-glider";
import "glider-js/glider.min.css";

function PlacesComponent() {
  const data = [
    {
      title: "Fred Again... at the Pyramids",
      content: "Cairo, Egypt - $2,900 - June 2, 2025",
      fragment:
        "Experience one of the world's greatest DJs in one of the world's 7 wonders of the world",
      video:
        "https://videos.pexels.com/video-files/2759477/2759477-uhd_2560_1440_30fps.mp4",
    },
    {
      title: "Explore the Galapagos Island",
      content: "Santiago, Chile - $1,900 - March 20, 2025",
      fragment:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      video:
        "https://videos.pexels.com/video-files/4328782/4328782-uhd_2560_1440_30fps.mp4",
    },
    {
      title: "Explore the Galapagos Island",
      content: "Santiago, Chile - $1,900 - March 20, 2025",
      fragment:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      video:
        "https://videos.pexels.com/video-files/1093662/1093662-hd_1920_1080_30fps.mp4",
    },
    {
      title: "Explore the Galapagos Island",
      content: "Santiago, Chile - $1,900 - March 20, 2025",
      fragment:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      video:
        "https://videos.pexels.com/video-files/1321208/1321208-uhd_2560_1440_30fps.mp4",
    },
  ];

  return (
    <>
      <Glider draggable hasArrows hasDots slidesToShow={2} slidesToScroll={1}>
        {data &&
          data.length &&
          data.map((item, index) => {
            return (
              <div key={index}>
                <CardComponent data={item} />
              </div>
            );
          })}
      </Glider>
    </>
  );
}

export default PlacesComponent;
