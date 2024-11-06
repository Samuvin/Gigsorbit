// src/pages/Signup.js
import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!email || !password || !confirmPassword) {
			setError("Please fill in all fields");
		} else if (password !== confirmPassword) {
			setError("Passwords do not match");
		} else {
			setError("");
			// Handle signup logic here
			console.log("Signup successful");
		}
	};

	return (
		<div className="signup-container">
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit} className="signup-form">
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
				<input
					type="password"
					placeholder="Confirm Password"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
				/>
				{error && <p className="error-message">{error}</p>}
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};

export default Signup;
