import React from 'react';
import PropTypes from 'prop-types';

export function GoaPackage({
  id,
  name,
  duration,
  description,
  image,
  price,
  rating,
  highlights,
  inclusions,
  itinerary,
  accommodation,
  transportation
}) {
  return (
    <div className="goa-package">
      <img src={image} alt={name} className="package-image" />
      <h2>{name}</h2>
      <p>{duration}</p>
      <p>{description}</p>
      <p>Price: ₹{price}</p>
      <p>Rating: {rating}</p>

      <h3>Highlights</h3>
      <ul>
        {highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>

      <h3>Inclusions</h3>
      <ul>
        {inclusions.map((inclusion, index) => (
          <li key={index}>{inclusion}</li>
        ))}
      </ul>

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

      <p>Accommodation: {accommodation}</p>
      <p>Transportation: {transportation}</p>
    </div>
  );
}

// Prop Types Validation
GoaPackage.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
  inclusions: PropTypes.arrayOf(PropTypes.string).isRequired,
  itinerary: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      activities: PropTypes.arrayOf(PropTypes.string).isRequired
    })
  ).isRequired,
  accommodation: PropTypes.string.isRequired,
  transportation: PropTypes.string.isRequired
};

