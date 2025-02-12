import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import "./Testimonials.css"; // Import the CSS file

const testimonials = [
  {
    name: "Sarah Johnson",
    image: "/testimonials/sarah.jpg",
    text: "My trip to India was absolutely amazing. The cultural experiences and beautiful sights were unforgettable!",
  },
  {
    name: "Michael Chen",
    image: "/testimonials/michael.jpg",
    text: "The tour was well-organized and our guide was knowledgeable. I'd highly recommend this to anyone!",
  },
  {
    name: "Emma Rodriguez",
    image: "/testimonials/emma.jpg",
    text: "From the Taj Mahal to the beaches of Goa, every moment was magical. Can't wait to return!",
  },
];

export function Testimonials() {
  return (
    <section className="PackageTestimonials-section">
      <h2 className="PackageTestimonials-title">What Our Travelers Say</h2>
      <div className="PackageTestimonials-grid">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="PackageTestimonials-card">
            <CardContent className="PackageTestimonials-card-content">
              <div className="PackageTestimonials-image-container">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="PackageTestimonials-image"
                />
              </div>
              <p className="PackageTestimonials-text">"{testimonial.text}"</p>
              <p className="PackageTestimonials-name">{testimonial.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
