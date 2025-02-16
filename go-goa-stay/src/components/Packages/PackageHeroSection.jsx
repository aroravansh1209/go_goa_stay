import React from "react";
import "../../Styles/PackageHeroSection.css"; // Import the CSS file
import goapackage from "../../assets/goapackage.jpg"

export function PackagesHeroSection() {
  return (
    <div className="packageHero-container">
      <img
        src={goapackage}
        alt="Beautiful beach in Goa"
        className="packageHero-image"
      />
      <div className="packageHero-overlay" />
      <div className="packageHero-content">
        <h1 className="packageHero-title">Discover the Magic of Goa</h1>
        <p className="packageHero-description">
          Sun-kissed beaches, vibrant culture, and unforgettable adventures
          await
        </p>
        <button className="packageHero-button">
          Explore Packages
        </button>
      </div>
    </div>
  );
}
