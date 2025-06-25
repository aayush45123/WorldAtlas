import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { CountryDataProvider } from "./context/countryData.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <CountryDataProvider>
      <App />
    </CountryDataProvider>
  </Router>
);
