import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App.jsx";
import { CartProvider } from "./cartContext";
import { ThemeProvider } from "./themeContext";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
