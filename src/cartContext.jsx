import React, { useContext, useState } from "react";

const axios = { get: ()=> {},post: ()=>{}}

export const CartContext = React.createContext();


export function CartProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [itemsInCart, setItemsInCart] = useState([]);

  // useEffect(() => {
  //   setLoading(true);
  //   axios.get("/api/users").then((response) => {
  //     setItemsInCart(response.data.item);
  //     setLoading(false);
  //   });
  // }, []);

 
  function saveItemsInCart() {
    setLoading(true);
    axios.post("/save-to-cart").then(response=>{
      if(response.ok === true){
        setItemsInCart(response.data.cartItem)
        setLoading(false);
      }
    })
  }

  return (
    <CartContext.Provider value={{ itemsInCart, setItemsInCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
