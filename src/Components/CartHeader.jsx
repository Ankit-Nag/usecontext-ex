import { useCart } from "../cartContext";

export function CartHeader() {
  const { itemsInCart } = useCart();
  return (
    <div>
      <h3 className="mg-l-1"> Items in Cart: {itemsInCart.length}</h3>
    </div>
  );
}
