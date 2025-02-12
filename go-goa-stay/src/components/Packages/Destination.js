import React from 'react';

// Example Destination component
export function Destination({
  id,
  name,
  description,
  image,
  rating,
  currentPrice,
  originalPrice,
  tourOptions,
  inclusions,
  timings,
  itinerary,
  pricing,
}) {
  return (
    <div className="destination-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Rating: {rating}</p>
      <div>
        <span>Current Price: ₹{currentPrice}</span>
        <span>Original Price: ₹{originalPrice}</span>
      </div>
      
      <h3>Tour Options</h3>
      <ul>
        {tourOptions.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
      
      <h3>Inclusions</h3>
      <ul>
        {inclusions.map((inclusion, index) => (
          <li key={index}>{inclusion}</li>
        ))}
      </ul>
      
      <h3>Timings</h3>
      <div>
        <p>Departure: {timings.departure}</p>
        <p>Return: {timings.return}</p>
      </div>

      <h3>Itinerary</h3>
      <ul>
        {itinerary.map((item, index) => (
          <li key={index}>
            <h4>Day {item.day}</h4>
            <ul>
              {item.activities.map((activity, idx) => (
                <li key={idx}>{activity}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <h3>Pricing</h3>
      <div>
        <p>Adult: ₹{pricing.adult}</p>
        <p>Child: ₹{pricing.child}</p>
        <p>Infant: ₹{pricing.infant}</p>
      </div>
    </div>
  );
}
