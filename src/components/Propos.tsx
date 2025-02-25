import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Propos() {
  return (
    <section className="flex flex-col" id="pro">
      <div className="relative w-full h-[50vh] ">
        <img src="/fleur.jpg" className="w-full h-full object-cover" />

        <img
          src="/rb_30076.png"
          className="absolute top-0 right-0 h-[90vh] max-lg:h-[50vh] w-56 max-sm:hidden max-lg:w-60 max-lg:mt-52 "
        />
      </div>
      <div
        className=" h-[50vh] p-20 flex flex-wrap  gap-32 max-lg:gap-28 max-sm:gap-10 max-lg:justify-center items-center 
      "
      >
        <div className="space-y-3 max-sm:text-center">
          <p className="text-4xl max-sm:text-2xl font-bold">S K I N C A R E</p>
          <div className="flex gap-8 max-sm:ml-3 max-lg:ml-8">
            <div className="flex gap-2">
              <Instagram />
              <Facebook />
              <Linkedin />
            </div>
            <p className="font-bold">
              <span>#SKINCARE</span>
            </p>
          </div>
        </div>

        <div>
          <ul className="flex flex-col text-sm gap-2  max-lg:mt-8 font-semibold max-sm:text-center">
            <li>NOS PRODUITS</li>
            <li>NOS CONSEILS</li>
            <li>A PROPOS</li>
            <li>SERVICE CLIENT</li>
            <li>CONTACT</li>
            <li></li>
          </ul>
        </div>

        <div className="max-sm:p-1 max-sm:space-y-8 max-lg:p-8 ">
          <h1
            className="max-lg:font-bold text-center
          mb-3"
          >
            NEWSLETTER
          </h1>
          <p className="text-xs mb-2 max-sm:text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Provident rem officiis expedita
          </p>
          <div className="flex gap-3 max-sm:flex-col max-lg:flex-col">
            <input
              type="text"
              placeholder="Enter your email adress"
              className=" rounded-xl bg-gray-200 p-2 px-8 max-sm:p-3 max-sm:px-10
            placeholder:text-black
            "
            />
            <button className="bg-black p-1 rounded-xl  max-sm:p-3 max-sm:w-full px-3">
              <span className="text-white">S'inscrire</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
