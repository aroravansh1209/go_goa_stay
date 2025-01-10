import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">About GoGoaStay</h3>
            <p>Your ultimate travel companion for exploring the beautiful state of Goa.</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/stays" className="hover:underline">Stays</Link></li>
              <li><Link to="/rentals" className="hover:underline">Rentals</Link></li>
              <li><Link to="/activities" className="hover:underline">Activities</Link></li>
              <li><Link to="/cruises" className="hover:underline">Cruises</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p>&copy; 2023 GoGoaStay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

