import React, { useState } from "react";
import { CalendarProps, CalendarData } from "../../../types/dashboard";

export const Calendar: React.FC<CalendarProps> = ({ calendarData }) => {
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

  const filteredEvents = calendarData.filter((event: CalendarData) => {
    const eventDate = new Date(event.startAt);
    return (
      eventDate.getDate().toString() === selectedDate &&
      eventDate.getMonth() === currentDate.getMonth() &&
      eventDate.getFullYear() === currentDate.getFullYear()
    );
  });

  return (
    <div className="mt-6 bg-white shadow-lg md:p-8 p-4 min-h-2/5">
      <div className="md:flex justify-between items-center mb-4">
        <h2 className="md:text-2xl text-xl font-semibold">Kalender Saya</h2>
        <a
          href="#lihat-semua"
          className="text-blue-500 md:text-base text-sm hover:underline"
        >
          Lihat Semua
        </a>
      </div>

      <div className="md:p-4 rounded-lg">
        {/* Header Kalender */}
        <div className="flex justify-between items-center mb-8">
          <button onClick={handlePrevWeek} className="text-gray-500">
            &lt;
          </button>
          <h3 className="md:text-lg font-medium">
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
        <div className="grid grid-cols-7 text-center md:text-lg text-sm mb-2">
          {["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"].map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2 text-center md:text-lg text-sm text-gray-600">
          {weekDates.map((date) => {
            const day = date.getDate();
            const isSelected = day.toString() === selectedDate;
            const hasEvents = calendarData.some((event: CalendarData) => {
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
                className="flex flex-col items-center h-10"
              >
                <button
                  onClick={() => handleDateClick(date)}
                  className={`md:w-8 w-5 md:h-10 h-6 flex items-center justify-center md:rounded-xl rounded-md ${
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
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event: CalendarData, index: number) => (
            <div
              key={index}
              className="bg-white p-4 mt-4 rounded-lg shadow md:flex justify-between items-center"
            >
              <div className="flex items-center ">
                <div>
                  <img
                    src="/dashboard/calender-info.png"
                    className="pr-5 hidden md:block"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-blue-500 ">
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
                  <h4 className="font-semibold md:py-3 pr-5 py-1 md:text-base text-sm">
                    {event.summary}
                  </h4>
                  <p className="text-gray-500 md:text-base md:pb-0 pb-2 text-sm">
                    {event.place}
                  </p>
                </div>
              </div>
              <button className="text-white md:px-5 px-3 rounded-lg md:py-2 py-1 hover:underline bg-blue-500 md:text-base text-sm">
                Lihat
              </button>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center md:pt-10 pt-5 ">
            <img src="/dashboard/empty-state.png" className="w-1/3" alt="" />
            <h1 className="text-gray-500 md:text-lg text-sm py-3">
              Anda belum mengamil pelatihan{" "}
            </h1>
            <button className="bg-blue-500  text-white md:text-base text-xs py-2 md:px-7 px-4 rounded-lg ">
              Ikuti Pelatihan
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
