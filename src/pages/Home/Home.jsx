import React from "react";
import Auth from "../../firebase/firebase";
import image from "../../assets/image-product-1.jpg";
import image1 from "../../assets/image-product-1-thumbnail.jpg";
import image2 from "../../assets/image-product-2-thumbnail.jpg";
import image3 from "../../assets/image-product-3-thumbnail.jpg";
import image4 from "../../assets/image-product-4-thumbnail.jpg";
import { BsCart4 } from "react-icons/bs";
import Holder from "../../components/Holder/Holder";
import "./Home.css";
const Home = ({
  addToCart,
  item,
  price,
  handleDecreament,
  handleIncreament,
  quantity,
}) => {
  const imageArr = [image1, image2, image3, image4];
  const mapImage = imageArr.map((images, index) => {
    return <Holder image={images} key={index} />;
  });


  const handleSigninInWithGooogle = () => {
    Auth()
  }

  return (
    <div className="home">
      <div className="descrpt-sec">
        <div className="shoe-img-holder">
          <img src={image} alt="shop item" className="desc-img" />
          <div className="preview-holder">{mapImage}</div>
        </div>
        <div className="descrpt">
          <h3 className="title">sneaker company</h3>
          <h2 className="desc2">{item}</h2>
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
            <p className="frm-price">{`$${price}`}</p>
          </div>
          <div className="cart-btn-cont">
            <div className="cart-logic-cont">
              <p className="cart-symb" onClick={handleDecreament}>
                -
              </p>
              <p className="cart-state">{quantity}</p>
              <p className="cart-symb" onClick={handleIncreament}>
                +
              </p>
            </div>
            <div className="btn">
              <div className="flex">
                <BsCart4 className="btn-cart-icon" />
                <p
                  className="btn-text"
                  onClick={handleSigninInWithGooogle}
                >
                  Add to cart
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
