import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Link } from "react-router-dom"; // Assuming you are using React Router instead of Next.js Link
import "./PackageCard.css"; // Import the CSS file

export function PackageCard({
  id,
  name,
  duration,
  description,
  image,
  price,
  rating,
}) {
  return (
    <div className="PackageCard-container">
      <div className="PackageCard-image-container">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="PackageCard-image"
        />
        <Badge className="PackageCard-badge">{duration}</Badge>
      </div>
      <div className="PackageCard-content">
        <h3 className="PackageCard-title">{name}</h3>
        <p className="PackageCard-description">{description}</p>
        <div className="PackageCard-rating">
          <div className="PackageCard-star-rating">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`PackageCard-star ${
                  i < Math.floor(rating)
                    ? "PackageCard-star-filled"
                    : "PackageCard-star-muted"
                }`}
              />
            ))}
          </div>
          <span className="PackageCard-rating-value">{rating.toFixed(1)}</span>
        </div>
        <div className="PackageCard-price-container">
          <span className="PackageCard-price">₹{price.toLocaleString()}</span>
          <Link to={`/package/${id}`} className="PackageCard-link">
            <Button className="PackageCard-button">View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
