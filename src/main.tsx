import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

import { BrowserRouter } from "react-router-dom";

import { MovieProvider } from "./components/MovieContext";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieProvider>
        <App />
      </MovieProvider>
    </BrowserRouter>
  </React.StrictMode>
);