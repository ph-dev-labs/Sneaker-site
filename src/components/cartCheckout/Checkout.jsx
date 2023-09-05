import React from "react";
import "./Checkout.css";
const Checkout = ({ modalRef, closeModal, cartItems, price }) => {
  const cartItem = cartItems.map((item) => {
    return (
      <div className="cart-item">
        <span>{item.item}</span>
        <span>{item.price}</span>
      </div>
    );
  });

  return (
    <div className="cart-checkout-item" ref={modalRef}>
      {/* Display cart items, total, and checkout button */}
      <div className="cart-items">{/* List of cart items */}
         {cartItem}
      </div>
      <div className="cart-total">
        <span>Total: $00.00</span>
      </div>
      <button className="checkout-button" onClick={closeModal}>
        close
      </button>
    </div>
  );
};

export default Checkout;
