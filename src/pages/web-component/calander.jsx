import React, { useState } from 'react';

const Calendar = () => {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);

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
    if (from === null) {
        setFrom(date);
    }
    else {
        setTo(date);
    }
  };

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  const calendar = generateCalendar(currentYear, currentMonth);

  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-4xl font-bold m-4">When do you want to go?</h1>
      <div className='flex '>
        {from && (
                <div className="mt-4 gap-4">
                From: {from.toLocaleDateString()}
                </div>
            )}
        {to && (
                <div className="mt-4 gap-4">
                To: {to.toLocaleDateString()}
                </div>
            )}
        </div>
      <div className="grid grid-cols-7 gap-2 w-[500px] p-10 rounded-[10%] bg-[#DADADA]">
        
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center font-semibold">
            {day}
          </div>
        ))}
        {calendar.map((date, index) => (
          <div
            key={index}
            className={`${
              date ? 'cursor-pointer' : ''
            } ${
                from && date ? from.getTime() === date.getTime() ? 'bg-[#2AB57D]' : '' : ''
            } ${
                to && date ? to.getTime() === date.getTime() ? 'bg-[#2AB57D]' : '' : ''
            } ${
                from && to && date ? from.getTime() < date.getTime() && to.getTime() > date.getTime()  ? 'bg-[#2AB57D] opacity-[30%]' : '' : ''
            } rounded-full text-center font-medium py-2`}
            onClick={() => handleDateClick(date)}
          >
            {console.log(date)}
            {console.log(from)}
            {date ? date.getDate() : ''}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Calendar;
