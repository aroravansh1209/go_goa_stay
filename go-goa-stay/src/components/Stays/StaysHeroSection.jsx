import React from "react";
import "../../Styles/StaysHeroSection.css"
import ImageSlider from "./imageSlider";

export default function StaysHeroSection() {
  return (
    <div className="hero-section">
      <ImageSlider />
      <div className="hero-content">
        <h1 className="hero-title">Discover Your Perfect Stay</h1>
        <p className="hero-description">Explore unique accommodations around the world</p>
        <button className="cta-button">Start Your Journey</button>
      </div>
    </div>
  );
}
