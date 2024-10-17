import React, { useState } from "react";
import { KalenderProps, CalendarEvent } from "../../../types/dashboard";


export const Kalender: React.FC<KalenderProps> = ({ calendarData }) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<string>(
    currentDate.getDate().toString()
  );

  const getWeekDates = (date: Date): Date[] => {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(date.setDate(diff));
    const week = [];
    for (let i = 0; i < 7; i++) {
      week.push(
        new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + i)
      );
    }
    return week;
  };

  const weekDates = getWeekDates(currentDate);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date.getDate().toString());
  };

  const handlePrevWeek = () => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 7)));
  };

  const handleNextWeek = () => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 7)));
  };

  const filteredEvents = calendarData.filter((event: CalendarEvent) => {
    const eventDate = new Date(event.startAt);
    return (
      eventDate.getDate().toString() === selectedDate &&
      eventDate.getMonth() === currentDate.getMonth() &&
      eventDate.getFullYear() === currentDate.getFullYear()
    );
  });

  return (
    <div className="mt-6 bg-white shadow-lg p-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Kalender Saya</h2>
        <a href="#lihat-semua" className="text-blue-500 hover:underline">
          Lihat Semua
        </a>
      </div>

      <div className="p-4 rounded-lg">
        {/* Header Kalender */}
        <div className="flex justify-between items-center mb-8">
          <button onClick={handlePrevWeek} className="text-gray-500">
            &lt;
          </button>
          <h3 className="text-lg font-medium">
            {weekDates[0].toLocaleDateString("id-ID", {
              month: "long",
              year: "numeric",
            })}
          </h3>
          <button onClick={handleNextWeek} className="text-gray-500">
            &gt;
          </button>
        </div>

        {/* Grid Kalender */}
        <div className="grid grid-cols-7 text-center text-lg mb-2">
          {["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"].map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2 text-center text-lg text-gray-600">
          {weekDates.map((date) => {
            const day = date.getDate();
            const isSelected = day.toString() === selectedDate;
            const hasEvents = calendarData.some((event: CalendarEvent) => {
              const eventDate = new Date(event.startAt);
              return (
                eventDate.getDate() === day &&
                eventDate.getMonth() === date.getMonth() &&
                eventDate.getFullYear() === date.getFullYear()
              );
            });
            const isCurrentMonth = date.getMonth() === currentDate.getMonth();

            return (
              <div
                key={date.toISOString()}
                className="flex flex-col items-center"
              >
                <button
                  onClick={() => handleDateClick(date)}
                  className={`w-8 h-10 flex items-center justify-center rounded-xl ${
                    isSelected ? "bg-blue-500 text-white" : "hover:bg-gray-200"
                  } ${!isCurrentMonth ? "text-gray-400" : ""}`}
                >
                  {day}
                </button>
                {hasEvents && (
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-1"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Event Cards */}
        {filteredEvents.map((event: CalendarEvent, index: number) => (
          <div
            key={index}
            className="bg-white p-4 mt-4 rounded-lg shadow flex justify-between items-center"
          >
            <div className="flex items-center ">
              <div>
                <img
                  src="/dashboard/calender-info.png"
                  className="pr-3"
                  alt=""
                />
              </div>
              <div>
                <p className="text-blue-500">
                  {new Date(event.startAt).toLocaleTimeString("id-ID", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}{" "}
                  -
                  {new Date(event.endAt).toLocaleTimeString("id-ID", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}{" "}
                  WIB
                </p>
                <h4 className="font-semibold py-3">{event.summary}</h4>
                <p className="text-gray-500">{event.place}</p>
              </div>
            </div>
            <button className="text-white px-5 rounded-lg py-2 hover:underline bg-blue-500">
              Lihat
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
