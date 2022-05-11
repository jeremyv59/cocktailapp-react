import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../cocktail/cocktail-details-page.css";
import { ArrowLeftOutlined } from "@ant-design/icons";
import CocktailDetailItem from "./CocktailDetailItem";

const CocktailDetailsPage = () => {
  const location = useLocation();

  const [cocktailDetails, setCocktailDetails] = useState();
  const [loading, setLoading] = useState(true);

  const getCocktailDetails = async () => {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${location.state.id}`
      );
      setCocktailDetails(response.data);
    } catch (err) {
      setCocktailDetails(null);
    } finally {
      setLoading(false);
    }
  };

  const getIngredientsToDisplay = (obj) => {
    let finalIngredients = [];
    let separator = ", ";

    for (const property in obj) {
      if (
        property.substring(0, 13) === "strIngredient" &&
        obj[property] !== null
      ) {
        finalIngredients.push(obj[property]);
      }
    }
    return finalIngredients.join(", ");
  };

  useEffect(() => {
    getCocktailDetails();
  }, []);

  return (
    <div className="container container_details">
      <button className="back_button">
        <ArrowLeftOutlined></ArrowLeftOutlined>
        Retour à l'accueil
      </button>
      <h2 className="drink_name">
        {!loading ? cocktailDetails.drinks[0].strDrink : null}
      </h2>
      {!loading ? (
        <div className="container_content">
          <div className="content_image">
            <img
              className="image"
              alt=""
              src={cocktailDetails.drinks[0].strDrinkThumb}
            ></img>
          </div>
          <div className="content_desc">
            {console.log("cockt", cocktailDetails)}
            <CocktailDetailItem
              itemName="Nom"
              value={cocktailDetails.drinks[0].strDrink}
            ></CocktailDetailItem>
            <CocktailDetailItem
              itemName="Catégorie"
              value={cocktailDetails.drinks[0].strCategory}
            ></CocktailDetailItem>
            <CocktailDetailItem
              itemName="Info"
              value={
                cocktailDetails.drinks[0].strAlcoholic === "Alcoholic"
                  ? "Alcolisé"
                  : "Non alcolisé"
              }
            ></CocktailDetailItem>
            <CocktailDetailItem
              itemName="Verre"
              value={cocktailDetails.drinks[0].strGlass}
            ></CocktailDetailItem>
            <CocktailDetailItem
              itemName="Préparation"
              value={cocktailDetails.drinks[0].strInstructions}
            ></CocktailDetailItem>
            <CocktailDetailItem
              itemName="Ingrédients"
              value={getIngredientsToDisplay(cocktailDetails.drinks[0])}
            ></CocktailDetailItem>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CocktailDetailsPage;
