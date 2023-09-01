import React from 'react'
import "./Navbar.css"
import { BsCart4 } from "react-icons/bs";


const Navbar = () => {
    const navItems = ["collection", "men", "women", "about", "contact"]
    const links = navItems.map((items, index) => {
      return  <p key={index} className='links'>{items}</p>
    })
  return (
    <nav className='navbar'>
        <div className='title-links-cont'>
            <h1 className='shop-name'>sneakers</h1>
            {links}
        </div>
        <div className='cart-img-holder'>
          <div className='cart-holder'>
            <BsCart4  className='cart' />
          </div>
          <div className='img-holder'>
          </div>
        </div>
    </nav>
  )
}

export default Navbar