import { useCart } from "../cartContext";
import {ShowItem} from "./ShowItem"

export function Cart() {
  const { itemsInCart } = useCart();
  return (
    <div className="mg-sm">
      <h1>Cart</h1>
      <div>
        <ul className="flex flex-wrap">
          {itemsInCart.map((item) => (
            <div>
              <li key={item.id}>
                <ShowItem item={item} />
              </li>
            </div>
          )
          )}
        </ul>
      </div>
    </div>
  );
}
