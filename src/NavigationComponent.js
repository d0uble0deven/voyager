import React, { useState, useEffect, useRef } from "react";
import "./NavigationComponent.css";
import { HashLink } from "react-router-hash-link";
import DealDetailsPage from "./pages/DealDetailsPage";
import PlanningPage from "./pages/PlanningPage";
import DiscoveryPage from "./pages/DiscoveryPage";

function NavigationComponent() {
  const [activeNode, setActiveNode] = useState("");
  const changePage = (e) => {
    setActiveNode(e.target.innerText);
  };

  // function ScrollToTop() {
  //   let { hash } = useLocation();
  //   useEffect(() => {
  //     if (hash) {
  //       const element = document.querySelector(`.${hash.slice(1)}`);
  //       if (element) {
  //         element.scrollIntoView({ behavior: "smooth" });
  //       }
  //     }
  //   }, [hash]);

  //   return null;
  // }

  return (
    <>
      {/* <ScrollToTop /> */}
      <nav className="nav" onClick={(e) => changePage(e)}>
        <div className="nav-center">
          <ul className="nav-links">
            <HashLink to="/">
              <h1 className="title condiment-regular">Voyager</h1>
            </HashLink>
            <li id={`${activeNode === "PlanningPage" ? "selected" : ""}`}>
              <HashLink to="/PlanningPage">Plan</HashLink>
            </li>
            <li id={`${activeNode === "DealDetailsPage" ? "selected" : ""}`}>
              <HashLink to="/DealDetailsPage">DealDetails</HashLink>
            </li>
            <li id={`${activeNode === "TripHistoryPage" ? "selected" : ""}`}>
              <HashLink to="/TripHistoryPage">Trip History</HashLink>
            </li>
            <li id={`${activeNode === "DiscoveryPage" ? "selected" : ""}`}>
              <HashLink to="/">Discovery</HashLink>
            </li>
            {/* <li id={`${activeNode === "Explore" ? "selected" : ""}`}>
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
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavigationComponent;
