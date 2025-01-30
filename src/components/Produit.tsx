import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import product from "../product.json";
import { Product } from "../type.ts";

export default function Produit() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(product);
  }, []);

  useEffect;

  return (
    <section className="mb-10 p-0.5" id="product">
      <h1 className="text-8xl max-sm:text-3xl text-center mb-10  max-lg:text-5xl   font-bold">
        {`H Y D R A T A T I O N`.split("").map((letter, index) => (
          <span key={index} className="letter text-shadow-color-change">
            {letter}
          </span>
        ))}
      </h1>
      <div
        className="flex  p-10    max-lg:gap-1 max-sm:p-0.5 max-lg:p-8 max-sm:ml- overflow-x-auto space-x-1 gap-2 max-sm:grid max-sm:grid-cols-2 
      max-lg:grid max-lg:grid-cols-3
      "
      >
        {products.map((produit: Product) => (
          <div
            key={produit.id}
            className="flex-shrink-0 p-1  max-sm:gap-y-1  border-2 border-gray-200   w-[250px] max-sm:w-[190px]  justify-between  flex flex-col "
          >
            <div className=" flex justify-between divide-none mb-2 mr-2">
              <p className="bg-[#f7e688] border rounded-br-xl p-0.5 text-sm px-3">New !</p>
              <Heart className="text-black" />
            </div>
              <Link to={`/product/${produit.id}`}>
                <img
                  src={produit.image}
                  alt={produit.nom}
                  className="h-64  mb-10 max-sm:mb-5 w-full  max-sm:h-32 max-sm:
                 "
                />
              </Link>
              <div className="flex flex-col gap-3 mb-2 ">
                <p className="text-lg max-sm:text-xs max-lg:text-sm max-sm:font-extrabold  max-lg:font-extrabold  font-bold">
                  {produit.nom}
                </p>
                <p className="text-xs  max-sm:w-40 max-lg:w-40 text-justify ">
                  {produit.description}
                </p>
                <p> ${produit.prix} </p>
              </div>
              <button className="border-2 w-full max-sm:p-1 border-black p-3 mr-5 rounded-3xl">
                Ajouter{" "}
              </button>
                        </div>
           
        ))}
      </div>
    </section>
  );
}
