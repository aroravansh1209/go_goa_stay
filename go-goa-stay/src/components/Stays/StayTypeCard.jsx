import { useEffect, useRef } from "react"
import "../../Styles/StayTypeCard.css"

const stayTypes = [
  {
    title: "Villas & Resorts",
    options: ["Beachfront Villas", "Mountain Resorts", "Private Islands"],
    tags: ["Luxury", "Exclusive"],
  },
  {
    title: "Flats & Houses",
    options: ["City Apartments", "Countryside Cottages", "Suburban Homes"],
    tags: ["Homely", "Local Experience"],
  },
  {
    title: "Hostels",
    options: ["Dormitories", "Private Rooms", "Social Areas"],
    tags: ["Budget-friendly", "Solo Travelers"],
  },
  {
    title: "Hotels",
    options: ["5-star Luxury", "4-star Comfort", "Budget Hotels"],
    tags: ["Various Facilities", "Business Travel"],
  },
]

export default function StayTypeCards() {
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
    <div className="stay-types">
      <h2 className="stay-types-title">Explore Stay Types</h2>
      <div className="card-grid">
        {stayTypes.map((type, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="card"
          >
            <div className="card-header">
              <h3>{type.title}</h3>
            </div>
            <div className="card-content">
              <ul className="options-list">
                {type.options.map((option, i) => (
                  <li key={i}>{option}</li>
                ))}
              </ul>
              <div className="tags">
                {type.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
