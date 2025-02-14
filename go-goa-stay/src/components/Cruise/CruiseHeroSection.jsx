import React from 'react';
import { Search } from "lucide-react";
import "../../Styles/CruiseHeroSection.css"; // Import the custom CSS

export function CruiseHeroSection() {
  return (
    <div className="cruiseHero-container">
      <div className="cruiseHero-image-container">
        <img
          src="/placeholder.svg"
          alt="Cruise ship at sunset"
          className="cruiseHero-image"
        />
      </div>
      <div className="cruiseHero-content">
        <h1 className="cruiseHero-heading">Discover Luxury Cruise Experiences</h1>
        <p className="cruiseHero-subheading">
          Explore our handpicked selection of premium cruise experiences
        </p>
        <div className="cruiseHero-search-container">
          <input
            type="text"
            placeholder="Search cruises..."
            className="cruiseHero-input"
          />
          <button className="cruiseHero-button">
            <Search className="cruiseHero-icon" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
