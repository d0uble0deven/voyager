import React, { useState, useEffect, useRef } from "react";
import "./NavigationComponent.css";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import DealDetailsPage from "./pages/DealDetailsPage";
import PlanningPage from "./pages/PlanningPage";

function NavigationComponent() {
  const [activeNode, setActiveNode] = useState("");
  const changePage = (e) => {
    setActiveNode(e.target.innerText);
  };

  function ScrollToTop() {
    let { hash } = useLocation();
    useEffect(() => {
      if (hash) {
        const element = document.querySelector(`.${hash.slice(1)}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [hash]);

    return null;
  }

  return (
    <>
      <ScrollToTop />
      <nav className="nav" onClick={(e) => changePage(e)}>
        <div className="nav-center">
          <ul className="nav-links">
            <HashLink to="#DealDetailsPage">
              <h1 className="title condiment-regular">Voyager</h1>
            </HashLink>
            <li id={`${activeNode === "Explore" ? "selected" : ""}`}>
              <HashLink to="#ExploreComponent">Explore</HashLink>
            </li>
            <li id={`${activeNode === "Discover" ? "selected" : ""}`}>
              <HashLink to="#DiscoverComponent">Discover</HashLink>
            </li>
            <li id={`${activeNode === "Places" ? "selected" : ""}`}>
              <HashLink to="#PlacesComponent">Places</HashLink>
            </li>
            <li id={`${activeNode === "Stays" ? "selected" : ""}`}>
              <HashLink to="#StaysComponent">Stays</HashLink>
            </li>
            <li id={`${activeNode === "Trips" ? "selected" : ""}`}>
              <HashLink to="#TripsComponent">Trips</HashLink>
            </li>
            <li id={`${activeNode === "Planning" ? "selected" : ""}`}>
              <HashLink to="#PlanningPage">Planning</HashLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
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

export default NavigationComponent;
