import React from 'react';
import Logo from '../assets/pizzaLogo.png';
import {Link} from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="leftSide">
        <img src={Logo} alt='PizzaLogo'/>
      </div>
      <div className="title">
        <h2>PAUL'S PIZZA</h2>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Header;
