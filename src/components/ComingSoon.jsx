import { useState } from "react";
import { Mail } from "lucide-react";
import "../Styles/ComingSoon.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the email submission
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <>
      <Navbar />
      <div className="coming-soon-container">
        <div className="coming-soon-content">
          <h1 className="coming-soon-title">Coming Soon</h1>
          <p className="coming-soon-description">
            We're working hard to bring you an amazing experience. Stay tuned for updates!
          </p>
          
          <div className="coming-soon-features">
            <div className="coming-soon-feature">
              <h3>Luxury Stays</h3>
              <p>Experience premium accommodations in Goa</p>
            </div>
            <div className="coming-soon-feature">
              <h3>Exclusive Packages</h3>
              <p>Curated travel packages for the perfect getaway</p>
            </div>
            <div className="coming-soon-feature">
              <h3>Local Experiences</h3>
              <p>Discover authentic Goan culture and activities</p>
            </div>
          </div>

          <div className="coming-soon-newsletter">
            <h2>Get Notified When We Launch</h2>
            <form onSubmit={handleSubmit} className="coming-soon-form">
              <div className="coming-soon-input-group">
                <Mail className="coming-soon-icon" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="coming-soon-input"
                />
              </div>
              <button type="submit" className="coming-soon-button">
                Notify Me
              </button>
            </form>
            {isSubmitted && (
              <p className="coming-soon-success">
                Thank you! We'll notify you when we launch.
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 