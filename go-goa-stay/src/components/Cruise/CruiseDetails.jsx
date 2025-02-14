import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Clock, MapPin, Utensils, Users, Waves, Wifi } from "lucide-react";
import { cruises } from "@/lib/data"; // Assuming your data file

import "./CruiseDetailsPage.css"; // Import custom CSS file

export default function CruiseDetailsPage({ match }) {
  const cruiseId = match.params.id;
  const cruise = cruises.find((c) => c.id === cruiseId);

  if (!cruise) {
    return <div>Not Found</div>; // Handle not found scenario
  }

  return (
    <div className="cruiseDetails-container">
      <div className="cruiseDetails-grid">
        <div className="cruiseDetails-image-container">
          <img
            src={cruise.imageUrl || "/placeholder.svg"}
            alt={cruise.title}
            className="cruiseDetails-image"
            loading="lazy"
          />
        </div>
        <div className="cruiseDetails-info">
          <div>
            <h1 className="cruiseDetails-title">{cruise.title}</h1>
            <div className="cruiseDetails-rating">
              <span className="cruiseDetails-rating-star">★ {cruise.rating}</span>
              <span className="cruiseDetails-rating-reviews">({cruise.reviews} reviews)</span>
            </div>
          </div>
          <div className="cruiseDetails-badges">
            <Badge variant="secondary" className="cruiseDetails-badge">
              <Clock className="cruiseDetails-icon" />
              {cruise.duration}
            </Badge>
            <Badge variant="secondary" className="cruiseDetails-badge">
              <Utensils className="cruiseDetails-icon" />
              Meals Included
            </Badge>
            <Badge variant="secondary" className="cruiseDetails-badge">
              <MapPin className="cruiseDetails-icon" />
              {cruise.location}
            </Badge>
          </div>
          <div className="cruiseDetails-price">
            <div className="cruiseDetails-original-price">
              INR {cruise.originalPrice.toFixed(2)}
            </div>
            <div className="cruiseDetails-discounted-price">
              INR {cruise.discountedPrice.toFixed(2)}
            </div>
            <div className="cruiseDetails-price-per-person">per person</div>
          </div>
          <Separator />
          <div className="cruiseDetails-features">
            <h2 className="cruiseDetails-features-title">Cruise Features</h2>
            <div className="cruiseDetails-feature-cards">
              <Card className="cruiseDetails-feature-card">
                <div className="cruiseDetails-feature-content">
                  <Waves className="cruiseDetails-feature-icon" />
                  <div className="cruiseDetails-feature-text">Deck Access</div>
                </div>
              </Card>
              <Card className="cruiseDetails-feature-card">
                <div className="cruiseDetails-feature-content">
                  <Utensils className="cruiseDetails-feature-icon" />
                  <div className="cruiseDetails-feature-text">Gourmet Dining</div>
                </div>
              </Card>
              <Card className="cruiseDetails-feature-card">
                <div className="cruiseDetails-feature-content">
                  <Wifi className="cruiseDetails-feature-icon" />
                  <div className="cruiseDetails-feature-text">Free Wi-Fi</div>
                </div>
              </Card>
              <Card className="cruiseDetails-feature-card">
                <div className="cruiseDetails-feature-content">
                  <Users className="cruiseDetails-feature-icon" />
                  <div className="cruiseDetails-feature-text">Expert Crew</div>
                </div>
              </Card>
            </div>
          </div>
          <Button size="lg" className="cruiseDetails-book-button">
            <a href={`/booking/${cruise.id}`}>Book Now</a>
          </Button>
        </div>
      </div>
      <div className="cruiseDetails-about-section">
        <h2 className="cruiseDetails-about-title">About This Cruise</h2>
        <p className="cruiseDetails-about-text">{cruise.description}</p>
      </div>
    </div>
  );
}
