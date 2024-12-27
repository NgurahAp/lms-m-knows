import React from "react";
import { FaInfoCircle, FaUsers, FaCalendar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../../components/reusable/BreadCrumbs";
import { useRoleplayResponse } from "../../services/PilihRoleplayService";
import { useTeamsResponse } from "../../services/TimRoleplayService";
import { Team } from "../../types/timroleplay";

export const DaftarRoleplay: React.FC = () => {
  const { roleplayId } = useParams<{
    roleplayId: string;
  }>();

  const { data: roleplayResponse, isLoading: isLoadingRoleplay } =
    useRoleplayResponse(roleplayId);
  const { data: teamsResponse, isLoading: isLoadingTeams } = useTeamsResponse();

  const breadcrumbItems = [
    { label: "Beranda", path: "/dashboard" },
    { label: "Roleplay dan Assessmen", path: "/roleplay-asses" },
    { label: "Pilih Roleplay", path: "/pilih-roleplay" },
    { label: "Roleplay Kewirausahaan" },
  ];

  const handleNotesChange = (teamId: string, value: string) => {
    console.log(`Changing notes for team ${teamId} to: ${value}`);
    // Implement logic here
  };

  const isTeamFull = (team: Team) => team.members.length === 4;

  if (isLoadingRoleplay || isLoadingTeams) {
    return <div>Loading...</div>;
  }

  const roleplay = roleplayResponse?.roleplay;
  const teams = teamsResponse?.teams ?? [];

  return (
    <div className="w-screen flex flex-col md:pt-44 pt-24 md:pb-4 md:px-36 px-4 bg-gray-100">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Header Roleplay */}
      <div className="bg-white w-full p-6 md:p-9 mt-5 rounded-xl mb-4">
        <div key={roleplay?.id}>
          <h1 className="text-sm md:text-lg font-semibold">
            {roleplay?.subject_name}
          </h1>
          <div className="mt-5 space-y-2">
            <div className="text-sm md:text-lg flex flex-wrap">
              <span className="w-full md:w-40 flex justify-between">
                <span className="font-semibold">Mata Kuliah</span>
                <span className="mr-5">:</span>
              </span>
              <span>{roleplay?.session_title}</span>
            </div>
            <div className="text-sm md:text-lg flex flex-wrap">
              <span className="w-full md:w-40 flex justify-between">
                <span className="font-semibold">Peran</span>
                <span className="mr-5">:</span>
              </span>
              <span>-</span>
            </div>
            <div className="text-sm md:text-lg flex flex-wrap">
              <span className="w-full md:w-40 flex justify-between">
                <span className="font-semibold">Kode Roleplay</span>
                <span className="mr-5">:</span>
              </span>
              <span>{roleplay?.id}</span>
            </div>
            <div className="text-sm md:text-lg flex flex-wrap">
              <span className="w-full md:w-40 flex justify-between">
                <span className="font-semibold">Deskripsi</span>
                <span className="mr-5">:</span>
              </span>
              <span>{roleplay?.description}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tim Roleplay */}
      <div className="bg-white rounded-lg shadow-lg w-full p-4 md:p-6">
        <h1 className="text-lg md:text-2xl font-semibold mb-6 mt-6 text-center">
          Pilih Rekan Roleplay
        </h1>
        <div className="w-full space-y-6 overflow-x-auto">
          {teams.map((team) => (
            <TeamCard
              key={team.id}
              team={team}
              isTeamFull={isTeamFull(team)}
              onNotesChange={handleNotesChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// TeamCard Component

type TeamCardProps = {
  team: Team;
  isTeamFull: boolean;
  onNotesChange: (teamId: string, value: string) => void;
};

const TeamCard: React.FC<TeamCardProps> = ({
  team,
  isTeamFull,
  onNotesChange,
}) => {
  const handleConfirmClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    scheduleSelected: boolean
  ) => {
    if (!scheduleSelected) {
      e.preventDefault();
      alert("Jadwal roleplay tidak valid");
    } else {
      alert("Kamu sudah terdaftar pada tim roleplay ini");
    }
  };

  const [selectedSchedule, setSelectedSchedule] = React.useState<string>("");

  return (
    <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200">
      <div className="flex flex-col md:flex-row items-start md:items-center mb-4 justify-between">
        <div className="flex md:flex-row items-start md:items-center">
          <h2 className="text-base md:text-lg font-semibold">
            Tim Roleplay {team.number}
          </h2>
          <FaInfoCircle className="text-base md:text-lg text-blue-600 ml-4 mt-1" />
        </div>
        <div className="mt-2 md:mt-0 md:w-1/2">
          <h2 className="text-xs md:text-lg font-semibold md:text-black text-white">Catatan</h2>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-2/5 grid gap-4 mb-4">
          {team.members.map((member) => (
            <div key={member.id} className="flex items-center gap-4">
              <div className="flex items-center p-2 border rounded-lg text-center w-full text-black">
                <FaUsers className="mr-2 text-sm md:text-lg text-gray-500" />
                <span>{member.full_name}</span>
              </div>
              <input
                type="checkbox"
                className="form-checkbox text-blue-600 rounded"
              />
            </div>
          ))}

          <div className="flex items-center gap-4">
            <div className="flex items-center w-full bg-gray-100 border rounded-lg p-2">
              <FaUsers className="text-gray-400 text-sm md:text-lg mr-2" />
              <input
                type="text"
                className="w-full bg-gray-100 text-gray-400 border-none outline-none"
                value="Tersedia"
                disabled
              />
            </div>
            <input
              type="checkbox"
              className="form-checkbox text-gray-400 rounded"
              disabled
            />
          </div>

          <div className="flex items-center w-full border rounded-lg p-2">
            <FaCalendar className="text-gray-500 text-sm md:text-lg mr-2" />
            <select
              className="w-full text-gray-600 bg-transparent border-none outline-none"
              value={selectedSchedule}
              onChange={(e) => setSelectedSchedule(e.target.value)}
            >
              <option value="">Pilih Jadwal</option>
              {team.schedules.map((schedule) => (
                <option key={schedule.id} value={schedule.id}>
                  {`${schedule.date} - ${schedule.time} (${schedule.total_votes} votes)`}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="w-full md:w-3/6 mt-4 md:mt-0">
          <textarea
            className="w-full h-52 border rounded-lg p-2 mb-4 text-gray-700"
            placeholder="Tulis catatan"
            onChange={(e) => onNotesChange(team.id, e.target.value)}
          />
          <a
            href={isTeamFull ? "#" : "/konfir-roleplay"}
            className={`w-full px-4 py-2 rounded-lg text-white text-center block ${
              isTeamFull
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            onClick={(e) => handleConfirmClick(e, !!selectedSchedule)}
          >
            {isTeamFull ? "Tim Penuh" : "Konfirmasi"}
          </a>
        </div>
      </div>
    </div>
  );
};
