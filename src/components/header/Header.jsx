import React from "react";
import { Link } from "react-router-dom";
import "../header/header.css";

const Header = () => {
  return (
    <header>
      <div className="container_nav">
        <h2 className="app_title">CocktailAPP</h2>
        <div className="container_links">
          <Link className="link_item" to="/">
            Accueil
          </Link>
          <Link className="link_item" to="/about">
            A propos
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
