import { useState, useEffect, useRef } from "react";
import { debounce } from 'lodash';

import './css/Navbar.css';
import logo from './icons/mizata-logo.png';

const Navbar = ({}) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="oten" />
        <p> izata Corp.</p>
      </div>
    </nav>
  );
};

export default Navbar;
