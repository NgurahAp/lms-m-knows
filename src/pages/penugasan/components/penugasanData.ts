// Definisikan interface untuk Penugasan
export interface Penugasan {
  id: number;
  title: string;
  modul: string;
  status: string;
  endAt: string;
}

// Data Penugasan dengan waktu mulai dan selesai yang berbeda
export const PenugasanData: Penugasan[] = [
  {
    id: 1,
    title: "Dasar Komunikasi",
    modul: "Tugas Modul 1",
    status: "ditugaskan",
    endAt: "2024-10-25 11:00",
  },
  {
    id: 2,
    title: "Pemrograman Dasar",
    modul: "Tugas Modul 2",
    status: "Sedang dinilai",
    endAt: "2024-11-01 16:00",
  },
  {
    id: 3,
    title: "Matematika Komputasi",
    modul: "Tugas Modul 3",
    status: "Terlambat",
    endAt: "2024-11-03 12:00",
  },
  {
    id: 4,
    title: "Pemrograman Web",
    modul: "Tugas Modul 4",
    status: "Selesai",
    endAt: "2024-10-30 11:30",
  },
  {
    id: 5,
    title: "Algoritma dan Struktur Data",
    modul: "Tugas Modul 5",
    status: "ditugaskan",
    endAt: "2024-11-05 15:00",
  },
  {
    id: 6,
    title: "Jaringan Komputer",
    modul: "Tugas Modul 6",
    status: "Sedang dinilai",
    endAt: "2024-11-07 12:00",
  },
  {
    id: 7,
    title: "Sistem Operasi",
    modul: "Tugas Modul 7",
    status: "Terlambat",
    endAt: "2024-11-09 11:30",
  },
  {
    id: 8,
    title: "Keamanan Informasi",
    modul: "Tugas Modul 8",
    status: "Selesai",
    endAt: "2024-10-28 12:00",
  },
];
