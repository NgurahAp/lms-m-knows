import React, { useState, useEffect } from "react";

interface CarouselItemProps {
  image: string;
  title: string;
  description: string;
}

const carouselData: CarouselItemProps[] = [
  {
    image: "/auth/ilustration1.png",
    title: "Kejarlah Impianmu",
    description:
      "Jangan Hanya bermimpi, Segera bertindak, dimulai dengan belajar. Orang Sukses, pasti banyak Belajar",
  },
  {
    image: "/auth/ilustration2.png",
    title: "Belajar Tanpa Henti",
    description:
      "Pendidikan adalah kunci kesuksesan. Terus belajar dan tingkatkan kemampuanmu.",
  },
  {
    image: "/auth/ilustration3.png",
    title: "Wujudkan Cita-citamu",
    description:
      "Setiap langkah kecil membawamu lebih dekat ke tujuanmu. Tetap fokus dan pantang menyerah.",
  },
];

const CarouselItem: React.FC<CarouselItemProps> = ({
  image,
  title,
  description,
}) => (
  <div className="flex flex-col items-center justify-center h-full">
    <img src={image} alt="Illustration" className="w-auto h-1/2 pb-10" />
    <h1 className="text-4xl font-bold text-white pb-5">{title}</h1>
    <p className="w-1/2 text-2xl text-white text-center">{description}</p>
  </div>
);

export const AuthCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselData.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="w-full h-full bg-[#3498DB] bg-cover  flex flex-col items-center justify-center relative overflow-hidden"
      style={{ backgroundImage: "url('/auth/bg.png')" }}
    >
      {carouselData.map((item, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <CarouselItem {...item} />
        </div>
      ))}
      <div className="absolute bottom-28 left-0 right-0 flex justify-center">
        {carouselData.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};
