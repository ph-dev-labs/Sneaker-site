import React from "react";
import "./Checkout.css";

const Checkout = ({ modalRef, closeModal, cartItems }) => {
  // Calculate the total price of all items in the cart
  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  // Render each item in the cart with quantity and subtotal
  const cartItemsList = cartItems.map((item) => (
    <div key={item.id} className="cart-item">
      <div className="item-details">
        <span className="item-name text">{item.item}</span>
        <span className="item-price text">${item.price}</span>
      </div>
      <div className="item-quantity">
        <span className="text-1">Quantity: {item.quantity}</span>
        <span className="text-1">Subtotal: ${item.price * item.quantity}</span>
      </div>
    </div>
  ));

  return (
    <div className="cart-checkout-item" ref={modalRef}>
      {/* Display cart items, total, and checkout button */}
      <div className="cart-items text">{cartItemsList}</div>
      <div className="cart-total">
        <span className="text">Total: ${ total.toFixed(2)}</span>
      </div>
      <button className="checkout-button" onClick={closeModal}>
        Close
      </button>
    </div>
  );
};

export default Checkout;
