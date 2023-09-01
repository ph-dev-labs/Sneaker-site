import React from "react";
import image from "../../assets/image-product-1.jpg";
import image1 from "../../assets/image-product-1-thumbnail.jpg"
import image2 from "../../assets/image-product-2-thumbnail.jpg"
import image3 from "../../assets/image-product-3-thumbnail.jpg"
import image4 from "../../assets/image-product-4-thumbnail.jpg"
import { BsCart4 } from "react-icons/bs";
import Holder from "../../components/Holder/Holder";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="descrpt-sec">
        <div className="shoe-img-holder">
          <img src={image} alt="shop item" className="desc-img" />
          <div className="preview-holder">
            <Holder image={image1} />
            <Holder image={image2} />
            <Holder image={image3} />
            <Holder image={image4} />
          </div>
        </div>
        <div className="descrpt">
          <h3 className="title">sneaker company</h3>
          <h2 className="desc2">full limited edition sneakers</h2>
          <p className="desc-details">
            These low-profile sneakers are are your perfect casual wear
            companion. Featuring a durable outer sole, they'll withstand
            everything the weather can offer
          </p>
          <div className="price-section">
            <div className="price-holder">
              <h2 className="desc2">$125.00</h2>
              <div className="discount-holder">
                <span className="discount">50%</span>
              </div>
            </div>
            <p className="frm-price">$250</p>
          </div>
          <div className="cart-btn-cont">
            <div className="cart-logic-cont">
              <p className="cart-symb">-</p>
              <p className="cart-state">3</p>
              <p className="cart-symb">+</p>
            </div>
            <div className="btn">
              <div className="flex">
                <BsCart4 className="btn-cart-icon" />
                <p className="btn-text">Add to cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;