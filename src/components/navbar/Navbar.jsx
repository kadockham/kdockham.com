import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css';
import logo from '../../assets/logo2.png';

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#socials">Contact Me</a></p>
  <p><a href="#wkdock">About Me</a></p>
  <p><a href="#addInfo">Additional Info</a></p>
  <p><a href="#blog">Projects</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="kdock__navbar">
      <div className="kdock__navbar-links">
        <div className="kdock__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="kdock__navbar-links_container">
          <Menu />
        </div>
      </div>
      {/*<div className="kdock__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>*/}
      <div className="kdock__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className="kdock__navbar-menu_container scale-up-center">
            <div className="kdock__navbar-menu_container-links">
              <Menu />
              {/*<div className="kdock__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
        </div>*/}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar