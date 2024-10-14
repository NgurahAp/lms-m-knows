import React, { useState } from "react";

interface Event {
  date: string;
  title: string;
  time: string;
  pertemuan: string;
}

const dummyEvents: Event[] = [
  {
    date: "1",
    title: "Perkenalan Budaya Jepang",
    time: "14:30 - 15:30 WIB",
    pertemuan: "Pertemuan 1",
  },
  {
    date: "1",
    title: "Webinar Cyber Security",
    time: "16:00 - 17:00 WIB",
    pertemuan: "Pertemuan 1",
  },
  {
    date: "2",
    title: "Workshop UI/UX Design",
    time: "10:00 - 12:00 WIB",
    pertemuan: "Pertemuan 1",
  },
];

export const Kalender: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("1");
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date(2025, 11, 1)); // December 2025

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const handleDateClick = (day: number) => {
    setSelectedDate(day.toString());
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const filteredEvents = dummyEvents.filter(
    (event) => event.date === selectedDate
  );

  return (
    <div className="mt-6 bg-white shadow-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Kalender Saya</h2>
        <a href="#lihat-semua" className="text-blue-500 hover:underline">
          Lihat Semua
        </a>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        {/* Header Kalender */}
        <div className="flex justify-between items-center mb-2">
          <button onClick={handlePrevMonth} className="text-gray-500">
            &lt;
          </button>
          <h3 className="text-lg font-medium">
            {currentMonth.toLocaleString("id-ID", {
              month: "long",
              year: "numeric",
            })}
          </h3>
          <button onClick={handleNextMonth} className="text-gray-500">
            &gt;
          </button>
        </div>

        {/* Grid Kalender */}
        <div className="grid grid-cols-7 text-center text-sm mb-2">
          {["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"].map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2 text-center text-gray-600">
          {[...Array(firstDayOfMonth)].map((_, index) => (
            <span key={`empty-${index}`} className="text-gray-300"></span>
          ))}
          {[...Array(daysInMonth)].map((_, index) => {
            const day = index + 1;
            const isSelected = day.toString() === selectedDate;
            const hasEvents = dummyEvents.some(
              (event) => event.date === day.toString()
            );

            return (
              <button
                key={day}
                onClick={() => handleDateClick(day)}
                className={`rounded-full p-1 ${
                  isSelected
                    ? "bg-blue-500 text-white"
                    : hasEvents
                    ? "bg-gray-200"
                    : ""
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>

        {/* Event Cards */}
        {filteredEvents.map((event, index) => (
          <div
            key={index}
            className="bg-white p-4 mt-4 rounded-lg shadow flex justify-between items-center"
          >
            <div>
              <p className="text-sm text-blue-500">{event.time}</p>
              <h4 className="font-semibold">{event.title}</h4>
              <p className="text-sm text-gray-500">{event.pertemuan}</p>
            </div>
            <button className="text-blue-500 hover:underline">Lihat</button>
          </div>
        ))}
      </div>
    </div>
  );
};
