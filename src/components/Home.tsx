export default function Home() {
  return (
    <div className="relative">
      <img
        src="/3917190.jfif"
        className="w-full max-h-screen lg:block hidden "
      />
      <img
        src="/téléchargement (2).jfif"
        className="block lg:hidden w-full object-cover mb-30 max-sm:h-screen"
      />
      <div className="absolute inset-0 top-1/3 max-lg:mx-auto size-fit lg:top-20 lg:left-12 lg:text-start text-center ">
        <div className="flex flex-col gap-5 lg:mt-40">
          <div className="lg:text-black text-white  lg:font-semibold font-extrabold sm:text-5xl  text-xl">
            <p className="">H Y D R A</p>
            <p className="">F A C I A L</p>
            <p className="">C L E A N S E R</p>
            <p className="">T E C H N O L O G Y</p>
          </div>
          <div>
            <button className="bg-black px-12 py-4 rounded-full text-white">
              DISCOVER
            </button>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0  flex  max-sm:hidden   max-lg:hidden block">
        <img
          src="/téléchargement (2).jfif"
          className="w-72 h-screen 
         "
        />
        <img
          src="/téléchargement (3).jfif"
          className="w-72 min-h-screen mt-24"
        />
      </div>
    </div>
  );
}
