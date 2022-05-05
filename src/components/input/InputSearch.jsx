import React, { useContext } from "react";
import "../input/input-search.css";
import { Input, Space } from "antd";
import { AppContext } from "../../context/AppContext";

const InputSearch = () => {
  const context = useContext(AppContext);

  const onSearch = (e) => {
    context.setSearchValue(e.target.value);
    console.log("SEARCH", e.target.value);
  };
  console.log("ctx", context.searchValue);

  return (
    <div className="input_container">
      <label className="input_label">Cherchez votre cocktail préféré !</label>
      <Input
        onChange={(e) => onSearch(e)}
        type="search"
        className="input_search"
        placeholder="Rechercher"
      ></Input>
    </div>
  );
};

export default InputSearch;
