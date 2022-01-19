import { createContext, useContext, useReducer } from "react";
import data from "../db.json";
import { cartReducer, productReducer } from "./Reducer";

const Cart = createContext();
const Context = ({ children }) => {
  const products = data.map((item) => ({
    id: item.title,
    title: item.title,
    price: item.price,
    image: item.imageUrl,
    category: item.category,
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;
export const CartState = () => {
  return useContext(Cart);
};
