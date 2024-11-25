import React from "react";
import "./App.css";

import GlobeComponent from "./GlobeComponent";
import NavigationComponent from "./NavigationComponent";
import NavBar from "./Navbar";
import DealsSection from "./DealsSection";
// import DrawerComponent from "./DrawerComponent";
import DealDetailsPage from "./pages/DealDetailsPage";

import ExploreComponent from "./ExploreComponent";
import DiscoverComponent from "./DiscoverComponent";
import PlacesComponent from "./PlacesComponent";
import StaysComponent from "./StaysComponent";
import TripsComponent from "./TripsComponent";

function App() {
  return (
    <>
      <div className="grid">
        <div className="side-bar-container">
          <div className="side-bar">
            <NavigationComponent />
          </div>
        </div>
        <div className="top-bar">
          <NavBar />
        </div>
        <div className="ExploreComponent">
          ExploreComponent
          <ExploreComponent />
        </div>
        <div className="DiscoverComponent">
          DiscoverComponent
          <DiscoverComponent />
        </div>
        <div className="globe-container">
          globe-container
          <GlobeComponent />
        </div>
        <div className="PlacesComponent">
          PlacesComponent
          <PlacesComponent />
        </div>
        <div className="StaysComponent">
          StaysComponent
          <StaysComponent />
        </div>
        <div className="TripsComponent">
          TripsComponent
          <TripsComponent />
        </div>
        {/* <div className="c">c</div>
        <div className="d">d</div>
        <div className="e">e</div> */}
        {/* <DrawerComponent /> */}
        {/* <DealsSection /> */}
      </div>
    </>
  );
}

export default App;
