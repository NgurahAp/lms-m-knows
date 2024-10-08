import React from "react";
import { AuthCarousel } from "../../components/AuthCarousel";
import FormInput from "../../components/reusable/FormInput";

export const Login: React.FC = () => {
  return (
    <section className="h-[120vh] flex items-center justify-center">
      {/* Left Side - Carousel */}
      <div className="w-3/5 h-full">
        <AuthCarousel />
      </div>

      {/* Right Side */}
      <div className="w-2/5 h-full flex items-center justify-center">
        <div className="w-2/3 flex flex-col items-center">
          {/* Logo berada di tengah */}
          <img src="/landing/logo.png" className="mx-auto mb-4" alt="Logo" />

          {/* H1 berada di kiri */}
          <h1 className="self-start font-bold text-4xl pb-3">Masuk</h1>
          <h1 className="self-start pb-5 text-gray-500">Masukan Akun Anda</h1>
          <form>
            <FormInput
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Masukan Nama Lengkap"
              label="Nama Lengkap"
              required
            />
            <FormInput
              type="email"
              id="email"
              name="email"
              placeholder="Masukan Email"
              label="Email"
              required
            />
            <FormInput
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Masukan Nomor Telepon"
              label="Nomor Telepon"
              required
            />
            <FormInput
              type="password"
              id="password"
              name="password"
              placeholder="Masukan Kata Sandi"
              label="Kata Sandi"
              required
            />
            <FormInput
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Masukan Konfirmasi Kata Sandi"
              label="Konfirmasi Kata Sandi"
              required
            />

            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                required
              />
              <label
                htmlFor="agreeToTerms"
                className="ml-2 block text-sm text-gray-900"
              >
                Saya menyetujui Syarat dan Ketentuan serta Kebijakan Privasi
                Kampus Gratis
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
            >
              Daftar
            </button>
          </form>
          {/* Divider and Google Sign In */}
          <div className="flex items-center w-full mt-5">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500">Atau</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button className="w-full py-2 font-semibold mt-4 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-100 transition duration-200">
            <img
              src="/auth/Google.png"
              alt="Google Icon"
              className="h-5 w-5 mr-2"
            />
            Masuk dengan Google
          </button>

          <p className="mt-4 text-sm text-gray-600">
            Sudah punya akun?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Masuk
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
