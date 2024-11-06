// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Find from "./pages/Find";
import WhyUs from "./pages/WhyUs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FooterPage from "./pages/Footer"; // Import the FooterPage component

function App() {
	return (
		<Router>
			<div className="app-container">
				<Navbar />
				<Routes>
					<Route path="/find" element={<Find />} />
					<Route path="/why-us" element={<WhyUs />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/footer" element={<FooterPage />} />{" "}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
