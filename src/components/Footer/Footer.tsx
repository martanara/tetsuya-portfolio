import React from "react";

import { FaInstagram } from "react-icons/fa";

import "./styles.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="container">
                    <div className="footer-inner">
                        <a href="https://www.instagram.com/tetsuya_nara/" target="_blank" rel="noreferrer">
                            <div className="react-icon"><FaInstagram /></div>
                        </a>
                        <p>&copy; 2024 Tetsuya Nara. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;