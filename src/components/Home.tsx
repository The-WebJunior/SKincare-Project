export default function Home() {
  return (
    <div className="relative">
      <img
        src="/3917190.jfif"
        className="w-full h-[90vh] max-sm:hidden max-lg:hidden"
      />
      <img
        src="/téléchargement (2).jfif"
        className=" h-[90vh] max-sm:block hidden  max-lg:block"
      />
      <div className="absolute inset-0 flex items-center justify-between ">
        <div className="flex flex-col gap-5">
          <div className="mx-4  max-lg:mx-44 ml-28  max-sm:mx-30 text-black  max-lg:text-center max-sm:text-white max-lg:text-white font-semibold max-sm:font-extrabold max-lg:font-extrabold text-5xl  max-sm:text-xl -mt-28 ">
            
            <p className="">H Y D R A</p>
            <p className="">F A C I A L</p>
            <p className="">C L E A N S E R</p>
            <p className="">T E C H N O L O G Y</p>
          </div>
          <div>
            <button
              className="bg-black p-2 text-white max-sm:font-bold max-sm:text-xs   max-sm:p-4 max-sm:ml-18 w-[40vh]  rounded-full px-10 ml-32
            max-lg:justify-center max-lg:items-center  max-lg:p-4 max-lg:ml-44
            "
            >
              DISCOVER
            </button>
          </div>
        </div>

        <div className=" flex max-sm:hidden max-lg:hidden">
          <img
            src="/téléchargement (2).jfif"
            className=" h-[90vh] w-[50vh] mt-[120px]  "
          />
          <img
            src="/téléchargement (3).jfif"
            className=" h-[90vh] w-[40vh] mt-60  "
          />
        </div>
      </div>
    </div>
  );
}
