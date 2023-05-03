import React from "react";
import { BrowserRouter } from "react-router-dom";
import PublicRouter from './routeur/index'

import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <PublicRouter />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;