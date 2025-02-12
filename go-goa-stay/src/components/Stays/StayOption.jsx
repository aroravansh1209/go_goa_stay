import { useEffect, useRef } from "react"
import "../../Styles/StayOption.css"

const stayOptions = [
  { title: "Villas & Resorts", description: "Luxurious and spacious accommodations" },
  { title: "Flats & Houses", description: "Home-like comfort for your stay" },
  { title: "Hostels", description: "Budget-friendly options for solo travelers" },
  { title: "Hotels", description: "From luxury to budget, with various facilities" },
]

export default function StayOptions() {
  const cardRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      { threshold: 0.1 },
    )

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="Stayoptions">
      <h2 className="title">Stay Options Overview</h2>
      <div className="cards-container">
        {stayOptions.map((option, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="card"
          >
            <div className="card-header">
              <h3 className="card-title">{option.title}</h3>
            </div>
            <div className="card-content">
              <p>{option.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
