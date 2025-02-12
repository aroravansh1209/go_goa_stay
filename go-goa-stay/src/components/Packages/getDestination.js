import React, { useState, useEffect } from 'react';
import { getDestinations } from './getDestinations'; // path to the function

export function DestinationsList() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      const data = await getDestinations();
      setDestinations(data);
    };

    fetchDestinations();
  }, []);

  return (
    <div>
      <h2>Our Destinations</h2>
      <ul>
        {destinations.map((destination, index) => (
          <li key={index}>{destination.name}</li>
        ))}
      </ul>
    </div>
  );
}
