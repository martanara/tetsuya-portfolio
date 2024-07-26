import React, { useEffect, useState } from "react";

import { NavLink, useNavigate, useLocation } from "react-router-dom";

import { FaInstagram } from "react-icons/fa";

import "./styles.scss";

interface INavListProps {
	onClick: () => void;
}

const NavList: React.FC<INavListProps> = ({ onClick }) => {
	const [sectionId, setSectionId] = useState<string | null>(null);
	const navigate = useNavigate();
	const location = useLocation();

	const handleScroll = (e: React.MouseEvent<HTMLElement>, sectionId: string) => {
		e.preventDefault();
		if (location.pathname !== '/') {
			setSectionId(sectionId);
			navigate('/');
		} else {
			const section = document.getElementById(sectionId);
			if (section) {
				section.scrollIntoView({ behavior: 'smooth' });
			}
		}
		onClick();
	};

	useEffect(() => {
		if (sectionId) {
			const section = document.getElementById(sectionId);
			if (section) {
				section.scrollIntoView({ behavior: 'smooth' });
			}
			setSectionId(null);
		}
	}, [sectionId, location]);

	return (
		<ul className="nav-list">
			<li>
				<NavLink to="/" onClick={onClick}>
					Home
				</NavLink>
			</li>

			<li>
				<NavLink to="/music" onClick={onClick}>
					Music
				</NavLink>
			</li>
			<li>
				<NavLink to="/news" onClick={onClick}>
					News
				</NavLink>
			</li>
			<li>
				<NavLink to="/" onClick={(e) => handleScroll(e, 'about-section')}>
					About
				</NavLink>
			</li>
			<li>
				<NavLink to="/" onClick={(e) => handleScroll(e, 'contact-section')}>
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