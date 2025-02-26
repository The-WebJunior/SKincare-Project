import { Heart, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import makeUp from "../makeUp.json";
import { Product } from "../type.ts";
import { useHeart } from "./Context/HeartContext.tsx";

export default function Produit2() {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();
  const { favoriteProducts, toggleHeart } = useHeart(); // Récupère les favoris

  const handleNavigate = (id: number) => {
    navigate(`/produit2/${id}`);
  };
  useEffect(() => {
    setProducts(makeUp);
  }, []);

  useEffect;
  return (
    <div>
      <section className="mb-10 " id="product">
        <h1 className="text-8xl max-sm:text-3xl text-center mb-10  max-lg:text-5xl   font-bold">
          {`M A K E - U P`.split("").map((letter, index) => (
            <span key={index} className="letter text-shadow-color-change">
              {letter}
            </span>
          ))}
        </h1>
        <div className="sm:flex gap-3   items-center snap-x scroll-pl-6 grid grid-cols-2 overflow-x-auto">
          {products.map((produit: Product) => (
            <div
              key={produit.id}
              className="flex-shrink-0 p-1  cursor-pointer  hover:scale-105   max-sm:gap-y-1  border-2 border-gray-200   w-[250px] max-sm:w-[190px]  justify-between  flex flex-col "
            >
              <div className=" flex justify-between divide-none mb-2 mr-2">
                <p className="bg-[#f7e688] border rounded-br-xl p-0.5 text-sm px-3">
                  New !
                </p>
                <Heart
                className={`cursor-pointer transition-colors ${
                  favoriteProducts.includes(produit.id) ? "text-red-500" : "text-black"
                }`}
                onClick={(e) => {
                  e.stopPropagation(); // Empêche la propagation du clic
                  toggleHeart(produit.id);
                }}
              /> 
              </div>
              {/* <Link to={`/produit2/${produit.id}`}> */}
                <img
                  src={produit.image}
                  alt={produit.nom}
                  className="h-64  mb-10 max-sm:mb-5 w-full  max-sm:h-32 max-sm:
                 "
                />
              {/* </Link> */}
              <div className="flex flex-col gap-3 mb-2 ">
                <p className="text-lg max-sm:text-xs max-lg:text-sm max-sm:font-extrabold  max-lg:font-extrabold  font-bold">
                  {produit.nom}
                </p>

                <p> ${produit.prix} </p>
              </div>
              <button
              className=" flex gap-2 justify-center border-2 w-full max-sm:p-1 border-black py-1 mr-5 rounded-3xl"
              onClick={() => handleNavigate(produit.id)}
            >
               <ShoppingCart /> Panier
            </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
