export const Kalender = () => {
  const events = [
    {
      date: "1",
      title: "Perkenalan Budaya Jepang",
      time: "14:30 - 15:30 WIB",
      pertemuan: "Pertemuan 1",
    },
    {
      date: "1",
      title: "Webinar Cyber Security",
      time: "14:30 - 15:30 WIB",
      pertemuan: "Pertemuan 1",
    },
    {
      date: "1",
      title: "Perkenalan Budaya Jepang",
      time: "14:30 - 15:30 WIB",
      pertemuan: "Pertemuan 1",
    },
  ];

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
          <button className="text-gray-500">&lt;</button>
          <h3 className="text-lg font-medium">December 2025</h3>
          <button className="text-gray-500">&gt;</button>
        </div>

        {/* Grid Kalender */}
        <div className="grid grid-cols-7 text-center text-sm mb-2">
          <span>Min</span>
          <span>Sen</span>
          <span>Sel</span>
          <span>Rab</span>
          <span>Kam</span>
          <span>Jum</span>
          <span>Sab</span>
        </div>

        <div className="grid grid-cols-7 gap-2 text-center text-gray-600">
          <span className="text-gray-300">31</span>
          <span className="bg-blue-500 text-white rounded-full p-1">1</span>
          <span className="bg-gray-200 rounded-full p-1">2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
        </div>

        {/* Event Cards */}
        {events.map((event, index) => (
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
