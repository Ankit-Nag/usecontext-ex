import { useCart } from "../cartContext";
import { products } from "../Data/Products";

export function ProductListing() {
  const { setItemsInCart } = useCart();
  return (
    <div>
      {" "}
      {products.map((item) => (
        <div key={item.id} className="card mg-1">
          <h3>{item.name}</h3>
          <p>₹ {item.price}</p>
          <button
            className="btn btn-primary"
            onClick={() => setItemsInCart((items) => [...items, item])}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
