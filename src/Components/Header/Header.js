import React from "react";
import "../../styles/Header/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Avalanche</h1>
      </div>
      <div className="links">
        <Link to="/">
          <button className="header-button">Home</button>
        </Link>
        <Link to="/authentication">
          <button className="header-button">Get Started</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
