import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Car } from "lucide-react";
import "../../Styles/VechileShowCase.css";
import Destination1 from "../../assets/Destination1.jpg";
import Destination2 from "../../assets/Destination2.jpg";
import Destination3 from "../../assets/Destination3.jpg";
import Destination4 from "../../assets/Destination4.png";
import Destination5 from "../../assets/Destination5.png";
import Destination6 from "../../assets/Destination6.png";

const cars = [
  {
    brand: "Maruti",
    model: "Ciaz",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-07%20at%209.06.54%E2%80%AFPM-vKD30Q0iRSfnsipXKamBvtIiXzwtLf.png#ciaz",
  },
  {
    brand: "Mahindra",
    model: "Scorpio",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-07%20at%209.06.54%E2%80%AFPM-vKD30Q0iRSfnsipXKamBvtIiXzwtLf.png#scorpio",
  },
  {
    brand: "Mahindra",
    model: "TUV 300",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-07%20at%209.06.54%E2%80%AFPM-vKD30Q0iRSfnsipXKamBvtIiXzwtLf.png#tuv",
  },
  {
    brand: "Hyundai",
    model: "Creta",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-07%20at%209.06.54%E2%80%AFPM-vKD30Q0iRSfnsipXKamBvtIiXzwtLf.png#creta",
  },
  // Additional cars for scrolling
  {
    brand: "Maruti",
    model: "Swift",
    image: "/placeholder.svg",
  },
  {
    brand: "Hyundai",
    model: "Venue",
    image: "/placeholder.svg",
  },
];

export default function VechileShowCase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerView = 4;
  const totalSlides = Math.max(0, cars.length - cardsPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="container">
      <h1 className="title">
        Best Selling Models
        <span className="title-dot">•</span>
      </h1>

      <div className="carousel">
        <button
          className={`nav-button nav-button-prev ${currentSlide === 0 ? "hidden" : ""}`}
          onClick={prevSlide}
        >
          <ChevronLeft />
        </button>

        <div className="carousel-container">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)`,
            }}
          >
            {cars.map((car, index) => (
              <div key={`${car.brand}-${car.model}-${index}`} className="card">
                <div className="card-content">
                  <div className="car-image">
                    <img
                      src={car.image || "/placeholder.svg"}
                      alt={`${car.brand} ${car.model}`}
                      className="object-contain"
                    />
                  </div>
                  <div className="car-info">
                    <div className="car-icon">
                      <Car />
                    </div>
                    <span className="car-brand">{car.brand}</span>
                    <span className="car-model">{car.model}</span>
                  </div>
                  <div className="view-details">
                    <a href="#">
                      View Details
                      <ChevronRight />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className={`nav-button nav-button-next ${currentSlide === totalSlides ? "hidden" : ""}`}
          onClick={nextSlide}
        >
          <ChevronRight />
        </button>

        <div className="pagination">
          {Array.from({ length: totalSlides + 1 }).map((_, index) => (
            <button
              key={index}
              className={`pagination-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}