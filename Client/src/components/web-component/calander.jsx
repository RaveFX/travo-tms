import React, { useState, useEffect } from "react";

const Calendar = (props) => {
  const { Id, to, from, setFrom, setTo } = props;
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calander, setCalendar] = useState();

  const daysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendar = (year, month) => {
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const days = daysInMonth(year, month);
    const calendar = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      calendar.push(null);
    }

    for (let i = 1; i <= days; i++) {
      calendar.push(new Date(year, month, i));
    }

    return calendar;
  };

  const handleDateClick = (date) => {
    if (from != null && to != null) {
      setTo(null);
      setFrom(date);
    } else if (from === null) {
      setFrom(date);
    } else {
      if (from < date) {
        setTo(date);
      } else {
        setTo(from);
        setFrom(date);
      }
    }
  };

  useEffect(() => {
    // Update the calendar whenever currentDate changes
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const calendar = generateCalendar(currentYear, currentMonth);
    setCalendar(calendar);
  }, [currentDate]);

  const today = new Date();
  const calendar = generateCalendar(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );

  const nextMonth = () => {
    const nextDate = new Date(currentDate);
    nextDate.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(nextDate);
  };

  const previousMonth = () => {
    const previousDate = new Date(currentDate);
    previousDate.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(previousDate);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-4xl font-bold m-4">When do you want to go?</h1>
      <div className="flex">
        {from && (
          <div className="m-4 pr-6">From: {from.toLocaleDateString()}</div>
        )}
        {to && <div className="m-4 pl-6">To: {to.toLocaleDateString()}</div>}
      </div>

      <div className="flex flex-col w-[500px] rounded-[10%] bg-[#DADADA]">
        <div className="flex flex-row justify-between p-2 text-center font-semibold m-4">
          <button onClick={previousMonth}>Previous</button>
          {currentDate.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
          <button onClick={nextMonth}>Next</button>
        </div>
        <div className="grid grid-cols-7 gap-2 w-[500px] p-10 rounded-[10%]">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center font-semibold">
              {day}
            </div>
          ))}
          {calendar.map((date, index) => (
            <div
              key={index}
              className={`${date ? "cursor-pointer" : ""} ${
                from && date
                  ? from.getTime() === date.getTime()
                    ? "bg-[#2AB57D]"
                    : ""
                  : ""
              } ${
                to && date
                  ? to.getTime() === date.getTime()
                    ? "bg-[#2AB57D]"
                    : ""
                  : ""
              } ${
                from && to && date
                  ? from.getTime() < date.getTime() &&
                    to.getTime() > date.getTime()
                    ? "bg-[#2AB57D] opacity-[30%]"
                    : ""
                  : ""
              } rounded-full text-center font-medium py-2`}
              onClick={() => handleDateClick(date)}
            >
              {date ? date.getDate() : ""}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
