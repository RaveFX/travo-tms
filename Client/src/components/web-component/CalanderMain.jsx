import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const appointmentData = [
  // {
  //   title: 'Appointment 1',
  //   start: new Date(2023, 7, 28, 10, 0), // year, month (0-indexed), day, hour, minute
  //   end: new Date(2023, 7, 28, 11, 0),
  // },
  // {
  //   title: 'Appointment 2',
  //   start: new Date(2023, 7, 29, 15, 0),
  //   end: new Date(2023, 7, 29, 16, 0),
  // },
  // Add more appointment objects as needed
];

const CalanderMain = () => {
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="text-[#578B6A] font-[700] text-[24px] ">Calendar</div>
      <div className="mt-4">
        <Calendar
          localizer={localizer}
          events={appointmentData}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500}} // Set the height of the calendar
          className=''
        />
      </div>
    </div>
  );
};

export default CalanderMain;