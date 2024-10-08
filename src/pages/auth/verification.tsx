import React, { useState } from "react";
import { AuthCarousel } from "../../components/AuthCarousel";
import OTPInput from "../../components/Otp";
import "flowbite/dist/flowbite.css";

export const Verification: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [otp, setOtp] = useState<string>("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOtpChange = (newOtp: string) => {
    setOtp(newOtp);
    console.log("OTP entered:", newOtp);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("OTP submitted:", otp);
    if (otp.length === 6) {
      openModal();
    } else {
      alert("Please enter a complete 6-digit OTP.");
    }
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
            <h1 className="font-bold text-4xl pb-3">Verifikasi Email</h1>
            <h1 className="text-gray-500 text-xl">
              Masukan kode yang dikirim ke
            </h1>
            <h1 className="pb-5 font-bold text-xl">mknows@gmail.com</h1>
            <form className="w-full" onSubmit={handleSubmit}>
              <OTPInput length={6} onComplete={handleOtpChange} />
              <p className="text-md text-center pt-3">
                Tidak menerima OTP?{" "}
                <button type="button" className="text-blue-500 hover:underline">
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
          <div className="relative p-4 w-1/3  max-h-full">
            <div className="relative bg-white rounded-2xl shadow dark:bg-gray-700">
              <div className="p-4 md:p-10 text-center">
                <h1 className="text-2xl font-bold pb-3">
                  Akun anda berhasil di didaftarkan
                </h1>
                <div className="w-28 h-1 bg-[#3498DB] mx-auto my-5 "></div>

                <h3 className="mb-5 text-lg font-normal text-gray-500 pt-2 pb-3 dark:text-gray-400 ">
                  OTP Submitted: {otp}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg  inline-flex items-center px-20 py-2.5 text-center"
                >
                  Masuk
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
