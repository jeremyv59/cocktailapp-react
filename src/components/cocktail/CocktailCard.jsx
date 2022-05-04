import React from "react";
import "../cocktail/cocktail-card.css";
import { Card, Avatar, Button } from "antd";

const CocktailCard = ({
  cocktailName,
  cocktailGlass,
  cocktailImage,
  alcohol,
}) => {
  return (
    <Card className="card_item">
      <img alt="cocktail" src={cocktailImage}></img>
      <div className="container_desc">
        <h2 className="cocktail_name">{cocktailName}</h2>
        <p className="glass_name">{cocktailGlass}</p>
        <small className="small_title">
          {alcohol === "Alcoholic" ? "Alcolisé" : "Non Alcolisé"}
        </small>
        <br />
        <Button className="details_btn">Details</Button>
      </div>
    </Card>
  );
};

export default CocktailCard;
