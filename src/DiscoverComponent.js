import React from "react";
import CardComponent from "./CardComponent";

import Glider from "react-glider";
import "glider-js/glider.min.css";

function DiscoverComponent() {
  const data = [
    {
      title: "Tour the Pyramids of Giza",
      content: "Cairo, Egypt - $2,900 - June 2, 2025",
      fragment:
        "Explore the Pyramids of Giza and the Great Sphinx on a half-day tour of Cairo with hotel transfers. Enjoy a short camel ride near the pyramids, immersing yourself in the spirit of ancient Egypt.",
      video:
        "https://videos.pexels.com/video-files/4174142/4174142-hd_1920_1080_30fps.mp4",
    },
    {
      title: "Daytona 500",
      content: "Daytona Beach, Florida - $900 - February 16, 2025",
      fragment:
        "Pageantry, breathtaking moments and spectacular racing are all part of the legacy of The Great American Race – and being here live will stay with you forever!",
      video:
        "https://www.daytonainternationalspeedway.com/wp-content/uploads/sites/1025/2024/10/22/D500-Fan-Experience-Video-Darker-02.mp4",
      // video:
      //   "https://videos.pexels.com/video-files/15368700/15368700-hd_1920_1080_60fps.mp4",
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
        "https://videos.pexels.com/video-files/4328782/4328782-uhd_2560_1440_30fps.mp4",
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

export default DiscoverComponent;
