import React from "react";
import { AuthCarousel } from "../../components/AuthCarousel";
import FormInput from "../../components/reusable/FormInput";
import { Link } from "react-router-dom";


export const Login: React.FC = () => {
  return (
    <section className="h-[100vh] flex items-center justify-center">
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
          <form className="w-full">
            <FormInput
              type="email"
              id="email"
              name="email"
              placeholder="Masukan Email atau No Telpon"
              label="Nama Lengkap"
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
            <div className="mb-4 flex items-center justify-between">
              <div className="flex">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  required
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Ingat saya
                </label>
              </div>
              <a href="" className="text-blue-500 text-sm">
                Lupa kata sandi?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
            >
              Masuk
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
            Belum punya akun? {" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Daftar
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
