import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardContent, Typography } from '@mui/material'

const stays = [
  { id: 1, name: 'Luxury Beachfront Villa', type: 'Villa', price: '₹20,000/night', image: '/placeholder.svg?height=200&width=300' },
  { id: 2, name: 'Cozy Budget Hostel', type: 'Hostel', price: '₹800/night', image: '/placeholder.svg?height=200&width=300' },
  { id: 3, name: '5-Star Resort & Spa', type: 'Resort', price: '₹15,000/night', image: '/placeholder.svg?height=200&width=300' },
  { id: 4, name: 'Charming Goan Cottage', type: 'Cottage', price: '₹5,000/night', image: '/placeholder.svg?height=200&width=300' },
]

function Stays() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Stays in Goa</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stays.map((stay) => (
          <Card key={stay.id}>
            <img src={stay.image} alt={stay.name} className="w-full h-48 object-cover" />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {stay.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" className="mb-2">
                Type: {stay.type}
              </Typography>
              <Typography variant="body2" color="textSecondary" className="mb-4">
                Price: {stay.price}
              </Typography>
              <Button variant="contained" color="primary" component={Link} to={`/stays/${stay.id}`}>
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Stays;
