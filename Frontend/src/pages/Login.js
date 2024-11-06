// src/pages/Login.js
import React from "react";
import "./Login.css";

const Login = () => {
	return (
		<div className="login-container">
			<h1 className="login-title">Log In</h1>
			<form className="login-form">
				<input type="text" placeholder="Username" className="login-input" />
				<input type="password" placeholder="Password" className="login-input" />
				<button type="submit" className="login-button">
					Log In
				</button>
			</form>
			<p className="login-footer">
				Don’t have an account? <a href="/signup">Sign up here</a>
			</p>
		</div>
	);
};

export default Login;
