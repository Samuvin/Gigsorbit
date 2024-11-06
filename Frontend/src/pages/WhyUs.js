// src/pages/WhyUs.js
import React from "react";
import "./WhyUs.css";

const WhyUs = () => {
	return (
		<div className="why-us-container">
			<h1 className="why-us-title">Why Us</h1>
			<div className="why-us-sections">
				<section className="why-us-item">
					<h2>Success Stories</h2>
					<p>
						Discover how we’ve helped freelancers and businesses achieve
						success.
					</p>
				</section>
				<section className="why-us-item">
					<h2>Ratings & Reviews</h2>
					<p>See what our clients have to say about their experience.</p>
				</section>
				<section className="why-us-item">
					<h2>Testimonials</h2>
					<p>Read testimonials from users who have found success with us.</p>
				</section>
			</div>
		</div>
	);
};

export default WhyUs;
