import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import { AppContext } from "./context/AppContext";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import axios from "axios";
import CocktailDetailsPage from "./components/cocktail/CocktailDetailsPage";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

function App() {
  const [cocktails, setCocktails] = useState();
  const [cocktailsFiltered, setFilteredCocktails] = useState();
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState();

  const getCocktails = async () => {
    try {
      const response = await axios.get(url);
      setCocktails(response.data);
      setFilteredCocktails(response.data);
    } catch (err) {
      setCocktails(null);
      setFilteredCocktails(null);
    } finally {
      setLoading(false);
    }
  };

  const getFilteredCocktails = async () => {
    let finalArray = {
      drinks: [],
    };

    finalArray.drinks = cocktails.drinks.filter((drink) =>
      drink.strDrink.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredCocktails(finalArray);
  };

  useEffect(() => {
    getCocktails();
  }, []);

  useEffect(() => {
    getFilteredCocktails();
  }, [searchValue]);

  return (
    <React.Fragment>
      <AppContext.Provider
        value={{
          cocktailsFiltered,
          loading,
          setSearchValue,
        }}
      >
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Homepage></Homepage>}></Route>
            <Route
              path="/cocktail/:id"
              element={<CocktailDetailsPage></CocktailDetailsPage>}
            ></Route>
            <Route path="/about" element={<About></About>}></Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </React.Fragment>
  );
}

export default App;
