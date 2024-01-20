import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button"; // Adjust the import path

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <i className="fa-solid fa-asterisk fa-spin icon"></i>
            Little Cub Cottage
          </Link>
        </div>

        <div className="Menu">  
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/entertainment" className="nav-links">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/restaurants" className="nav-links">
                Restaurants
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/map" className="nav-links">
                Map
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/guestbook" className="nav-links">
                Guestbook
              </Link>
            </li>
          </ul>
          <Button buttonStyle="btn--outline">Contact Us</Button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
