// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="navbar">
			<div className="navbar-brand">MyProject</div>
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
				</ul>
			</div>
			<div className="navbar-toggle" onClick={toggleMenu}>
				☰
			</div>
		</nav>
	);
};

export default Navbar;
