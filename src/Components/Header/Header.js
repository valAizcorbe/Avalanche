import React from "react";
import "../../styles/Header/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>Avalanche</h1>

      <Link to="/">
        <button className="header-button">Home</button>
      </Link>
      <Link to="/register">
        <button className="header-button">Register</button>
      </Link>
    </header>
  );
}

export default Header;
