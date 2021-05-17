import { Products } from "./Products";
import { useState, useEffect } from "react";
import { useCart } from "../cartContext";

export function ProductListing() {
//   const [counter, setCounter] = useState(0);
  const { setItemsInCart } = useCart();

  useEffect(() => () => console.log("bye"), []);

  return (
    <div className="container">
      <h1 
    //   onClick={() => setCounter((counter) => counter + 1)}
    >
        Products: 
        {/* {counter} */}
      </h1>
      <div className="grid-2">
        {Products.map((item) => (
          <div
            className="card mg-1 p-sm flex-col"
            key={item.id}
            style={{ paddingLeft: "1rem" }}
          >
            <h2>{item.name}</h2>
            <h2>₹{item.price}</h2>
            <button
              className="btn btn-secondary"
              onClick={() => setItemsInCart((items) => [...items, { item }])}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      ;
    </div>
  );
}
