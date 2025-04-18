import { Search } from "lucide-react"
import '../../Styles/StayHeroSection.css'

export default function HeroSection() {
  return (
    <div className="StayHero">
      <div className="background">
        <div className="overlay"></div>
      </div>
      <div className="content">
        <h1 className="heading">Find Your Perfect Stay in Goa</h1>
        <p className="subheading">Discover handpicked accommodations for an unforgettable experience</p>
      </div>
    </div>
  )
}
