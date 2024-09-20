import { useState, useEffect, useRef } from "react";
import { debounce } from 'lodash';

import './Navbar.css';
import logo from './mizata-logo.png';

const Navbar = ({}) => {
  return (
    <nav>
      <div class="logo">
        <img src={logo} alt="oten" />
        <p> izata Corp.</p>
      </div>
      <button class="button"> +New item </button>
    </nav>
  );
};

export default Navbar;
