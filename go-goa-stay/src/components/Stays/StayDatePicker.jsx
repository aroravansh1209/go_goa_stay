import React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import "../../Styles/StayDatePicker.css"

export function DatePicker({ date, setDate }) {
  return (
    <div className="StayDatePicker popover">
      <button
        className={`StayDatePicker__trigger ${
          !date ? "StayDatePicker__trigger--empty" : ""
        }`}
        onClick={(e) => setDate(date)}
      >
        <CalendarIcon className="StayDatePicker__icon" />
        {date ? format(date, "PPP") : <span>Pick a date</span>}
      </button>
      <div className="StayDatePicker__popoverContent">
        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
      </div>
    </div>
  );
}
