import React from "react";

import { NavLink } from "react-router-dom";

import { FaInstagram } from "react-icons/fa";

import "./styles.scss";

const NavList = () => (
	<ul className="nav-list">
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
			<NavLink to="/media">
				Media
			</NavLink>
		</li>
		<li>
			<NavLink to="/blog">
				Blog
			</NavLink>
		</li>
		<li>
			<a href="https://www.instagram.com/tetsuya_nara/" target="_blank" rel="noreferrer">
				<div className="react-icon"><FaInstagram /></div>
			</a>
		</li>
	</ul>);

export default NavList;