import React from 'react';
import logo from './images/logo/logo.jpg';
import './App.css';

function Header() {
  return (
    <>
    <header class="header">
<ul>
  <li><a href="#home" class="active">Home</a></li>
  <li><a href="#plants">Plants</a></li>
  <li><a href="#tools">Tools</a></li>
  <li><a href="#gardenCare">Garden Care</a></li>
  <li style='float:right'><a href="#basket">Basket</a></li>
</ul>

      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </header>
    </>
  );

}

export default Header;
