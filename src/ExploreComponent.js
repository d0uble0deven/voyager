import React, { useEffect, useState } from "react";
import CardComponent from "./Molecules/CardComponent";

import Glider from "react-glider";
import "glider-js/glider.min.css";

function ExploreComponent() {
  const data = [
    {
      title: "Explore the Colosseum",
      content: "Rome, Italy - $2,900 - February 2, 2025",
      fragment:
        "Visit the Colosseum, the largest amphitheater in the Roman world, the Palatine Hill, the oldest part of the city, and the Roman Forum, the beating heart of ancient Rome, with an expert guide.",
      video:
        "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/D8qa-2E/troop-of-historical-gladiators-marching-together-shot-on-red-epic_rzeyrkrmr__f29a77f5d4206848e683caa56034b746__P360.mp4",
    },
    {
      title: "Alien Sighting in Area 51",
      content: "Rachel, Nevada - $600 - January 16, 2025",
      fragment:
        "Scarf an Alien Burger, clink Alien Amber Ales, or spend the night trying to spot UFOs. Whatever you do, be sure to talk to some locals; the closest population to Area 51 knows: THE TRUTH IS OUT HERE.",
      video:
        "https://static.vecteezy.com/system/resources/previews/002/019/759/mp4/a-ufo-in-the-desert-free-video.mp4",
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
      <Glider
        draggable
        hasDots
        slidesToShow={1.15}
        slidesToScroll="auto"
        scrollLock="true"
        itemWidth="500px"
      >
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

export default ExploreComponent;
