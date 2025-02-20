import React, { useState } from "react";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import "../../Styles/StayDateRange.css"
import { MUICalendar } from "./MUICalendar";

export function DateRangePicker({ className }) {
  const [date, setDate] = useState({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  return (
    <div className={`StaydateRange ${className}`}>
      <div className="StaydateRange__popover">
        <button
          id="date"
          className={`StaydateRange__button ${
            !date ? "StaydateRange__button--empty" : ""
          }`}
        >
          <CalendarIcon className="StaydateRange__icon" />
          {date?.from ? (
            date.to ? (
              <>
                {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
              </>
            ) : (
              format(date.from, "LLL dd, y")
            )
          ) : (
            <span>Pick a date</span>
          )}
        </button>
        <div className="StaydateRange__popoverContent">
        <MUICalendar onChange={setDate} value={date} />
        </div>
      </div>
    </div>
  );
}
