import React from "react";
import { AuthCarousel } from "../../components/AuthCarousel";
import OTPInput from "../../components/Otp";
export const Verification: React.FC = () => {
  const handleComplete = (otp: string) => {
    console.log("OTP Completed:", otp);
    // Lakukan validasi atau pengiriman OTP di sini
  };
  return (
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
          <h1 className="pb-5 text-gray-500">Masukan kode yang dikirim ke</h1>
          <h1 className="pb-5 text-gray-500">mknows@gmail.com</h1>
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
  );
};
