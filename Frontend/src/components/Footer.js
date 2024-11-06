// src/components/Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-content">
				<div className="footer-links">
					<a href="/find">Find Talent</a>
					<a href="/why-us">Why Us</a>
					<a href="/login">Log In</a>
					<a href="/signup">Sign Up</a>
				</div>
				<div className="footer-social">
					<a
						href="https://facebook.com"
						target="_blank"
						rel="noopener noreferrer"
						className="social-icon facebook">
						Facebook
					</a>
					<a
						href="https://twitter.com"
						target="_blank"
						rel="noopener noreferrer"
						className="social-icon twitter">
						Twitter
					</a>
					<a
						href="https://linkedin.com"
						target="_blank"
						rel="noopener noreferrer"
						className="social-icon linkedin">
						LinkedIn
					</a>
				</div>
				<p className="footer-copyright">
					© 2024 TalentHub. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
