import React, { useState, useEffect } from "react";
import "../../Styles/ImageSlider.css";
import homeImage from "../../assets/hero.png";  // Import your home image

const images = [
  homeImage,  // Replace the placeholder URLs with the home image
  homeImage,
  homeImage,
  homeImage,
];

export default function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-slider">
      {images.map((src, index) => (
        <img
          key={src}
          src={src || "/placeholder.svg"}  // Fallback to a placeholder if no image is provided
          alt={`Travel destination ${index + 1}`}
          className={`image-slide ${index === currentImage ? "active" : ""}`}
        />
      ))}
    </div>
  );
}
