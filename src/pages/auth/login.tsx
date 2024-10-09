import { AuthCarousel } from "../../components/AuthCarousel";
import FormInput from "../../components/reusable/FormInput";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

export const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin } = useAuth();

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await handleLogin(username, password);
    if (success) {
      navigate("/pelatihanku");
    } else {
      alert("Login gagal. Silakan coba lagi.");
    }
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
          {/* Logo berada di tengah */}
          <img src="/landing/logo.png" className="mx-auto mb-4" alt="Logo" />

          {/* H1 berada di kiri */}
          <h1 className="self-start font-bold text-4xl pb-3">Masuk</h1>
          <h1 className="self-start pb-5 text-gray-500">Masukan Akun Anda</h1>

          {/* Form Login */}
          <form className="w-full relative" onSubmit={onSubmit}>
            <FormInput
              type="text" // Mengubah type menjadi text
              id="username" // Mengubah id menjadi username
              name="username" // Mengubah name menjadi username
              placeholder="Masukan Email atau No Telpon"
              label="Nama Lengkap"
              required
              value={username} // Mengikat nilai ke state
              onChange={(e) => setUsername(e.target.value)} // Mengatur perubahan
            />
            <div className="relative">
              <FormInput
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Masukan Kata Sandi"
                label="Kata Sandi"
                required
                value={password} // Mengikat nilai ke state
                onChange={(e) => setPassword(e.target.value)} // Mengatur perubahan
              />
              <span
                className="absolute right-3 top-[45%] cursor-pointer"
                onClick={togglePasswordVisibility}
                role="button"
                aria-label={showPassword ? "Hide password" : "Show password"} // Menambahkan aksesibilitas
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
            <div className="mb-4 flex items-center justify-between">
              <div className="flex">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Ingat saya
                </label>
              </div>
              <Link to="/forgetpw" className="text-blue-500 text-sm">
                Lupa kata sandi?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
            >
              Masuk
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
