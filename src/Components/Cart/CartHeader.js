import { useCart } from "../../cartContext";

export function CartHeader() {
  const { itemsInCart } = useCart();
  return (
    <p>
      <b> Items in cart {itemsInCart.length} </b>
    </p>
  );
}
