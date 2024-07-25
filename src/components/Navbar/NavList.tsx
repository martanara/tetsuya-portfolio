import React from "react";

import { NavLink } from "react-router-dom";

import { FaInstagram } from "react-icons/fa";

import "./styles.scss";

interface INavListProps {
    onClick: React.MouseEventHandler<HTMLAnchorElement> | undefined;
}

const NavList: React.FC<INavListProps> = ({ onClick }) => {
	return (
		<ul className="nav-list">
			<li>
				<NavLink to="/" onClick={onClick}>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink to="/about" onClick={onClick}>
					About
				</NavLink>
			</li>
			<li>
				<NavLink to="/bands" onClick={onClick}>
					Bands
				</NavLink>
			</li>
			<li>
				<NavLink to="/news" onClick={onClick}>
					News
				</NavLink>
			</li>
			<li>
				<NavLink to="/media" onClick={onClick}>
					Media
				</NavLink>
			</li>
			<li>
				<NavLink to="/blog" onClick={onClick}>
					Blog
				</NavLink>
			</li>
			<li>
				<a href="https://www.instagram.com/tetsuya_nara/" target="_blank" rel="noreferrer" onClick={onClick}>
					<div className="react-icon"><FaInstagram /></div>
				</a>
			</li>
		</ul>
	)
}


export default NavList;