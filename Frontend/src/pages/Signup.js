// src/pages/Signup.js
import React from "react";
import "./Signup.css";

const Signup = () => {
	return (
		<div className="signup-container">
			<h1 className="signup-title">Sign Up</h1>
			<form className="signup-form">
				<input type="text" placeholder="Username" className="signup-input" />
				<input type="email" placeholder="Email" className="signup-input" />
				<input
					type="password"
					placeholder="Password"
					className="signup-input"
				/>
				<button type="submit" className="signup-button">
					Sign Up
				</button>
			</form>
			<p className="signup-footer">
				Already have an account? <a href="/login">Log in here</a>
			</p>
		</div>
	);
};

export default Signup;
