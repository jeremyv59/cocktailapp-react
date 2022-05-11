import React from "react";
import "../cocktail/cocktail-detail-item.css";

const CocktailDetailItem = ({ itemName, value }) => {
  return (
    <div className="container_detail_item">
      <p className="item_name">{`${itemName} :`}</p>
      <p className="item_value">
        {value.length > 70 ? value.substring(0, 70) + "..." : value}
      </p>
    </div>
  );
};

export default CocktailDetailItem;
