import React, { useState } from "react";
import { Users } from "lucide-react";

export function GuestSelector() {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const handleChange = (type) => {
    return (value) => {
      if (type === "adults") {
        setAdults(Math.max(1, value));
      } else {
        setChildren(Math.max(0, value));
      }
    };
  };

  return (
    <div className="StayGuestSelector">
      <div className="StayGuestSelector__popover">
        <button className="StayGuestSelector__button">
          <Users className="StayGuestSelector__icon" />
          {adults + children} Guest{adults + children !== 1 ? "s" : ""}
        </button>
      </div>
      <div className="StayGuestSelector__popoverContent">
        <div className="StayGuestSelector__grid">
          <div className="StayGuestSelector__section">
            <h4 className="StayGuestSelector__heading">Guests</h4>
            <p className="StayGuestSelector__text">
              Add the number of guests for your stay.
            </p>
          </div>
          <div className="StayGuestSelector__inputGroup">
            <div className="StayGuestSelector__inputRow">
              <label htmlFor="adults" className="StayGuestSelector__label">Adults</label>
              <input
                id="adults"
                type="number"
                value={adults}
                onChange={(e) => handleChange("adults")(Number.parseInt(e.target.value))}
                className="StayGuestSelector__input"
              />
            </div>
            <div className="StayGuestSelector__inputRow">
              <label htmlFor="children" className="StayGuestSelector__label">Children</label>
              <input
                id="children"
                type="number"
                value={children}
                onChange={(e) => handleChange("children")(Number.parseInt(e.target.value))}
                className="StayGuestSelector__input"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
