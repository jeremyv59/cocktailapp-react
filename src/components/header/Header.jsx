import React from "react";
import { Link } from "react-router-dom";
import "../header/header.css";

const Header = () => {
  return (
    <header>
      <h2 className="app_title">CocktailAPP</h2>
      {/* <Link>Accueil</Link>
      <Link>A propos</Link> */}
      <div className="container_links">
        <p className="link_item">Accueil</p>
        <p className="link_item">A propos</p>
      </div>
    </header>
  );
};

export default Header;
