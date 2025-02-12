// VechileImageSlider.jsx
import { useState, useEffect } from "react";
import "../../Styles/VechileImageSlider.css";

const images = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-07%20at%203.37.03%E2%80%AFPM-8WDVoW2h5ogJDdscHMC4TnZBmnuBst.png",
  "/placeholder.svg?height=1080&width=1920",
  "/placeholder.svg?height=1080&width=1920",
  "/placeholder.svg?height=1080&width=1920",
];

export default function VechileImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="image-slider">
      {images.map((src, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        >
          <img
            src={src || "/placeholder.svg"}
            alt={`Slide ${index + 1}`}
            className="slide-image"
          />
        </div>
      ))}
      <div className="dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
