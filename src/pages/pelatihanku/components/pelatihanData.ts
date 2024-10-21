export interface Training {
  id: number;
  title: string;
  instructor: string;
  credits: number;
  videos: number;
  participants: number;
  completion: number;
}

export const trainingOngoing: Training[] = [
  {
    id: 1,
    title: "Pelatihan Keterampilan Komunikasi",
    instructor: "Indah Sartien, S.Ak, M.Ak",
    credits: 3,
    videos: 14,
    participants: 80,
    completion: 25,
  },
  {
    id: 2,
    title: "Pelatihan Keterampilan Presentasi",
    instructor: "Neneng Rohaye S.Kom",
    credits: 3,
    videos: 14,
    participants: 80,
    completion: 25,
  },
  {
    id: 3,
    title: "Pelatihan Keterampilan Presentasi",
    instructor: "Neneng Rohaye S.Kom",
    credits: 3,
    videos: 14,
    participants: 80,
    completion: 25,
  },
];

export const trainingCompleted: Training[] = [
  {
    id: 4,
    title: "Pelatihan Keterampilan Negosiasi",
    instructor: "Dedi Purwanto, S.E",
    credits: 2,
    videos: 10,
    participants: 50,
    completion: 100,
  },
  {
    id: 5,
    title: "Pelatihan Manajemen Waktu",
    instructor: "Hani Faisal, S.Psi",
    credits: 2,
    videos: 8,
    participants: 60,
    completion: 100,
  },
];
