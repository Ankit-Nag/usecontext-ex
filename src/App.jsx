import "./index.css";
import { Cart } from "./Components/Cart";
import { CartHeader } from "./Components/CartHeader";
import { ProductListing } from "./Components/ProductListing";
import { Checkout } from "./Components/Checkout";
import { useState } from "react";
import { useTheme } from "./themeContext";

export default function App() {
  const { theme, changeTheme } = useTheme();
  const [route, setRoute] = useState("products");

  return (
    <div
      className="App"
      style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
    >
      <div className="flex flex-center flex-col">
        <button
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            backgroundColor: "transparent",
            fontSize: "1.5rem",
          }}
          className="btn"
          onClick={() => {
            changeTheme(theme.name);
            console.log({ theme });
          }}
        >
          {theme.name === "dark" ? "🔆" : "🌙"}
        </button>
        <h1 className="app-header">
          e<span style={{ color: "var(--green)" }}>Commerce</span>
        </h1>
        <button
          className={
            route === "products" ? "btn btn-primary" : "btn btn-secondary"
          }
          onClick={() => setRoute("products")}
        >
          Products
        </button>

        <button
          className={route === "cart" ? "btn btn-primary" : "btn btn-secondary"}
          onClick={() => setRoute("cart")}
        >
          Cart
        </button>

        <button
          className={
            route === "wishlist" ? "btn btn-primary" : "btn btn-secondary"
          }
          onClick={() => setRoute("wishlist")}
        >
          Wishlist
        </button>

        <button
          className={
            route === "checkout" ? "btn btn-primary" : "btn btn-secondary"
          }
          onClick={() => setRoute("checkout")}
        >
          Checkout
        </button>
      </div>

      <div className="body">
        <CartHeader />
        {route === "cart" && <Cart />}
        {route === "products" && <ProductListing />}
        {route === "checkout" && <Checkout />}
      </div>
    </div>
  );
}
