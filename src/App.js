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
        <Route path="/two" element={<DiscoveryPage />} />
        <Route path="/" element={<DiscoveryPage />} />
      </Routes>
    </>
  );
}

export default App;
