import React from "react";
import { Link } from "react-router-dom";
import  LogoShoe  from "../assets/logoshoe.jpg";
import   '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main">
        <img src={LogoShoe} alt="logo" />
        <div className="mainLink">
          <Link to="/">Anasayfa</Link>
          <Link to="/products">Urunler</Link>
          <Link to="/about">Hakkimizda</Link>
          <Link to="/contact">Iletisim</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
