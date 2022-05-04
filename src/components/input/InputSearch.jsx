import React from "react";
import "../input/input-search.css";
import { Input, Space } from "antd";

const InputSearch = () => {
  //   const onSearch = (value) => {
  //     console.log("value search", value);
  //   };

  return (
    <div className="input_container">
      <label className="input_label">Cherchez votre cocktail préféré !</label>
      <Input className="input_search" placeholder=""></Input>
    </div>
  );
};

export default InputSearch;
