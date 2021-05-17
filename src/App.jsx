import "./index.css";
import { useState } from "react";
import { ProductListing } from "./Components/ProductListing";
import { Checkout } from "./Components/Checkout";
import { CartHeader } from "./Components/Cart/CartHeader";
import { Cart } from "./Components/Cart/Cart";
import { useTheme } from "./themeContext";

export default function App() {
  const { theme, changeTheme } = useTheme();
  const [route, setRoute] = useState("products");

  console.log(theme);

  return (
    <div
      className="App"
      style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
    >
      <div className="container flex flex-center flex-col">
        <h1 className="app-header green">eCommerce</h1>
        <button
          style={{position: "absolute", top: "1rem", right: "1rem", backgroundColor: "transparent", fontSize: "1.5rem"}}
          className="btn"
          onClick={() => changeTheme(theme.name)}
        >
          {theme.name === "dark" ? "🔆" : "🌙"}
        </button>
        <div>
          <button
            className={
              route === "products"
                ? "btn btn-primary mg-sm"
                : "btn btn-secondary mg-sm"
            }
            onClick={() => setRoute("products")}
          >
            Products
          </button>
          <button
            className={
              route === "cart"
                ? "btn btn-primary mg-sm"
                : "btn btn-secondary mg-sm"
            }
            onClick={() => setRoute("cart")}
          >
            Cart
          </button>
          <button
            className={
              route === "checkout"
                ? "btn btn-green mg-sm"
                : "btn btn-green-outline mg-sm"
            }
            onClick={() => setRoute("checkout")}
          >
            Checkout
          </button>
        </div>
        <div className="app-body">
          <CartHeader />
          {route === "checkout" && <Checkout />}
          {route === "cart" && <Cart />}
          {route === "products" && <ProductListing />}
        </div>
      </div>
    </div>
  );
}
