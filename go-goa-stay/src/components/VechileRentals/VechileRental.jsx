import React, { useState, useMemo } from "react";
import { differenceInDays, differenceInHours, isAfter, parseISO } from "date-fns";
import { DateTimePicker } from "./DateTimePicker"; // Adjust the path as per your directory
import { VechileLocationSelector } from "./LocationSelector"; // Adjust the path as per your directory
import VechileImageSlider from "./VechileImageSlider";  // Use default import
import "../../Styles/VechileRentals.css"; // Importing the CSS file
import Navbar from "../Navbar";
import VechileShowCase from "./VechileShowCase";
import { Feather } from "lucide-react";
import Features from "./Features";
import Footer from "../Footer";

export default function VechileRental() {
    const [location, setLocation] = useState("")
    const [pickupDate, setPickupDate] = useState("")
    const [returnDate, setReturnDate] = useState("")
  
    const duration = React.useMemo(() => {
      if (pickupDate && returnDate) {
        const start = parseISO(pickupDate)
        const end = parseISO(returnDate)
        if (isAfter(end, start)) {
          const days = differenceInDays(end, start)
          const remainingHours = differenceInHours(end, start) % 24
          return { days, hours: remainingHours }
        }
      }
      return null
    }, [pickupDate, returnDate])
  
    return (
      <div className="car-rental-app">

        <Navbar />
        <br />
  
        {/* Main Content */}
        <main>
          {/* Background Image Slider */}
          <VechileImageSlider />
  
          {/* Content Overlay */}
          <div className="content-overlay">
            {/* Booking Form */}
            <div className="booking-form">
              <div className="form-tabs">
                <button className="active">Daily Rentals</button>
                <button>Monthly Subscription</button>
              </div>
  
              <div className="form-fields">
                <VechileLocationSelector value={location} onChange={setLocation} />
                <DateTimePicker label="Pick-Up Date" value={pickupDate} onChange={setPickupDate} />
                <DateTimePicker label="Return Date" value={returnDate} onChange={setReturnDate} />
              </div>
  
              {duration && (
                <div className="duration">
                  Duration: {duration.days} Days and {duration.hours} hours
                </div>
              )}
  
              <div className="form-actions">
                <button className="search-button" disabled={!location || !pickupDate || !returnDate || !duration}>
                  Search
                </button>
              </div>
            </div>
  
            {/* Hero Content */}
            <div className="hero-content">
              <h1>ORIX India's Premium Car Chauffeur Drive Services</h1>
              <button className="enquire-button">Enquire Now</button>
            </div>
          </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        
        <Features />
        </main>
        <Footer />
      </div>
    )
  }
  
  