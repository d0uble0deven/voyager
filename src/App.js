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
          New Experiences
          <ExploreComponent />
        </div>
        <div className="DiscoverComponent">
          Cheap Deals
          <DiscoverComponent />
        </div>
        <div className="globe-container">
          globe-container
          {/* <GlobeComponent /> */}
        </div>
        <div className="PlacesComponent">
          Unexplored Places
          <PlacesComponent />
        </div>
        <div className="StaysComponent">
          Great Stays
          <StaysComponent />
        </div>
        <div className="TripsComponent">
          Popular Trips
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
