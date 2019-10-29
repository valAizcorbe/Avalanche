import React from "react";
import "../../styles/Header/header.css";
import Account from "../Account/Account";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>Avalanche</h1>
      <Link to="/account">
        <button className="header-button">My Account</button>
      </Link>
      <Link to="/">
        <button className="header-button">Home</button>
      </Link>
    </header>
  );
}

export default Header;
