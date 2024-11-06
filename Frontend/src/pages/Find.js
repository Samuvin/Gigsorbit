// src/pages/Find.js
import React from "react";
import "./Find.css";

const Find = () => {
	return (
		<div className="find-container">
			<h1 className="find-title">Find</h1>
			<div className="find-sections">
				<section className="find-item">
					<h2>Talent</h2>
					<p>
						Explore a wide range of talented individuals to match your project
						needs.
					</p>
				</section>
				<section className="find-item">
					<h2>Projects</h2>
					<p>Find projects that align with your skills and expertise.</p>
				</section>
				<section className="find-item">
					<h2>Jobs</h2>
					<p>Browse job opportunities across various industries.</p>
				</section>
			</div>
		</div>
	);
};

export default Find;
