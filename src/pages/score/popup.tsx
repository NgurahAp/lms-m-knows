import React from "react";

interface SertifikatProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

export const Sertifikat: React.FC<SertifikatProps> = ({
  isOpen,
  onClose,
  onDownload,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="relative bg-white rounded-lg shadow-lg max-w-2xl w-full mx-auto p-8">
        {/* Konten Sertifikat */}
        <div className="flex flex-col items-center">
          <img
            src="/nilaisertifikat/sertifikat.png" // Ganti dengan path gambar sertifikat Anda
            alt="Certificate"
            className="w-full max-w-xl rounded-lg"
          />

          {/* Tombol Kembali dan Unduh */}
          <div className="flex mt-6">
            <button
              className=" text-blue-500 px-4 py-2 rounded-lg border border-blue-500 hover:bg-gray-300"
              onClick={onClose}
            >
              Kembali
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              onClick={onDownload}
            >
              Unduh
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
