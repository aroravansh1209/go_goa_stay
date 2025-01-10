import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, CardHeader, Typography } from '@mui/material'

function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to GoGoaStay</h1>
        <p className="text-xl mb-6">Your ultimate travel companion for exploring the beautiful state of Goa</p>
        <Button variant="contained" color="primary" component={Link} href="/stays">
          Book Your Stay Now
        </Button>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Stays', description: 'Find your perfect accommodation', link: '/stays' },
            { title: 'Vehicle Rentals', description: 'Explore Goa on your terms', link: '/rentals' },
            { title: 'Adventure Activities', description: 'Experience thrilling adventures', link: '/activities' },
            { title: 'Cruises', description: 'Enjoy scenic water experiences', link: '/cruises' },
          ].map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <Typography variant="h6">{service.title}</Typography>
              </CardHeader>
              <CardContent>
                <Typography variant="body2">{service.description}</Typography>
                <Button variant="text" component={Link} href={service.link} className="mt-2">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Why Choose GoGoaStay?</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc list-inside">
          <li>Wide range of accommodation options</li>
          <li>Exciting adventure activities</li>
          <li>Convenient vehicle rentals</li>
          <li>Unforgettable cruise experiences</li>
          <li>Local expertise and support</li>
          <li>Best price guarantee</li>
        </ul>
      </section>
    </div>
  )
}

export default Home;
