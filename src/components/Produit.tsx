import { Heart, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import product from "../product.json";
import { Product } from "../type.ts";
import { useHeart } from "./Context/HeartContext.tsx";

export default function Produit() {
  const navigate = useNavigate();

  const handleNavigate = (id: number) => {
    navigate(`/produit/${id}`);
  };
  const [products, setProducts] = useState<Product[]>([]);

  const [zoomedProduct, setZoomedProduct] = useState(null);
  const { favoriteProducts, toggleHeart } = useHeart(); // Récupère les favoris

  const toggleZoom = (productId: any) => {
    setZoomedProduct(zoomedProduct === productId ? null : productId);
  };

  useEffect(() => {
    console.log("erreur", product);

    setProducts(product);
  }, []);

  useEffect;

  return (
    <section className=" " id="product">
      <h1 className="text-8xl max-sm:text-3xl text-center mb-10  max-lg:text-5xl   font-bold">
        {`H Y D R A T A T I O N`.split("").map((letter, index) => (
          <span key={index} className="letter text-shadow-color-change">
            {letter}
          </span>
        ))}
      </h1>

      <div className="sm:flex gap-2 items-stretch  snap-x scroll-pl-6 grid grid-cols-2 grid-rows-1 overflow-x-auto ">
        {products.map((produit: Product) => (
          <div
            key={produit.id}
            onClick={(e) => {
              e.preventDefault(); // Empêche la navigation immédiate
              toggleZoom(produit.id);
            }}
            className="flex-shrink-0 p-5 max-sm:p-1  snap-start max-sm:gap-y-1 border-2 border-gray-200 w-[250px] max-sm:w-[170px] justify-between flex flex-col max-sm:transition-none duration-300 cursor-pointer overflow-x-auto "
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
            <img
              src={produit.image}
              alt={produit.nom}
              className="h-64 mb-10 max-sm:mb-5 w-full max-sm:h-20 max-sm:w-20 max-sm:ml-7 transition-transform duration-300"
            />

            <div className="flex flex-col gap-3 mb-2 ">
              <p className="text-lg max-sm:text-xs max-lg:text-sm max-sm:font-extrabold  max-lg:font-extrabold  font-bold">
                {produit.nom}
              </p>
              <p className="text-xs  max-sm:w-32 max-lg:w-40 text-justify ">
                {produit.description}
              </p>
              <p className="flex gap-2"> <span className="font-black ">MRU</span>
                
                {produit.prix} </p>
            <button
              className=" flex gap-2 justify-center max-sm:ml-2 border-2 w-full max-sm:w-36  max-sm:p-0.5 border-black py-1 mr-5 rounded-3xl  "
              onClick={() => handleNavigate(produit.id)}
            >
               <ShoppingCart className="" /> Panier
            </button>
          </div>
            </div>
        ))}
      </div>
    </section>
  );
}
