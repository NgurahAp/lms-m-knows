import { inHouseCards, pelatihanPubliCards, programPelatihanCards } from "../../assets/landingData";

export const TrainingProgram = () => {
  return (
    <>
      <section className="w-11/12  mx-auto py-14 ">
        <h1 className="text-5xl text-[#106FA4] px-8 font-bold pb-14">
          Program Pelatihan dan
          <span className="text-[#FAB317]"> LMS M-Knows</span>
        </h1>
        <div className="container mx-auto">
          <div className="flex flex-wrap mx-auto justify-center gap-5">
            {programPelatihanCards.map((card) => (
              <div className="w-96 bg-white border border-gray-200 rounded-lg shadow ">
                <a href="#">
                  <img className="rounded-t-lg w-full" src={card.icon} alt="" />
                </a>
                <div className="px-5 py-10">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                      {card.title}
                    </h5>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* InHouse Training */}
      <section className="w-11/12  mx-auto py-14 ">
        <h1 className="text-5xl text-[#106FA4] px-8 font-bold pb-14">
          In House Training
          <span className="text-[#FAB317]"> LMS M-Knows</span>
        </h1>
        <div className="container mx-auto">
          <div className="flex flex-wrap mx-auto justify-center gap-5">
            {inHouseCards.map((card) => (
              <div className="w-96 bg-white border border-gray-200 rounded-lg shadow ">
                <a href="#">
                  <img
                    className="rounded-t-lg w-full h-60"
                    src={card.image}
                    alt=""
                  />
                </a>
                <div className="px-5 py-5 flex items-end ">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold  tracking-tight text-gray-900 ">
                      {card.title}
                    </h5>
                    <p className="text-lg">{card.pt}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-11/12  mx-auto py-14 ">
        <h1 className="text-5xl text-[#106FA4] px-8 font-bold pb-14">
          Pelatihan
          <span className="text-[#FAB317]"> Publik</span>
        </h1>
        <div className="container mx-auto">
          <div className="flex flex-wrap mx-auto justify-center gap-5">
            {pelatihanPubliCards.map((card) => (
              <div className="w-96 bg-white border border-gray-200 rounded-lg shadow ">
                <a href="#">
                  <img
                    className="rounded-t-lg w-full h-60"
                    src={card.image}
                    alt=""
                  />
                </a>
                <div className="px-5 py-5 flex items-end ">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold  tracking-tight text-gray-900 ">
                      {card.title}
                    </h5>
                    <p className="text-lg">{card.pt}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
