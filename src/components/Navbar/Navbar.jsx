import React, { useRef } from "react";
import "./Navbar.css";
import { BsCart4 } from "react-icons/bs";
import Checkout from "../cartCheckout/Checkout";

const Navbar = ({ cartItems, quantity, price }) => {
  const modalRef = useRef(null);

  const openModal = () => {
    // Access and manipulate the modal DOM element
    if (modalRef.current) {
      modalRef.current.style.display = "block";
    }
  };

  const closeModal = () => {
    // Access and manipulate the modal DOM element
    if (modalRef.current) {
      modalRef.current.style.display = "none";
    }
  };

  const navItems = ["collection", "men", "women", "about", "contact"];
  const links = navItems.map((items, index) => {
    return (
      <p key={index} className="links">
        {items}
      </p>
    );
  });
  return (
    <nav className="navbar">
      <div className="title-links-cont">
        <h1 className="shop-name">sneakers</h1>
        {links}
      </div>
      <div className="cart-img-holder">
        <div className="cart-holder">
          <div className="cart-lenght">{quantity}</div>
          <BsCart4 className="cart" onClick={openModal} />
          <Checkout
            closeModal={closeModal}
            modalRef={modalRef}
            cartItems={cartItems}
            price={price}
            quantity={quantity}
          />
        </div>
        <div className="img-holder"></div>
      </div>
    </nav>
  );
};

export default Navbar;
