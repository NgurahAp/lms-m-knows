import React, { useState } from "react";
import { AuthCarousel } from "../../components/AuthCarousel";
import OTPInput from "../../components/Otp";
import "flowbite/dist/flowbite.css";

export const Verification: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleComplete = (otp: string) => {
    console.log("OTP Completed:", otp);
    // Lakukan validasi atau pengiriman OTP di sini
    openModal(); // Membuka modal setelah OTP selesai dimasukkan
  };

  return (
    <>
      <section className="h-[100vh] flex items-center justify-center">
        {/* Left Side - Carousel */}
        <div className="w-3/5 h-full">
          <AuthCarousel />
        </div>

        {/* Right Side */}
        <div className="w-2/5 h-full flex items-center justify-center">
          <div className="w-2/3 flex flex-col items-center">
            {/* H1 berada di kiri */}
            <h1 className="font-bold text-4xl pb-3">Verifikasi Email</h1>
            <h1 className=" text-gray-500 text-xl">
              Masukan kode yang dikirim ke
            </h1>
            <h1 className="pb-5 font-bold text-xl">mknows@gmail.com</h1>
            <form className="w-full">
              <OTPInput length={6} onComplete={handleComplete} />
              <p className="text-md text-center pt-3">
                Tidak menerima OTP?{" "}
                <button className="text-blue-500 hover:underline">
                  Kirim Ulang OTP
                </button>
              </p>
              <button
                type="submit"
                className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
              >
                Selanjutnya
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          tabIndex={-1}
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4 md:p-5 text-center">
                <svg
                  className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  OTP Completed!
                </h3>
                <button
                  onClick={closeModal}
                  className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
