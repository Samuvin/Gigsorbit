// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolling, setScrolling] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolling(true);
			} else {
				setScrolling(false);
			}
		};
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav className={`navbar ${scrolling ? "scrolled" : ""}`}>
			<div className="navbar-brand">GIGSORBIT</div>
			<div className={`navbar-links ${isOpen ? "active" : ""}`}>
				<ul>
					<li>
						<Link to="/find">Find</Link>
					</li>
					<li>
						<Link to="/why-us">Why Us</Link>
					</li>
					<li>
						<Link to="/login">Log In</Link>
					</li>
					<li>
						<Link to="/signup">Sign Up</Link>
					</li>
					<li>
						<Link to="/footer">Footer</Link> {/* New Footer Page Link */}
					</li>
				</ul>
			</div>
			<div className="navbar-toggle" onClick={toggleMenu}>
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</div>
		</nav>
	);
};

export default Navbar;
