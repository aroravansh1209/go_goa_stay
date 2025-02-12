import React from "react";
import "../../Styles/DateTimePicker.css"; // Importing the normal CSS file

export function DateTimePicker({ label, value, onChange }) {
    return (
      <div className="date-time-picker">
        <label>{label}</label>
        <input type="datetime-local" value={value} onChange={(e) => onChange(e.target.value)} />
      </div>
    );
  }