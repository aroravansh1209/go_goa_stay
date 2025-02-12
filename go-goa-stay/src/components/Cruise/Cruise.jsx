import { CruiseCard } from "@/components/cruise-card"
import { HeroSection } from "@/components/hero-section"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { cruises } from "@/lib/data"
import './HomePage.css'; // Import the CSS file for styles

export default function HomePage() {
  return (
    <div className="cruise">
      <HeroSection />
      <div className="container">
        <h2 className="section-title">Featured Cruises</h2>
        <div className="cruise-grid">
          {cruises.map((cruise) => (
            <CruiseCard key={cruise.id} {...cruise} />
          ))}
        </div>
      </div>
      <Testimonials />
      <Footer />
    </div>
  )
}
