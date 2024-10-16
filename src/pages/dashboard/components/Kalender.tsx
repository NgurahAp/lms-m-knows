import React, { useState } from "react";
import { KalenderProps } from "../../../types/dashboard";

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
    title: "Dasar Desain Grafis",
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
  {
    date: "5",
    title: "Diskusi Kelompok Matematika",
    time: "15:00 - 16:00 WIB",
    pertemuan: "Pertemuan 2",
  },
];

export const Kalender: React.FC<KalenderProps> = ({ calendarData }) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date(2024, 10, 1)); // Oktober 1, 2025
  const [selectedDate, setSelectedDate] = useState<string>("1");

  const getWeekDates = (date: Date): Date[] => {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is sunday
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

  const filteredEvents = dummyEvents.filter(
    (event) => event.date === selectedDate
  );

  console.log("Calendar data: ", calendarData);

  return (
    <div className="mt-6 bg-white shadow-lg p-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Kalender Saya</h2>
        <a
          href="#lihat-semua text-2xl"
          className="text-blue-500 hover:underline"
        >
          Lihat Semua
        </a>
      </div>

      <div className=" p-4 rounded-lg">
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
            const hasEvents = dummyEvents.some(
              (event) => event.date === day.toString()
            );
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
        {filteredEvents.map((event, index) => (
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
                <p className=" text-blue-500">{event.time}</p>
                <h4 className="font-semibold py-3">{event.title}</h4>
                <p className=" text-gray-500">{event.pertemuan}</p>
              </div>
            </div>
            <button className="text-white px-5 rounded-lg  py-2 hover:underline bg-blue-500">
              Lihat
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
