import React from "react";
import { AuthCarousel } from "../../components/AuthCarousel";

export const Login: React.FC = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      {/* Left Side - Carousel */}
      <div className="w-3/5 h-full">
        <AuthCarousel />
      </div>

      {/* Right Side */}
      <div className="w-2/5 h-full flex items-center justify-center">
        <img src="/landing/logo.png" alt="" />
      </div>
    </section>
  );
};
