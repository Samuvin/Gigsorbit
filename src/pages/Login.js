// src/pages/Login.js
import React, { useState } from "react";
import "./Login.css";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!email || !password) {
			setError("Please fill in all fields");
		} else {
			setError("");
			// Handle login logic here
			console.log("Login successful");
		}
	};

	return (
		<div className="login-container">
			<h1>Login</h1>
			<form onSubmit={handleSubmit} className="login-form">
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				{error && <p className="error-message">{error}</p>}
				<button type="submit">Log In</button>
			</form>
		</div>
	);
};

export default Login;
