import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./i18n";
import "./App.css";

// Components
import Home from "./components/Home";
import Consultation from "./components/Consultation";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultation" element={<Consultation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
