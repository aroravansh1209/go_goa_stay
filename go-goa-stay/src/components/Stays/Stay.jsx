import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, Wifi, PocketIcon as Pool, CookingPotIcon as Kitchen, Tv, Car, DollarSign } from "lucide-react";
import "../../Styles/Stay.css"
import { DateRangePicker } from "./StayDateRange";
import { GuestSelector } from "./StayGuestSelector";

const accommodations = [
  {
    id: 1,
    name: "Luxury Beachfront Villa",
    type: "Villa",
    price: 500,
    location: "Calangute",
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["Wi-Fi", "Pool", "Kitchen", "TV", "Parking"],
    isLuxury: true,
  },
  {
    id: 2,
    name: "Budget-Friendly Apartment",
    type: "Flat",
    price: 80,
    location: "Panaji",
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["Wi-Fi", "Kitchen"],
    isLuxury: false,
  },
  {
    id: 3,
    name: "Cozy Goan House",
    type: "House",
    price: 150,
    location: "Anjuna",
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["Wi-Fi", "Kitchen", "TV", "Parking"],
    isLuxury: false,
  },
  {
    id: 4,
    name: "Exclusive Resort Suite",
    type: "Resort",
    price: 350,
    location: "Candolim",
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["Wi-Fi", "Pool", "Kitchen", "TV", "Parking"],
    isLuxury: true,
  },
];

export default function Stays() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    villa: false,
    resort: false,
    flat: false,
    house: false,
    luxury: false,
    budget: false,
    wifi: false,
    pool: false,
    kitchen: false,
    tv: false,
    parking: false,
  });
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [showMap, setShowMap] = useState(false);

  const filteredAccommodations = accommodations.filter((acc) => {
    const typeFilter =
      filters.villa || filters.resort || filters.flat || filters.house;
    return (
      acc.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!typeFilter ||
        (filters.villa && acc.type === "Villa") ||
        (filters.resort && acc.type === "Resort") ||
        (filters.flat && acc.type === "Flat") ||
        (filters.house && acc.type === "House")) &&
      (!filters.luxury || acc.isLuxury) &&
      (!filters.budget || acc.price <= 100) &&
      (!filters.wifi || acc.amenities.includes("Wi-Fi")) &&
      (!filters.pool || acc.amenities.includes("Pool")) &&
      (!filters.kitchen || acc.amenities.includes("Kitchen")) &&
      (!filters.tv || acc.amenities.includes("TV")) &&
      (!filters.parking || acc.amenities.includes("Parking")) &&
      acc.price >= priceRange[0] &&
      acc.price <= priceRange[1]
    );
  });

  const handleFilterChange = (filterName) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName],
    }));
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="stay hero-section">
        <div className="stay hero-overlay">
          <img src="/placeholder.svg?height=600&width=1200" alt="Goa beaches" className="stay hero-image" />
        </div>
        <div className="stay hero-content">
          <h1 className="stay hero-title">Find Your Perfect Stay in Goa</h1>
          <p className="stay hero-description">
            Discover a wide range of accommodations, from luxury beachfront villas to cozy apartments in the heart of Goa.
          </p>
          <div className="stay search-section">
            <DateRangePicker />
            <GuestSelector />
            <button className="stay search-button">Search</button>
          </div>
        </div>
      </div>

      {/* Featured Accommodations */}
      <div className="stay featured-accommodations">
        <h2 className="stay section-title">Featured Accommodations</h2>
        <div className="stay accommodations-grid">
          {accommodations.slice(0, 3).map((acc) => (
            <div key={acc.id} className="stay accommodation-card">
              <img src={acc.image || "/placeholder.svg"} alt={acc.name} className="stay accommodation-image" />
              <div className="stay accommodation-info">
                <h3 className="stay accommodation-name">{acc.name}</h3>
                <div className="stay accommodation-location">
                  <MapPin className="stay location-icon" />
                  <span>{acc.location}</span>
                </div>
                <div className="stay accommodation-price">
                  <DollarSign className="stay price-icon" />
                  <span>{acc.price}/night</span>
                </div>
                <Link to={`/stay/accommodations/${acc.id}`} className="stay details-button">View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filters and Accommodations List */}
      <div className="stay accommodations-list">
        <h2 className="stay section-title">All Accommodations</h2>
        <div className="stay filters-and-list">
          {/* Filters Sidebar */}
          <div className="stay filters-sidebar">
            <div className="stay filter-section">
              <h3>Accommodation Type</h3>
              <div className="stay filter-options">
                {["villa", "resort", "flat", "house"].map((type) => (
                  <div key={type} className="stay filter-option">
                    <input
                      type="checkbox"
                      id={type}
                      checked={filters[type]}
                      onChange={() => handleFilterChange(type)}
                    />
                    <label htmlFor={type}>{type}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="stay filter-section">
              <h3>Price Range</h3>
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], e.target.value])}
                className="stay price-slider"
              />
              <div className="stay price-range">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>

            <div className="stay filter-section">
              <h3>Property Class</h3>
              <div className="stay filter-options">
                <div className="stay filter-option">
                  <input
                    type="checkbox"
                    id="luxury"
                    checked={filters.luxury}
                    onChange={() => handleFilterChange("luxury")}
                  />
                  <label htmlFor="luxury">Luxury</label>
                </div>
                <div className="stay filter-option">
                  <input
                    type="checkbox"
                    id="budget"
                    checked={filters.budget}
                    onChange={() => handleFilterChange("budget")}
                  />
                  <label htmlFor="budget">Budget</label>
                </div>
              </div>
            </div>

            <div className="stay filter-section">
              <h3>Amenities</h3>
              <div className="stay filter-options">
                {["wifi", "pool", "kitchen", "tv", "parking"].map((amenity) => (
                  <div key={amenity} className="stay filter-option">
                    <input
                      type="checkbox"
                      id={amenity}
                      checked={filters[amenity]}
                      onChange={() => handleFilterChange(amenity)}
                    />
                    <label htmlFor={amenity}>{amenity}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="stay accommodations-cards">
            <div className="stay search-bar">
              <input
                type="text"
                placeholder="Search accommodations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="stay search-input"
              />
              <Search className="stay search-icon" />
            </div>

            {showMap ? (
              <div className="stay map-view">
                <p>Map view would be implemented here</p>
              </div>
            ) : (
              <div className="stay accommodations-grid">
                {filteredAccommodations.map((acc) => (
                  <div key={acc.id} className="stay accommodation-card">
                    <img src={acc.image || "/placeholder.svg"} alt={acc.name} className="stay accommodation-image" />
                    <div className="stay accommodation-info">
                      <h3 className="stay accommodation-name">{acc.name}</h3>
                      <div className="stay accommodation-location">
                        <MapPin className="stay location-icon" />
                        <span>{acc.location}</span>
                      </div>
                      <div className="stay accommodation-price">
                        <DollarSign className="stay price-icon" />
                        <span>{acc.price}/night</span>
                      </div>
                      <div className="stay accommodation-amenities">
                        {acc.amenities.includes("Wi-Fi") && <Wifi className="stay amenity-icon" />}
                        {acc.amenities.includes("Pool") && <Pool className="stay amenity-icon" />}
                        {acc.amenities.includes("Kitchen") && <Kitchen className="stay amenity-icon" />}
                        {acc.amenities.includes("TV") && <Tv className="stay amenity-icon" />}
                        {acc.amenities.includes("Parking") && <Car className="stay amenity-icon" />}
                      </div>
                      <div className="stay accommodation-footer">
                        <span>{acc.type}</span>
                        <Link to={`/stay/accommodations/${acc.id}`} className="stay details-button">View Details</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
