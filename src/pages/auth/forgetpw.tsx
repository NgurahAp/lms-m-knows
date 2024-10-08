import React, { useState } from "react";
import FormInput from "../../components/reusable/FormInput";

export const ForgetPw: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <section className="h-[100vh] flex items-center justify-center">
      <div className="w-3/5 h-full">
        <div
          className="w-full h-full bg-[#3498DB] bg-cover flex flex-col items-center justify-center relative overflow-hidden"
          style={{ backgroundImage: "url('/auth/bg.png')" }}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <img
              src="/auth/ilustration2.png"
              alt="Illustration"
              className="w-auto h-1/2 pb-10"
            />
          </div>
        </div>
      </div>

      <div className="w-2/5 h-full flex items-center justify-center">
        <div className="w-2/3 flex flex-col items-center">
          <h1 className="self-start font-bold text-4xl pb-3">
            Lupa Kata Sandi
          </h1>
          <h1 className="self-start pb-5 text-gray-500">
            Ubah Kata Sandi Kamu
          </h1>
          <form className="w-full">
            <div className="relative">
              <FormInput
                type={showPassword ? "text" : "password"} 
                id="password"
                name="password"
                placeholder="Masukan Kata Sandi"
                label="Kata Sandi"
                required
              />
              <span
                className="absolute right-3 top-10 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.966 9.966 0 014.7-5.385M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3l18 18"
                    />
                  </svg>
                )}
              </span>
            </div>

            <div className="relative mt-4">
              <FormInput
                type={showConfirmPassword ? "text" : "password"} // Sama seperti sebelumnya untuk konfirmasi
                id="confirm-password"
                name="confirm-password"
                placeholder="Masukan Konfirmasi Kata Sandi"
                label="Konfirmasi Kata Sandi"
                required
              />
             
              <span
                className="absolute right-3 top-10 cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.966 9.966 0 014.7-5.385M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3l18 18"
                    />
                  </svg>
                )}
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
            >
              Atur Ulang Kata Sandi
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
