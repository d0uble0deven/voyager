import React, { useState, useEffect } from "react";

import "./TravelAgentComponent.css";

import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.REACT_APP_ANTHROPIC_API_KEY,
  dangerouslyAllowBrowser: true, // defaults to process.env["ANTHROPIC_API_KEY"]
});

const TravelAgentComponent = () => {
  const [message, setMessage] = useState([]);
  // const [message, setMessage] = useState([
  //   {
  //     type: "text",
  //     text: "Hi there, bestie! I'm so excited to help you plan your Waco adventure! Magnolia is definitely a must-see, but there's so much more to explore in this charming Texas city. Since you're heading to Magnolia in the afternoon, let me build you a fantastic itinerary that makes the most of your day.\n\nWaco has this amazing blend of history, culture, and modern attractions. I absolutely loved visiting the Dr Pepper Museum - it's where the iconic soda was invented! The Cameron Park Zoo is surprisingly impressive, and the Mammoth National Monument is fascinating (I mean, where else can you see actual mammoth fossils where they were discovered?). And if you're into sports history, the Texas Sports Hall of Fame is a total gem.\n\nHere's your personalized itinerary:\n\n9:00 AM - Start at Cameron Park Zoo\n(1701 N 4th St, Waco, TX 76707)\nPerfect morning activity when animals are most active\n\n11:00 AM - Dr Pepper Museum\n(300 S 5th St, Waco, TX 76701)\nBeat the lunch crowds and cool off inside\n\n12:30 PM - Lunch at Health Camp\n(2601 Circle Rd, Waco, TX 76706)\nIconic local burger joint - trust me on this one!\n\n2:00 PM - Magnolia Market at the Silos\n(601 Webster Ave, Waco, TX 76706)\nPeak afternoon shopping and exploring\n\n4:30 PM - Waco Mammoth National Monument\n(6220 Steinbeck Bend Dr, Waco, TX 76708)\nLess crowded late afternoon hours\n\n6:00 PM - Dinner at Ninfa's Mexican Restaurant\n(220 S 3rd St, Waco, TX 76701)\nBest authentic Mexican food in town\n\n7:30 PM - Evening stroll across Waco Suspension Bridge\n(101 N University Parks Dr, Waco, TX 76701)\nBeautiful sunset views over the Brazos River\n\nOptional add-ons if you have time:\n- Texas Sports Hall of Fame (1108 S University Parks Dr)\n- Texas Ranger Hall of Fame and Museum (100 Texas Ranger Trail)\n- Armstrong Browning Library at Baylor (710 Speight Ave)\n\nRemember to make advance reservations for restaurants, especially on weekends. Also, wear comfortable walking shoes - you'll be doing quite a bit of exploring! Let me know if you need any more specific recommendations, bestie! 🌟",
  //   },
  // ]);

  console.log("TravelAgentComponent");
  useEffect(() => {
    console.log("useEffect");
    const fetchData = async () => {
      console.log("fetchData");
      try {
        const msg = await anthropic.messages.create({
          model: "claude-3-5-sonnet-20241022",
          max_tokens: 1024,
          system:
            "You're are the user's best friend who has travelled the world and experienced eveything and you are now a professional travel agent, but you are providing you're services for free to this user out of the goodness of your heart.",
          messages: [
            {
              role: "user",
              content:
                "I am going to Waco this weekend. I am planning on visting Magnolia in the afternoon. What else can I do? build me an itenerary with other recommendations. Write me a paragraph as well as a timetable that lists out all of the recommendations, their addresses, and the times that I should visit them.",
            },
          ],
        });
        console.log("msg: ", msg.content);
        setMessage(msg.content);
      } catch (error) {
        console.error("Error fetching weather data: ", error);
      }
      console.log("message: ", message);
    };

    fetchData();
  }, []);

  return (
    <div className="travel-agent-container">
      <h2>Travel Agent</h2>
      {message.length > 0 ? (
        message?.map((item, index) => {
          return (
            <div key={index}>
              <p>type: {item.type}</p>
              <p>text: {item.text}</p>
            </div>
          );
        })
      ) : (
        <p>Loading… </p>
      )}
      <input type="text" className="travel-agent-input" />
    </div>
  );
};

export default TravelAgentComponent;
