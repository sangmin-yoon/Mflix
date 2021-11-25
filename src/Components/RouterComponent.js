import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";

const RouterComponent = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tv" element={<TV />} />
      <Route path="/tv/popular" render={() => <h1>popular</h1>} />
      <Route path="/search" element={<Search />} />
    </Routes>
  </Router>
);
export default RouterComponent;
