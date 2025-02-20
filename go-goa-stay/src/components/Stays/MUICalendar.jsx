import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function MUICalendar({ value, onChange }) {
  const [dateRange, setDateRange] = useState([value.from, value.to]);
  const [startDate, endDate] = dateRange;

  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          const newRange = [date, endDate];
          setDateRange(newRange);
          onChange({ from: date, to: endDate });
        }}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="Start Date"
      />
      <span>to</span>
      <DatePicker
        selected={endDate}
        onChange={(date) => {
          const newRange = [startDate, date];
          setDateRange(newRange);
          onChange({ from: startDate, to: date });
        }}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        placeholderText="End Date"
      />
    </div>
  );
}
