import React, { useEffect, useState } from "react";
import { getDestinations } from "@/lib/get-destinations";
import DestinationCard from "@/components/destination-card";
import HeroSection from "@/components/hero-section";
import PopularActivities from "@/components/popular-activities";
import NewsletterSignup from "@/components/newsletter-signup";
import Footer from "@/components/footer";
import Testimonials from "@/components/testimonials";
import './HomePage.css'; // Import the normal CSS file

export default function HomePage() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      const data = await getDestinations();
      setDestinations(data);
    };

    fetchDestinations();
  }, []);

  return (
    <main className="packages-home-page">
      <HeroSection />
      <div className="packages-destinations-section">
        <h2 className="packages-section-title">Explore Goa Destinations</h2>
        <div className="packages-destination-grid">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} {...destination} />
          ))}
        </div>
      </div>
      <PopularActivities />
      <Testimonials />
      <NewsletterSignup />
      <Footer />
    </main>
  );
}
