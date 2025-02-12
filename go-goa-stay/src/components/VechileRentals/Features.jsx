import React from "react";
import { CreditCard, XCircle, ThumbsUp } from "lucide-react";
import "../../Styles/Features.css"

export default function Features() {
  return (
    <div className="features-container">
      <h2 className="features-title">Why ride with MyChoize?</h2>

      <div className="features-grid">
        {/* Multiple Payment Options */}
        <div className="feature-card">
          <div className="feature-icon payment">
            <CreditCard />
          </div>
          <h3 className="feature-title">Multiple Payment Options</h3>
          <p className="feature-description">
            Don't let payment mode come in between you and your dream car! Choose from credit card, debit card, net
            banking, or UPI.
          </p>
        </div>

        {/* Easy Cancellation */}
        <div className="feature-card">
          <div className="feature-icon cancel">
            <XCircle />
          </div>
          <h3 className="feature-title">Easy Cancellation</h3>
          <p className="feature-description">
            Change of plans made easy with MyChoize. Enjoy the flexibility to cancel your rental car reservation with
            just a few clicks.
          </p>
        </div>

        {/* Best Price Guarantee */}
        <div className="feature-card">
          <div className="feature-icon price">
            <ThumbsUp />
            <span className="rupee-symbol">₹</span>
          </div>
          <h3 className="feature-title">Best Price Guarantee</h3>
          <p className="feature-description">
            We guarantee the lowest prices on self-drive car rentals and subscriptions in India!
          </p>
        </div>
      </div>
    </div>
  );
}
