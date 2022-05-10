import React from "react";
import CocktailList from "../components/cocktail/CocktailList";
import InputSearch from "../components/input/InputSearch";
import "../pages/homepage.css";

const Homepage = () => {
  return (
    <div className="container container_homepage">
      <InputSearch></InputSearch>
      <h2 className="list_title">Cocktails</h2>
      <CocktailList></CocktailList>
    </div>
  );
};

export default Homepage;
