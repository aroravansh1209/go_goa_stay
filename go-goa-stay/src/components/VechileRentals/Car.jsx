import React,{ useState } from "react";

import "../../Styles/VechileCarRental.css"

export default function CarRentalPage() {
  return (
    <div className="car-container">
      <h1 className="car-title">Car Rentals</h1>

      <div className="car-grid">
        <div className="car-main-content">
          <h2 className="car-subtitle">Available Cars</h2>
          <div className="car-cards">
            <CarCard
              name="Eco Compact"
              description="Fuel-efficient compact car for city driving"
              imageSrc="/placeholder.svg?height=200&width=300"
            />
            <CarCard
              name="Family Cruiser"
              description="Spacious SUV for family trips and comfort"
              imageSrc="/placeholder.svg?height=200&width=300"
            />
            <CarCard
              name="Luxury Sedan"
              description="Premium sedan for a touch of elegance"
              imageSrc="/placeholder.svg?height=200&width=300"
            />
            <CarCard
              name="Electric Future"
              description="Zero-emission electric car for eco-conscious drivers"
              imageSrc="/placeholder.svg?height=200&width=300"
            />
          </div>

          <div className="car-card">
            <div className="car-card-header">
              <h3 className="car-card-title">Rental Conditions</h3>
            </div>
            <div className="car-card-content">
              <ul className="car-list">
                <li>Valid driver's license required (minimum 1 year)</li>
                <li>Minimum age: 21 years (25 for luxury vehicles)</li>
                <li>Security deposit: $500</li>
                <li>Return with full fuel tank</li>
                <li>Mileage limits apply (see specific car details)</li>
              </ul>
            </div>
          </div>

          <div className="car-card">
            <div className="car-card-header">
              <h3 className="car-card-title">Pricing</h3>
            </div>
            <div className="car-card-content">
              <ul className="car-pricing">
                <li>Daily (24 hours): Starting from $50</li>
                <li>Weekly: Starting from $300</li>
                <li>Monthly: Starting from $900</li>
              </ul>
              <p className="car-pricing-note">
                *Prices vary by car type. All prices include basic insurance. Additional coverage available.
              </p>
            </div>
          </div>
        </div>

        <div className="car-booking-form">
          <div className="car-card-header">
            <h3 className="car-card-title">Book a Car</h3>
          </div>
          <div className="car-card-content">
            <form className="car-form">
              <div>
                <label htmlFor="pickup-date" className="car-label">Pickup Date</label>
                <input type="date" id="pickup-date" className="car-input" required />
              </div>
              <div>
                <label htmlFor="return-date" className="car-label">Return Date</label>
                <input type="date" id="return-date" className="car-input" required />
              </div>
              <div>
                <label htmlFor="car-type" className="car-label">Car Type</label>
                <select id="car-type" className="car-select" required>
                  <option value="">Select a car type</option>
                  <option value="compact">Compact</option>
                  <option value="suv">SUV</option>
                  <option value="sedan">Sedan</option>
                  <option value="electric">Electric</option>
                </select>
              </div>
              <div className="car-separator"></div>
              <button type="submit" className="car-button">Book Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function CarCard({ name, description, imageSrc }) {
  return (
    <div className="car-card">
      <div className="car-card-content">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          className="car-image"
        />
        <h3 className="car-card-name">{name}</h3>
        <p className="car-card-description">{description}</p>
      </div>
    </div>
  );
}
