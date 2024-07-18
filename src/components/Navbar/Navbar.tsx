import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import useWindowSize from "hooks/useWindowSize";

import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { VscClose } from "react-icons/vsc";

import "./styles.scss";
import NavList from "./NavList";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const isMobile = useWindowSize();

  return (
    <div>
      {isMobile ? (
        <React.Fragment>
          <div className="navbar mobile">
            <div className="container">
              <div className="navbar-inner">
                <NavLink to="/">TETSUYA NARA</NavLink>
                <div role="button" className="nav-button react-icon" onClick={() => setIsOpen(!isOpen)}>
                  <HiOutlineBars3CenterLeft />
                </div>
              </div>
            </div>
          </div>
          <div className={`mobile-nav-menu ${isOpen ? 'open' : ''}`}>
            <div className="container">
              <div className="menu-top">
                <div role="button" className="nav-button react-icon" onClick={() => setIsOpen(!isOpen)}>
                <VscClose />
                </div>
              </div>
              <div className="menu-inner">
                <NavList />
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div className="navbar">
          <div className="container">
            <div className="navbar-inner">
              <NavLink to="/">TETSUYA NARA</NavLink>
              <NavList />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;