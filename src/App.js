import React from "react";
import Header from "./components/header/Header";
import { AppContext } from "./context/AppContext";

function App() {
  return (
    <React.Fragment>
      <AppContext.Provider value={null}>
        <Header></Header>
      </AppContext.Provider>
    </React.Fragment>
  );
}

export default App;
