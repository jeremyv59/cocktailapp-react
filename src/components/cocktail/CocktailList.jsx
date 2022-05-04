import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import "../cocktail/cocktail-list.css";
import CocktailCard from "./CocktailCard";
import { Spin, Space } from "antd";

const CocktailList = () => {
  const context = useContext(AppContext);

  return (
    <React.Fragment>
      <ul className="container_drink_list">
        {!context.loading
          ? context.cocktails.drinks.map((drink) => {
              return (
                <CocktailCard
                  key={drink.idDrink}
                  cocktailName={drink.strDrink}
                  cocktailImage={drink.strDrinkThumb}
                  cocktailGlass={drink.strGlass}
                  alcohol={drink.strAlcoholic}
                ></CocktailCard>
              );
            })
          : null}
      </ul>
    </React.Fragment>
  );
};

export default CocktailList;
