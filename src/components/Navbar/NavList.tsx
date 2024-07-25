import React, { ReactHTML } from "react";

import { NavLink } from "react-router-dom";

import { FaInstagram } from "react-icons/fa";

import "./styles.scss";

interface INavListProps {
	onClick: React.MouseEventHandler<HTMLAnchorElement> | undefined;
}

const NavList: React.FC<INavListProps> = ({ onClick }) => {
	const handleScroll = (e: React.MouseEvent<HTMLElement>, sectionId: string) => {
		e.preventDefault()
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<ul className="nav-list">
			<li>
				<NavLink to="/" onClick={onClick}>
					Home
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
				<NavLink to="#" onClick={(e) => handleScroll(e, 'about-section')}>
					About
				</NavLink>
			</li>
			<li>
				<NavLink to="#" onClick={(e) => handleScroll(e, 'contact-section')}>
					Contact
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