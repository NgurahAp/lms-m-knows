export default function App() {
  return (
    <>
      <section
        className="h-screen bg-cover bg-no-repeat bg-center max-w-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('/dashboard/hero-bg.png')",
        }}
      >
        <div className="flex w-5/6  h-full">
          <div className="w-2/3 h-full flex flex-col justify-center text-left  ">
            <h1 className="text-3xl font-light">Pelatihan</h1>
            <h1 className="text-6xl font-bold ">Building Confidence & Effective Communication for RBC</h1>
          </div>
          <div className="w-1/2 h-full flex items-center ">
            <img src="/dashboard/hero-right.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
