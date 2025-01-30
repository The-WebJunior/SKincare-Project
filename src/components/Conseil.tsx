export default function Conseil() {
  return (
    <section className="grid grid-cols-2 " id="conseil">
      <div>
        {" "} 
        <img
          src="/eau.jfif"
          className="w-full h-[90vh] max-sm:h-[50vh] max-lg:h-[80vh] max-lg:w-[100vh] max-sm:mt-27 max-lg:mt-1 max-lg:mb-27 "
        />
      </div>
      <div className="relative  grid grid-cols-1  ">
        {/* Div en haut de l'image */}
        <div className="absolute  top-56 max-lg:top-96 max-sm:top-72 right-72 w-[400px] max-sm:w-[200px] max-sm:h-32  max-sm:right-5  max-lg:right-35 shadow-2xl m-20 p-20 px-10 text-center  bg-[rgba(164,161,161,0.5)]  rounded-3xl">
          <h1>SERUM CLEAN</h1>
          <p className=" text-xs p-2 max-sm:hidden ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <br /> Aspernatur doloribus aliquid id, quos natus inventore nulla
            <br /> nisi numqua m, reiciendis veniam fugit aliquam sint deserunt
            <br /> in dolorem, voluptatem quasi? Dignissimos, repellendus!
          </p>
        </div>

        <div className="">
          <img
            src="/Product/The Ordinary.jfif"
            className="w-full h-[90vh] object-center max-sm:h-[32vh] max-lg:h-[60vh] max-sm:mt-64 max-lg:mt-56 "
          />
        </div>
      </div>
    </section>
  );
}
