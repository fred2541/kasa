import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import './style/main.scss';
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import FicheLogement from "./pages/fiche-logement";
import APropos from "./pages/a-propos";
import Error404 from "./pages/404";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" Component={Home}></Route>
        <Route path="/logement" Component={FicheLogement}></Route>
        <Route path="/about" Component={APropos}></Route>
        <Route path="*" Component={Error404}></Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
