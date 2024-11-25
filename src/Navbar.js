import React from "react";
import "./NavBar.css";

import TestDataButton from "./TestDataButton";
import FlightInspoComponent from "./FlightInspoComponent";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <FlightInspoComponent />
        <TestDataButton />
        {/* <div className="navbar-left">
          <a href="/" className="logo">
            Home
          </a>
        </div>
        <div className="navbar-center">
          <ul className="nav-links">
            <li>
              <a href="/DealDetailsPage">DealDetailsPage</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <a href="/cart" className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">Cart (0)</span>
          </a>
          <a href="/account" className="user-icon">
            <i className="fas fa-user"></i>
          </a>
        </div> */}
      </nav>
    </>
  );
}

export default NavBar;
