import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">GoGoaStay</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/stays" className="hover:underline">Stays</Link></li>
              <li><Link to="/rentals" className="hover:underline">Rentals</Link></li>
              <li><Link to="/activities" className="hover:underline">Activities</Link></li>
              <li><Link to="/cruises" className="hover:underline">Cruises</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
          <Button variant="secondary">Book Now</Button>
        </div>
      </div>
    </header>
  )
}

export default Header;

