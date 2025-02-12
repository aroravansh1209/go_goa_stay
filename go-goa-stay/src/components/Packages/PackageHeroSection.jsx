import React from "react";
import { Button } from "@/components/ui/button";
import "./HeroSection.css"; // Import the CSS file

export function HeroSection() {
  return (
    <div className="packageHero-container">
      <img
        src="/goa-hero.jpg"
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
        <Button className="packageHero-button" size="lg">
          Explore Packages
        </Button>
      </div>
    </div>
  );
}
