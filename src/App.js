import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import { AppContext } from "./context/AppContext";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import axios from "axios";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

function App() {
  const [cocktails, setCocktails] = useState();
  const [loading, setLoading] = useState(true);

  const getCocktails = async () => {
    try {
      const response = await axios.get(url);
      setCocktails(response.data);
    } catch (err) {
      setCocktails(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCocktails();
  }, []);

  return (
    <React.Fragment>
      <AppContext.Provider
        value={{
          cocktails,
          loading,
        }}
      >
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Homepage></Homepage>}></Route>
            <Route path="/about" element={<About></About>}></Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </React.Fragment>
  );
}

export default App;
