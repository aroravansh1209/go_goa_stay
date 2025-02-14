import React , { useState, useEffect } from "react"
import StayOptions from "./StayOption"
import LocationSelector from "./LocationSelector"
import StayTypeCards from "./StayTypeCard"
import StayHeroSection from "./StaysHeroSection"
import Navbar from "../Navbar"


export default function Stays() {
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500) // Set to 1.5 seconds for the loading screen

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Navbar />
      <br />
      <StayHeroSection />
      <div className="container mx-auto px-4 py-8">
        {isLoading ? (
          <div>Loading...</div> // Show loading state
        ) : (
          <>
            <StayOptions />
            <LocationSelector />
            <StayTypeCards />
          </>
        )}
      </div>
    </>
  )
}
