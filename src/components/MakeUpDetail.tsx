import { ArrowLeft, ChevronDown, Heart } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import makeUp from "../makeUp.json";

type Slide = {
  id: number;
  text: string;
  text1: string;
};
export default function MakeUpDetail() {
  const { id } = useParams<{ id: string }>(); // Récupère l'ID depuis l'URL
  const selectedProduct = makeUp.find((p) => p.id === parseInt(id || "0"));

  if (!selectedProduct) {
    return (
      <p className="text-center text-xl font-bold">Produit introuvable !</p>
    );
  }

  const [isOpen, setIsOpen] = useState(false); // Gère l'état du dropdown

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Inverse l'état d'affichage du dropdown
  };

  const slides: Slide[] = [
    { id: 1, text: "Livraison offerte", text1: " à partir de 59€ d’achat" },
    { id: 2, text: "Paiement sécurisé ", text1: "en carte bancaire et Paypal" },
    {
      id: 3,
      text: "Heureuse ou remboursée  ",
      text1: "Retours gratuits sous 30 jours",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fonction pour défiler jusqu’à une diapositive et mettre à jour l’état
  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
      setCurrentSlide(index); // Met à jour l'état immédiatement
    }
  };

  const formatDetailText = (text: string) => {
    return text.split("\n").map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index < text.split("\n").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  // Détecte le changement de diapositive quand on scroll horizontalement
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const slideWidth = scrollRef.current.clientWidth;
        const index = Math.round(scrollLeft / slideWidth);
        setCurrentSlide(index);
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <section className="">
      <Link to="/">
        {" "}
        <div className=" p-2   rounded-3xl w-10 mt-1 ml-1">
          <ArrowLeft color="black" className="max-sm:text-xs" />
        </div>
      </Link>
      <div className="hidden max-sm:block max-lg:block">
        <div className=" flex justify-evenly max-lg:justify-between  max-lg:ml-12 max-sm:ml-2 gap-50 mt-20 max-sm:mt-10  ">
          <p className="bg-[#f7e688]   rounded-br-xl p-0.5 text-sm px-3">
            New !
          </p>
          <Heart className="text-black  max-lg:mr-12 max-sm: " />
        </div>
      </div>

      <div className="p-10 max-lg:p-0 flex  max-sm:flex-wrap max-lg:flex-wrap gap-10 justify-evenly items-center ">
        <img
          src={selectedProduct.image}
          alt={selectedProduct.name}
          className="w-[400px] h-[400px] max-sm:w-[200px] max-sm:h-[200px] object-cover mb-5"
        />
        <div className="p-12">
          <div className="grid gap-10 ">
            <div>
              <h1 className="text-4xl font-bold mb-1 max-lg:text-xl max-sm:text-sm">
                {selectedProduct.name}
              </h1>
              <p className="text-md max-sm:flex max-sm:flex-wrap  max-sm:block ">
                {}
                {formatDetailText(selectedProduct.brand)}
              </p>
            </div>
            <div className="flex flex-wrap gap- justify-between   max-lg:grid  p-1 max-sm:grid-cols-1">
              <p className="text-xl font-bold mt-2">${selectedProduct.price}</p>
              <div className="flex gap-30 max-sm:gap-10">
                <div className="relative">
                  <select
                    id="quantity"
                    className="peer block pb-1.5 pt-3 w-full max-lg:w- text-sm bg-transparent rounded-md border-2 border-gray-600 appearance-none px-5"
                  >
                    <option value="" disabled selected hidden>
                      Quantité
                    </option>
                    {[1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <ChevronDown color="black" size={12} />
                  </div>
                  <label
                    htmlFor="quantity"
                    className="absolute text-sm text-black duration-300 transform -translate-y-3 scale-75 top-1 z-10 bg-white"
                  >
                    Quantité
                  </label>
                </div>
                <button className="bg-black px-20 max-lg:w-[600px]   max-sm:w-[400px] max-lg:p-2 rounded-md text-white">
                  Ajouter
                </button>
              </div>
            </div>
            {/* Section Défilement Type TikTok */}
            <div className="">
              <div
                ref={scrollRef}
                className="flex gap-3 overflow-x-hidden text-sm  snap-x  "
              >
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className="flex-none bg-gray-100 p-3 w-1/2 text-center snap-center"
                  >
                    <p className="font-bold max-sm:text-xs">{slide.text}</p>
                    <p className="font-bold max-sm:text-xs">{slide.text1}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Indicateurs (3 points) */}
            <div className="flex justify-center gap-2 mt-2">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full cursor-pointer ${
                    currentSlide === index ? "bg-black" : "bg-gray-400"
                  }`}
                  onClick={() => scrollTo(index)}
                ></div>
              ))}
            </div>
            <p
              className="text-md flex flex-col gap-4 text-justify "
              onClick={toggleDropdown}
            >
              <span className="font-bold">Description:</span>
              {isOpen ? (
                <div className="mt-2 p-4 bg-gray-100 border border-gray-300 rounded">
                  {/* {formatDetailText(selectedProduct.detail)} */}
                </div>
              ) : (
                <span className="bg-gray-100 p-2">Click to view details</span>
              )}{" "}
            </p>
            <p
              className="text-md flex flex-col gap-4 text-justify "
              onClick={toggleDropdown}
            >
              <span className="font-bold">Composition:</span>
              {isOpen ? (
                <div className="mt-2 p-4 bg-gray-100 border border-gray-300 rounded">
                  {/* {formatDetailText(selectedProduct.composition)} */}
                </div>
              ) : (
                <span className="bg-gray-100">Click to view details</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
