import React from "react";
import CocktailList from "../components/cocktail/CocktailList";
import InputSearch from "../components/input/InputSearch";
import "../pages/homepage.css";

const Homepage = () => {
  return (
    <div className="container container_homepage">
      <InputSearch></InputSearch>
      <CocktailList></CocktailList>
      {/* <h2>Cocktails</h2> */}
    </div>
  );
};

export default Homepage;
