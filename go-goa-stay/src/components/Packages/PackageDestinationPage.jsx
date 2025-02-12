import React from "react";
import PropTypes from "prop-types";
import { MapPin, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import "./DestinationCard.css"; // Import the CSS file

export function DestinationCard({
  id,
  name,
  description,
  image,
  rating,
  currentPrice,
  originalPrice,
  tourOptions,
}) {
  return (
    <Card className="packagedestination-card">
      <div className="packagedestination-image-container">
        <img
          src={image || "/placeholder.svg"}
          alt={`View of ${name}`}
          className="packagedestination-image"
        />
      </div>
      <CardContent className="packagedestination-card-content">
        <div className="packagedestination-location">
          <MapPin className="packagedestination-icon" />
          <h3 className="packagedestination-title">{name}</h3>
        </div>
        <p className="packagedestination-description">{description}</p>
        <div className="packagedestination-badges">
          {tourOptions.map((option) => (
            <Badge key={option} variant="secondary" className="packagedestination-badge">
              {option}
            </Badge>
          ))}
        </div>
        <div className="packagedestination-rating">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`packagedestination-star ${i < rating ? "packagedestination-filled" : "packagedestination-empty"}`}
            />
          ))}
        </div>
        <div className="packagedestination-price">
          <span className="packagedestination-current-price">
            ₹{currentPrice.toLocaleString()}
          </span>
          <span className="packagedestination-original-price">
            ₹{originalPrice.toLocaleString()}
          </span>
        </div>
        <a href={`/destination/${id}`} className="packagedestination-view-details">
          <Button className="packagedestination-view-details-button">View Details</Button>
        </a>
      </CardContent>
    </Card>
  );
}

DestinationCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  rating: PropTypes.number.isRequired,
  currentPrice: PropTypes.number.isRequired,
  originalPrice: PropTypes.number.isRequired,
  tourOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};
