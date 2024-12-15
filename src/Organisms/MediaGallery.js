import React from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";

const MediaGallery = () => {
  const mediaItems = [
    {
      type: "image",
      src: "https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "A tall multi-story temple structure next to shorter similar structures with a large blue mountain range in the background during dusk",
    },
    {
      type: "video",
      src: "https://videos.pexels.com/video-files/5845753/5845753-uhd_2732_1440_24fps.mp4",
      alt: "Loading EFUB_Top20_Japan_30second_v4_COLOR",
    },
    {
      type: "image",
      src: "https://images.pexels.com/photos/161309/traditional-and-technology-zojoji-temple-tokyo-culture-161309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "A tall multi-story temple structure next to shorter similar structures with a large blue mountain range in the background during dusk",
    },

    {
      type: "video",
      src: "https://videos.pexels.com/video-files/4711694/4711694-uhd_2560_1440_30fps.mp4",
      alt: "Loading EFUB_Top20_Japan_30second_v4_COLOR",
    },
    {
      type: "image",
      src: "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "A red ornate temple with multiple layers and gold detailing with a blue sky in the background",
    },

    {
      type: "video",
      src: "https://videos.pexels.com/video-files/6574285/6574285-hd_1280_720_25fps.mp4",
      alt: "Loading EFUB_Top20_Japan_30second_v4_COLOR",
    },
    {
      type: "image",
      src: "https://images.pexels.com/photos/2187456/pexels-photo-2187456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "A red ornate temple with multiple layers and gold detailing with a blue sky in the background",
    },
    {
      type: "video",
      src: "https://videos.pexels.com/video-files/5544073/5544073-hd_1920_1080_30fps.mp4",
      alt: "Loading EFUB_Top20_Japan_30second_v4_COLOR",
    },
    {
      type: "image",
      src: "https://images.pexels.com/photos/248195/pexels-photo-248195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "A tall multi-story temple structure next to shorter similar structures with a large blue mountain range in the background during dusk",
    },
  ];

  return (
    <div className="media-gallery">
      <Glider
        hasDots
        slidesToShow={2.15}
        slidesToScroll={1}
        draggable
        scrollLock
        itemWidth="500px"
      >
        {mediaItems.map((item, index) => (
          <div key={index} className="media-item">
            {item.type === "image" ? (
              <img src={item.src} alt={item.alt} />
            ) : (
              <video src={item.src} alt={item.alt} muted playsInline autoPlay />
            )}
          </div>
        ))}
      </Glider>
    </div>
  );
};

export default MediaGallery;
