import React, { useState, useEffect } from "react";
import "./DiscoveryPage.css";

// import GlobeComponent from "../GlobeComponent";
import NavigationComponent from "../NavigationComponent";
// import NavBar from "../Navbar";
import TopBar from "../Organisms/TopBar";

import CardCarousel from "../Organisms/CardCarousel";

import DiscoverMockData from "../MockData/DiscoverMockData";

function DiscoveryPage() {
  const [discoverData, setDiscoverData] = useState([]);

  useEffect(() => {
    if (discoverData.length === 0) {
      setDiscoverData(DiscoverMockData);
    }
  }, []);

  return (
    <>
      <div className="grid">
        <div className="side-bar-container">
          <div className="side-bar">
            <NavigationComponent />
          </div>
        </div>
        <div className="top-bar">
          {/* <NavBar /> */}
          <TopBar />
        </div>
        <div className="ExploreComponent">
          <hr />
          {discoverData &&
            discoverData?.length &&
            discoverData?.map((section, sectionIndex) => {
              const [sectionTitle, experiences] = Object.entries(section)[0];
              return (
                <div key={sectionIndex}>
                  <div className="experiences-list">
                    <CardCarousel
                      sectionTitle={sectionTitle}
                      experiences={experiences}
                      idx={discoverData.indexOf(section)}
                    />
                  </div>
                </div>
              );
            })}
        </div>
        {/* <div className="globe-container">
          globe-container
          <GlobeComponent />
          </div> */}
        <hr />
        {/* <div className="c">c</div>
        <div className="d">d</div>
        <div className="e">e</div> */}
        {/* <DrawerComponent /> */}
        {/* <DealsSection /> */}
      </div>
    </>
  );
}

export default DiscoveryPage;
