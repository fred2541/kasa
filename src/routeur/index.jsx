import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import '../style/main.scss';

import Home from "../pages/home";
import FicheLogement from "../pages/fiche-logement";
import APropos from "../pages/a-propos";
import Error404 from "../pages/404";

import Header from "../components/header";
import Footer from "../components/footer";


const PublicRouter = () => {
 
    return (
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route path="/logement" Component={FicheLogement}></Route>
          <Route path="/about" Component={APropos}></Route>
          <Route path="*" Component={Error404}></Route>
          <Route element={<Footer />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
  
export default PublicRouter