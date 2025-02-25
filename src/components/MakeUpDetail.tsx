import { ArrowLeft, ChevronDown, Heart } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import makeUp from "../makeUp.json";
import { useCart } from "./CartContext";
import { Product, Product2 } from "../type";

type Slide = {
  id: number; 
  text: string;
  text1: string;
};
export default function MakeUpDetail() {
  const { id } = useParams<{ id: string }>(); // Récupère l'ID depuis l'URL
  const selectedProduct = makeUp.find((p) => p.id === Number(id));
const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  const handleAddToCart = () => {
      if (!selectedProduct) {
        console.error("Produit introuvable, impossible d'ajouter au panier.");
        return;
      }
    
      const productToAdd: Product & { quantity: number } = {
        ...selectedProduct,
        quantity,
      };
    
      addToCart(productToAdd);
    };
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

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value);
      if (newValue >= 1) setQuantity(newValue);
      // Empêche les valeurs négatives
    };
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
          alt={selectedProduct.nom}
          className="w-[400px] h-[400px] max-sm:w-[200px] max-sm:h-[200px] object-cover mb-5"
        />
        <div className="p-12">
          <div className="grid gap-10 ">
            <div>
              <h1 className="text-4xl font-bold mb-1 max-lg:text-xl max-sm:text-sm">
                {selectedProduct.nom}
              </h1>
              <p className="text-md max-sm:flex max-sm:flex-wrap  max-sm:block ">
                {formatDetailText(selectedProduct.marque)}
              </p>
            </div>
            <div className="max-sm:flex flex-wrap space-y-4 justify-between   max-lg:grid  p-1 max-sm:grid-cols-1">


               <div className=" flex gap-1 ">
              <p className=" flex gap-10 font-semibold  ">
                Prix
                <span>:{selectedProduct.prix}</span>
              </p>

              <span className="">MRU</span>
            </div>

            <div className="flex gap-2 ">
              <label className="mt-2 font-semibold">Quantité</label>
              <input
                type="number"
                value={quantity} onChange={handleChange}
                placeholder=""
                className=" p-2 w-full border-2 rounded-xl  appearance-auto"
              />
            </div>

            <div className="flex justify-between  h-10">
              <button
                className="bg-black px-10 max-lg:w-[400px] font-bold  max-sm:w-[200px] max-lg:p-2 rounded-xl text-white"
                onClick={handleAddToCart}
              >
                Ajouter
              </button>
              <button className="border-2 px-10 max-lg:w-[400px]   font-bold max-sm:w-[200px] max-lg:p-2 rounded-xl text-">
                Annuler
              </button>
            </div>
          </div>
            {/* Section Défilement Type TikTok */}
          
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
            <div
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
