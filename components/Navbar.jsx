import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { GiShoppingBag } from "react-icons/gi";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <div className="logo">
        <Link href="/">
          <div className="navbar-logo">
            <img src="/sahara.jpg" alt="hero" width={90} />
          </div>
        </Link>
      </div>
      <div className="nav-content">
        <p className="nav-content-p">
          <div className="content-p">
            <Link href="/ProductPage">Shop</Link>
          </div>
          <div className="content-p">
            <Link href="/Collection">Collection</Link>
          </div>
          <div className="content-p">
            <Link href="/About">About</Link>
          </div>
        </p>
        <button
          type="button"
          className="cart-icon"
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>

        {showCart && <Cart />}
      </div>
    </div>
  );
};

export default Navbar;
