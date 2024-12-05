import React, { useState, useEffect } from "react";
import "./App.css";

import GlobeComponent from "./GlobeComponent";
import NavigationComponent from "./NavigationComponent";
import NavBar from "./Navbar";
import DealsSection from "./DealsSection";
// import DrawerComponent from "./DrawerComponent";
import DealDetailsPage from "./pages/DealDetailsPage";
import PlanningPage from "./pages/PlanningPage";
import DiscoveryPage from "./pages/DiscoveryPage";
import TripHistoryPage from "./pages/TripHistoryPage";

import CardCarousel from "./Organisms/CardCarousel";

import DiscoverMockData from "./MockData/DiscoverMockData";

import { Route, Routes, Link, useLocation } from "react-router-dom";

function App() {
  return (
    <>
      {/* <DiscoveryPage /> */}
      <Routes>
        <Route path="/DealDetailsPage" element={<DealDetailsPage />} />
        <Route path="/PlanningPage" element={<PlanningPage />} />
        <Route path="/TripHistoryPage" element={<TripHistoryPage />} />
        {/* <Route path="/" /> */}
        <Route path="/" element={<DiscoveryPage />} />

        {/* <Route path="/" />
        <Route path="#DealDetailsPage" element={<DealDetailsPage />} />
        <Route path="#ExploreComponent" element={<ExploreComponent />} />
        <Route path="#DiscoverComponent" element={<DiscoverComponent />} />
        <Route path="#PlacesComponent" element={<PlacesComponent />} />
        <Route path="#StaysComponent" element={<StaysComponent />} />
        <Route path="#TripsComponent" element={<TripsComponent />} />
        <Route path="#PlanningPage" element={<PlanningPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
