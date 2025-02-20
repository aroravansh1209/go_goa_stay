import { useState } from "react"
import {
  MapPin,
  Wifi,
  PocketIcon as Pool,
  CookingPotIcon as Kitchen,
  Tv,
  Car,
  DollarSign,
  ArrowLeft,
} from "lucide-react"

// Mock data for accommodations (in a real app, this would be fetched from an API)
const accommodations = [
  {
    id: 1,
    name: "Luxury Beachfront Villa",
    type: "Villa",
    price: 500,
    location: "Calangute",
    image: "/placeholder.svg?height=400&width=600",
    amenities: ["Wi-Fi", "Pool", "Kitchen", "TV", "Parking"],
    isLuxury: true,
    description:
      "Experience luxury living in this stunning beachfront villa with panoramic ocean views. Perfect for families or groups seeking a high-end vacation experience.",
  },
  {
    id: 2,
    name: "Budget-Friendly Apartment",
    type: "Flat",
    price: 80,
    location: "Panaji",
    image: "/placeholder.svg?height=400&width=600",
    amenities: ["Wi-Fi", "Kitchen"],
    isLuxury: false,
    description:
      "Cozy and affordable apartment in the heart of Panaji. Ideal for budget travelers who want to explore the city.",
  },
  {
    id: 3,
    name: "Cozy Goan House",
    type: "House",
    price: 150,
    location: "Anjuna",
    image: "/placeholder.svg?height=400&width=600",
    amenities: ["Wi-Fi", "Kitchen", "TV", "Parking"],
    isLuxury: false,
    description: "Experience authentic Goan living in this charming house. Close to popular beaches and markets.",
  },
  {
    id: 4,
    name: "Exclusive Resort Suite",
    type: "Resort",
    price: 350,
    location: "Candolim",
    image: "/placeholder.svg?height=400&width=600",
    amenities: ["Wi-Fi", "Pool", "Kitchen", "TV", "Parking"],
    isLuxury: true,
    description:
      "Indulge in luxury at this exclusive resort suite. Enjoy world-class amenities and impeccable service.",
  },
]

export default function AccommodationDetailPage({ params }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [checkInDate, setCheckInDate] = useState()
  const [checkOutDate, setCheckOutDate] = useState()
  const [guests, setGuests] = useState(1)

  const accommodation = accommodations.find((acc) => acc.id === Number.parseInt(params.id))

  if (!accommodation) {
    return <div>Accommodation not found</div>
  }

  const handleBookNow = () => {
    // In a real application, this would submit the booking details to an API
    console.log("Booking submitted:", { accommodation, checkInDate, checkOutDate, guests })
    setIsBookingOpen(false)
    // You might want to show a confirmation message or redirect to a confirmation page here
  }

  return (
    <div className="staysdetails-container">
      <button className="staysdetails-back-button" onClick={() => window.history.back()}>
        <ArrowLeft className="staysdetails-icon" /> Back to Accommodations
      </button>
      <div className="staysdetails-grid">
        <div>
          <img
            src={accommodation.image || "/placeholder.svg"}
            alt={accommodation.name}
            className="staysdetails-image"
          />
        </div>
        <div>
          <h1 className="staysdetails-title">{accommodation.name}</h1>
          <div className="staysdetails-location">
            <MapPin className="staysdetails-icon" />
            <span>{accommodation.location}</span>
          </div>
          <p className="staysdetails-description">{accommodation.description}</p>
          <div className="staysdetails-price">
            <DollarSign className="staysdetails-icon" />
            <span className="staysdetails-price-value">{accommodation.price}/night</span>
          </div>
          <h2 className="staysdetails-amenities-title">Amenities</h2>
          <div className="staysdetails-amenities">
            {accommodation.amenities.map((amenity) => (
              <div key={amenity} className="staysdetails-amenity">
                {amenity === "Wi-Fi" && <Wifi className="staysdetails-icon" />}
                {amenity === "Pool" && <Pool className="staysdetails-icon" />}
                {amenity === "Kitchen" && <Kitchen className="staysdetails-icon" />}
                {amenity === "TV" && <Tv className="staysdetails-icon" />}
                {amenity === "Parking" && <Car className="staysdetails-icon" />}
                <span>{amenity}</span>
              </div>
            ))}
          </div>
          <div className={`staysdetails-dialog ${isBookingOpen ? 'open' : ''}`}>
            <div className="staysdetails-dialog-header">
              <h2>Book {accommodation.name}</h2>
            </div>
            <div className="staysdetails-form">
              <div className="staysdetails-date-picker-container">
                <div>
                  <label htmlFor="check-in" className="staysdetails-label">Check-in Date</label>
                  <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="check-out" className="staysdetails-label">Check-out Date</label>
                  <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} />
                </div>
              </div>
              <div>
                <label htmlFor="guests" className="staysdetails-label">Number of Guests</label>
                <input
                  id="guests"
                  type="number"
                  value={guests}
                  onChange={(e) => setGuests(Number.parseInt(e.target.value))}
                  min={1}
                  className="staysdetails-input"
                />
              </div>
            </div>
            <button className="staysdetails-confirm-button" onClick={handleBookNow}>Confirm Booking</button>
          </div>
        </div>
      </div>
    </div>
  )
}
