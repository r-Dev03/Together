import React from "react";
import DayCard from "./DayCard";

const DayCardList = ({ data, firstDayOfMonth }) => {
  // Use for generating empty divs to fill days from previous month
  const DAYS = {
    Mon: 0,
    Tue: 1,
    Wed: 2,
    Thu: 3,
    Fri: 4,
    Sat: 5,
    Sun: 6,
  };
  const daysFromPrevMonth = Array.from(
    { length: DAYS[firstDayOfMonth] },
    (_, i) => i + 1
  );

  return (
    <div className="grid flex-grow w-full h-auto grid-cols-7 grid-rows-5 gap-px pt-px mt-1 bg-gray-200">
      {/* Empty div used for days that are not in the month */}
      {daysFromPrevMonth.map(day => (
        <div key={`day-${day}`}></div>
      ))}

      {data.map(dayData => (
        <DayCard key={dayData.day} {...dayData} />
      ))}
    </div>
  );
};

export default DayCardList;
