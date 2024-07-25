import React, { useState, useEffect, useRef, useCallback } from "react";

import { NavLink } from "react-router-dom";

import useWindowSize from "hooks/useWindowSize";

import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { VscClose } from "react-icons/vsc";

import "./styles.scss";
import NavList from "./NavList";

const navbarHeight = 88;

const Navbar = () => {
  const isMobile = useWindowSize();

  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [scrolled, setScrolled] = useState(false);
  
  const elementRef = useRef<HTMLDivElement | null>(null);

  const toggleIsOpen = useCallback((): void => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (elementRef.current && !elementRef.current.contains(event.target as Node)) {
        toggleIsOpen();
      }
    };

    if (isOpen) {
      setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
      }, 0);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, toggleIsOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - navbarHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <React.Fragment>
          <div className={`navbar mobile ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
              <div className="navbar-inner">
                <NavLink to="/" onClick={() => setIsOpen(false)}>TETSUYA NARA</NavLink>
                <div role="button" className="nav-button react-icon" onClick={() => toggleIsOpen()}>
                  <HiOutlineBars3CenterLeft />
                </div>
              </div>
            </div>
          </div>
          <div className={`mobile-nav-menu ${isOpen ? 'open' : ''}`} ref={elementRef}>
            <div className="container">
              <div className="menu-top">
                <div role="button" className="nav-button react-icon" onClick={() => toggleIsOpen()}>
                  <VscClose />
                </div>
              </div>
              <div className="menu-inner">
                <NavList onClick={() => toggleIsOpen()} />
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
          <div className="container">
            <div className="navbar-inner">
              <NavLink to="/">TETSUYA NARA</NavLink>
              <NavList onClick={() => toggleIsOpen()} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;