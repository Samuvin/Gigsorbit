// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Find from "./pages/Find";
import WhyUs from "./pages/WhyUs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/find" element={<Find />} />
				<Route path="/why-us" element={<WhyUs />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</Router>
	);
}

export default App;
