import { useState } from "react"
import "../../Styles/StaysLocationSelector.css"

const locations = ["New York", "Paris", "Tokyo", "London", "Sydney"]
const filters = ["Luxury", "Budget", "Family-friendly", "Pet-friendly"]

export default function LocationSelector() {
  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedFilters, setSelectedFilters] = useState([])

  const toggleFilter = (filter) => {
    setSelectedFilters((prev) => 
      prev.includes(filter) 
        ? prev.filter((f) => f !== filter) 
        : [...prev, filter]
    )
  }

  return (
    <div className="location-selector">
      <h2 className="title">Select Location and Filters</h2>
      <div className="select-container">
        <div className="select-location">
          <select 
            value={selectedLocation} 
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="" disabled>Select location</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        
        <div className="filter-buttons">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-button ${selectedFilters.includes(filter) ? "selected" : ""}`}
              onClick={() => toggleFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
