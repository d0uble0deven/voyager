import React from "react";
import "./App.css";

import GlobeComponent from "./GlobeComponent";
import NavigationComponent from "./NavigationComponent";
import NavBar from "./Navbar";
import DealsSection from "./DealsSection";
// import DrawerComponent from "./DrawerComponent";
import DealDetailsPage from "./pages/DealDetailsPage";
import PlanningPage from "./pages/PlanningPage";

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
          <h3 className="sub-header ">New Experiences</h3>
          <ExploreComponent />
        </div>
        <div className="DiscoverComponent">
          <h3 className="sub-header ">Best Deals</h3>
          <DiscoverComponent />
        </div>
        {/* <div className="globe-container">
          globe-container
          <GlobeComponent />
          </div> */}
        <div className="PlacesComponent">
          <h3 className="sub-header ">Unexplored Places</h3>
          <PlacesComponent />
        </div>
        <div className="StaysComponent">
          <h3 className="sub-header ">Great Stays</h3>
          <StaysComponent />
        </div>
        <div className="TripsComponent">
          <h3 className="sub-header ">Popular Trips</h3>
          <TripsComponent />
        </div>
        {/* <div className="TripsComponent">
          PlanningPage
          <PlanningPage />
        </div> */}
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
