import React from "react";
import "../cocktail/cocktail-detail-item.css";

const CocktailDetailItem = ({ itemName, value }) => {
  return (
    <div className="container_detail_item">
      <p className="item_name">{`${itemName} :`}</p>
      <p className="item_value">{value}</p>
    </div>
  );
};

export default CocktailDetailItem;
