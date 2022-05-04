import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import { AppContext } from "./context/AppContext";
import About from "./pages/About";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <React.Fragment>
      <AppContext.Provider value={null}>
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
