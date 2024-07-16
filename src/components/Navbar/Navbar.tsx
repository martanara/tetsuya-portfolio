import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import "./styles.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <NavLink to="/">Tetsuya Nara</NavLink>
            </div>
        </div>
    );
};

export default Navbar;