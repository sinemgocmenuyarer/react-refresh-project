import { createContext } from "react";

// This CardContext will be a react component in the end so we start with capital letter.
export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  onUpdateCartItemQuantity: () => {},
});
