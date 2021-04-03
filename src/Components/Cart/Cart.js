import { useCart } from "../../cartContext";
import { ShowItem } from "../ShowItem";

export function Cart() {
  const { itemsInCart } = useCart();

  return (
    <div className="container">
      <h1>Cart</h1>
      <div>
        <ul className="flex flex-wrap mg-sm">
          {itemsInCart.map((item) => (
            <div>
              <li key={item.item.id}>
                <ShowItem item={item.item} />
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
