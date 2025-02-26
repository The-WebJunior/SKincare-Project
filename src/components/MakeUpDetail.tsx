import { ArrowLeft, Heart } from "lucide-react";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import makeUp from "../makeUp.json";
import { Product } from "../type";
import { useCart } from "./Context/CartContext";
import { useHeart } from "./Context/HeartContext";

export default function MakeUpDetail() {
  const { favoriteProducts, toggleHeart } = useHeart();
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();
  const { id } = useParams<{ id: string }>(); // Récupère l'ID depuis l'URL
  const selectedProduct = makeUp.find((p) => p.id === Number(id));
  const isFavorite = selectedProduct
    ? favoriteProducts.includes(selectedProduct.id)
    : false;

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

  // Fonction pour défiler jusqu’à une diapositive et mettre à jour l’état

  const formatDetailText = (text: string) => {
    return text.split("\n").map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index < text.split("\n").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  // Détecte le changement de diapositive quand on scroll horizontalement

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (newValue >= 1) setQuantity(newValue);
    // Empêche les valeurs négatives
  };
  return (
    <section className="">
      <div className="mt-20 max-sm:flex max-lg:flex justify-between items-center gap-4">
        <div className="flex">
          <Link to="/" className="p- w-10">
            <ArrowLeft color="black" className="max-sm:text-xs" />
          </Link>
          <p className="bg-[#f7e688] rounded-br-xl text-sm p- ">New !</p>
        </div>
        <span>
          <Heart
            className={`cursor-pointer  mr-5 ${
              isFavorite ? "text-red-500" : "text-black "
            }`}
            onClick={() => selectedProduct && toggleHeart(selectedProduct.id)}
          />
        </span>
      </div>

      <Link to="/" className="max-sm:hidden block ">
        {" "}
        <div className=" p-2     w-10 mt-20  -mr-1">
          <ArrowLeft color="black" className="max-sm:text-xs" />
        </div>
      </Link>
      <div className="p-5 max-lg:p-0 flex  max-sm:flex-wrap max-lg:flex-wrap  justify-evenly items-center ">
        <img
          src={selectedProduct.image}
          alt={selectedProduct.nom}
          className="w-[400px] h-[400px] max-sm:w-[300px] max-sm:h-[400px] object-cover "
        />
        <div className="flex flex-col flex-wrap w-1/2 p-10 max-sm:w-full gap-4">
          <h1 className="text-4xl font-bold mb-1 max-lg:text-xl max-sm:text-sm">
            {selectedProduct.nom}
          </h1>
          <p className="text-md max-sm:flex max-sm:flex-wrap  max-sm:block ">
            {formatDetailText(selectedProduct.marque)}
          </p>

          <div className=" space-y-2  max-lg:grid   max-sm:grid-cols-1">
            <p className=" flex gap-10 font-semibold  ">
              Prix
              <span>
                :{selectedProduct.prix}
                MRU
              </span>
            </p>

            <div className="  flex gap-2 max-sm:w-full ">
              <label className="mt-2 font-semibold">Quantité</label>
              <input
                type="number"
                value={quantity}
                onChange={handleChange}
                placeholder=""
                className=" p-2 w-full  border-2 rounded-xl  appearance-auto"
              />
            </div>

            <div className="flex h-10 w-full justify-between  max-sm:flex-wrap">
              <button
                className="bg-black px-10  max-lg:w-[400px] font-bold  max-sm:w-[100px] max-lg:p-2 rounded-xl text-white"
                onClick={handleAddToCart}
              >
                Ajouter
              </button>
              <button className="border-2 px-10 max-lg:w-[400px]   font-bold max-sm:w-[100px] max-lg:p-2 rounded-xl text-">
                Annuler
              </button>
            </div>
          </div>
          {/* Section Défilement Type TikTok */}

          <div
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
          </div>
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
    </section>
  );
}
