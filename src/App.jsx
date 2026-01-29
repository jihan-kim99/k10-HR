import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./i18n";
import "./App.css";

// Components
import Home from "./components/Home";
import Consultation from "./components/Consultation";
import RootRedirect from "./components/RootRedirect";
import LanguageWrapper from "./components/LanguageWrapper";
import LegacyRedirect from "./components/LegacyRedirect";

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootRedirect />} />

          {/* Handle legacy /consultation path: Redirect to localized version */}
          <Route path="/consultation" element={<LegacyRedirect path="/consultation" />} />

          <Route path="/:lang" element={<LanguageWrapper />}>
            <Route index element={<Home />} />
            <Route path="consultation" element={<Consultation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
