import React from "react";

import { NavLink } from "react-router-dom";

import { FaInstagram } from "react-icons/fa";

import "./styles.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar-inner">
                    <NavLink to="/">TETSUYA NARA</NavLink>
                    <ul>
                        <li>
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog">
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/bands">
                                Bands
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/news">
                                News
                            </NavLink>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/tetsuya_nara/" target="_blank" rel="noreferrer">
                                <div className="react-icon"><FaInstagram /></div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;