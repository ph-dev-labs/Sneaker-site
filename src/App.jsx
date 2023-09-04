import React, { useReducer, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import "./App.css";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.item === action.payload.item
      );

      if (existingItemIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, cartItems: updatedCartItems };
      } else {
        return { ...state, cartItems: [...state.cartItems, action.payload] };
      }

    case "REMOVE_FROM_CART":
      const filteredCartItems = state.cartItems.filter(
        (item) => item.item !== action.payload.item
      );
      return { ...state, cartItems: filteredCartItems };
    default:
      return state;
  }
};

const initialState = {
  cartItems: [],
};

const App = () => {
  const [item, setItem] = useState("full limited edition sneakers");
  const [price, setPrice] = useState(125);
  const [quantity, setQuantity] = useState(0);
  const [cartState, dispatch] = useReducer(cartReducer, initialState);
  const handleIncreament = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreament = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = (item, price, quantity) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { item, price, quantity },
    });

    console.log(cartState.cartItems)
  };

  // Action to remove an item from the cart
  const removeFromCart = (item) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { item },
    });
  };
  return (
    <div>
      <Navbar cartItems={cartState.cartItems} />
      <Home
        addToCart={addToCart}
        item={item}
        price={price}
        quantity={quantity}
        handleDecreament={handleDecreament}
        handleIncreament={handleIncreament}
      />
    </div>
  );
};

export default App;
