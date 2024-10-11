import React, { useState } from "react";
import { AuthCarousel } from "../../components/AuthCarousel";
import FormInput from "../../components/reusable/FormInput";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State untuk error message
  const { handleLogin } = useAuth();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); 
    setErrorMessage(""); 

    try {
      const success = await handleLogin(username, password);
      setIsLoading(false); 
      if (success) {
        navigate("/dashboard");
      } else {
        throw new Error("Username atau password salah.");
      }
    } catch (error: unknown) {
      setIsLoading(false);

      if (error instanceof Error) {
        setErrorMessage(error.message || "Login gagal. Silakan coba lagi.");
      } else {
        setErrorMessage("Terjadi kesalahan yang tidak diketahui.");
      }
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
          {/* Logo */}
          <img src="/landing/logo.png" className="mx-auto mb-4" alt="Logo" />

          {/* Title */}
          <h1 className="self-start font-bold text-4xl pb-3">Masuk</h1>
          <h1 className="self-start pb-5 text-gray-500">Masukan Akun Anda</h1>

          {/* Form Login */}
          <form className="w-full relative" onSubmit={onSubmit}>
            <FormInput
              type="text"
              id="username"
              name="username"
              placeholder="Masukan Email atau No Telpon"
              label="Nama Lengkap"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="relative">
              <FormInput
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Masukan Kata Sandi"
                label="Kata Sandi"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="absolute right-3 top-[45%] cursor-pointer"
                onClick={togglePasswordVisibility}
                role="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
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

            {/* Tampilkan error message jika ada */}
            {errorMessage && (
              <div className="mb-4 text-red-500 text-sm">{errorMessage}</div>
            )}

            {/* Tampilkan tombol atau loading spinner */}
            {isLoading ? (
              <div className="flex justify-center">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52666 55.5482 10.049C60.617 10.7364 65.4929 12.5467 69.8237 15.3777C74.1546 18.2087 77.847 21.9886 80.7165 26.5087C83.1162 30.1913 84.812 34.1995 85.7256 38.3639C86.2971 40.7998 89.0839 42.2735 91.5422 41.678 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            ) : (
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Masuk
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
