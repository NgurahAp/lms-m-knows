import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";

const teamsData = [
  {
    id: 1,
    name: "Tim Roleplay 1",
    members: [
      "Rizki Pratama",
      "Wizil Pratama",
      "Meyza Pratama",
      "Alfatih Pratama",
    ],
    notes: "",
    isFull: true,
  },
  {
    id: 2,
    name: "Tim Roleplay 2",
    members: ["Cahyadi", "Guntoro Abdul", "Tersedia", "Tersedia"],
    notes: "Sudah di-booking untuk John dan Lukas yaa",
    isFull: false,
  },
];

export const DaftarRoleplay: React.FC = () => {
const [teams, setTeams] = useState(teamsData);

  const handleNotesChange = (id: number, value: string) => {
    setTeams((prev) =>
      prev.map((team) =>
        team.id === id ? { ...team, notes: value } : team
      )
    );
  };

  return (
    <div className="w-screen flex flex-col md:pt-44 pt-24 md:pb-4 md:px-36 px-8 bg-gray-100">
      {/* Breadcrumb */}
      <div className="bg-white w-full h-14 flex items-center pl-5 rounded-xl">
        <Link to="/dashboard" className="flex items-center">
          <img
            src="/pelatihanku/home.png"
            className="md:w-6 w-5 -mt-1 "
            alt="Home"
          />
          <span className="md:pl-5 pl-3 text-blue-500 md:text-base text-sm font-semibold">
            Beranda
          </span>
        </Link>
        <FaChevronRight className="text-gray-300 mx-4" />
        <span className="text-[#9CA3AF] md:text-base text-sm font-semibold">
          Roleplay
        </span>
        <FaChevronRight className="text-gray-300 mx-4" />
        <span className="text-[#9CA3AF] md:text-base text-sm font-semibold">
          Roleplay Kewirausahaan
        </span>
        <FaChevronRight className="text-gray-300 mx-4" />
        <span className="text-[#9CA3AF] md:text-base text-sm font-semibold">
          Pilih Rekan
        </span>
      </div>

      {/* Header */}
      <div className="bg-white w-full h-72 items-center justify-between p-9 mt-5 rounded-xl mb-4">
        <h1 className="md:text-lg text-sm font-semibold">
          Roleplay Kewirausahaan
        </h1>
        <div className="mt-5">
          <p className="text-lg mt-2">
            Mata Kuliah : Pendidikan Kewarganegaraan
          </p>
          <p className="text-lg mt-2">
            Peran : Peran Satu, Peran Dua, Peran Tiga
          </p>
          <p className="text-lg mt-2">Kode Roleplay : 12AFS5</p>
          <p className="text-lg mt-2">
            Deskirpsi : Resolusi Konflik di Tempat Kerja Dalam tim kerja Anda,
            terjadi konflik antara dua anggota tim, yaitu Alex dan Dana. Alex
            merasa bahwa Dana tidak memberikan kontribusi yang cukup dan merasa
            frustrasi.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-lg w-full md:pb-10 flex flex-col items-center p-6">
        <h1 className="text-2xl font-semibold mb-6 mt-6">
          Pilih Rekan Roleplay
        </h1>
        <div className="w-full max-w-5xl space-y-6">
          {teams.map((team) => (
            <div
              key={team.id}
              className="bg-white rounded-lg p-6 border border-gray-200"
            >
              <div className="flex items-center mb-4 justify-between">
                <div className="flex">
                  <h2 className="text-lg font-semibold">{team.name}</h2>
                  <FaInfoCircle className="text-lg text-blue-600 ml-4 mt-1" />
                </div>
                <div className="w-1/2">
                  <h2 className="text-lg font-semibold">Catatan</h2>
                </div>
              </div>

              {/* Members */}
              <div className="flex justify-between">
                <div className="w-96 grid gap-4 mb-4">
                  {team.members.map((member, index) => (
                    <div key={index} className="flex items-center gap-4">
                      {/* Box Nama */}
                      <div
                        className={`flex items-center p-2 border rounded-lg text-center ${
                          member === "Tersedia" ? "text-gray-400" : "text-black"
                        }`}
                        style={{
                          width: "400px", // Set panjang seragam
                        }}
                      >
                        {member !== "Tersedia" && (
                          <FaUsers className="mr-4 items-center text-lg text-gray-500" />
                        )}
                        <span>{member}</span>
                      </div>

                      {/* Checkbox */}
                      <input
                        type="checkbox"
                        className="form-checkbox text-blue-600 rounded"
                        disabled={member === "Tersedia"} // Disable if "Tersedia"
                        onChange={(e) => {
                          console.log(
                            `${member} is ${
                              e.target.checked ? "selected" : "unselected"
                            }`
                          );
                        }}
                      />
                    </div>
                  ))}

                  <select
                    className="border rounded-lg p-2 text-gray-600"
                    disabled={team.isFull}
                  >
                    <option>
                      <FaCalendar className="text-lg text-gray-500" /> Pilih
                      Jadwal
                    </option>
                    <option>Jadwal 1</option>
                    <option>Jadwal 2</option>
                  </select>
                </div>

                {/* Actions */}
                <div className="w-3/6">
                  {/* Notes */}
                  <textarea
                    className="w-full h-52 border rounded-lg p-2 mb-4 text-gray-700"
                    placeholder="Tulis catatan"
                    value={team.notes}
                    onChange={(e) => handleNotesChange(team.id, e.target.value)}
                  />
                  <a
                    href={team.isFull ? "#" : "/konfir-roleplay"}
                    className={`w-full px-4 py-2 rounded-lg text-white text-center block ${
                      team.isFull
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-500 hover:bg-blue-600"
                    }`}
                    onClick={(e) => {
                      if (team.isFull) e.preventDefault();
                    }}
                  >
                    {team.isFull ? "Tim Penuh" : "Konfirmasi"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
