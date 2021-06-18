import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [itemsInCart, setItemsInCart] = useState([]);
  // const [loading, setLoading] = useState(false);

  // loading data on mount
  // useEffect(() => {
  //   fetch("/pizza-ayo-ri").then((pizza) => setItemsInCart(pizza));
  // }, []);

  // saving user data
  // function saveItemsInCart() {
  //   setLoading(true);
  // }

  return (
    <CartContext.Provider value={{ itemsInCart, setItemsInCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
