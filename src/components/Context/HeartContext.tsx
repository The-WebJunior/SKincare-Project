import { createContext, useContext, useEffect, useState } from "react";

interface HeartContextType {
  favoriteProducts: number[];
  toggleHeart: (id: number) => void;
}

const HeartContext = createContext<HeartContextType | undefined>(undefined);

export function HeartProvider({ children }: { children: React.ReactNode }) {
  const [favoriteProducts, setFavoriteProducts] = useState<number[]>(() => {
    const storedFavorites = localStorage.getItem("favoriteProducts");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favoriteProducts", JSON.stringify(favoriteProducts));
  }, [favoriteProducts]);

  const toggleHeart = (id: number) => {
    setFavoriteProducts((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favId) => favId !== id) // Supprime si déjà aimé
        : [...prevFavorites, id] // Ajoute sinon
    );
  };

  return (
    <HeartContext.Provider value={{ favoriteProducts, toggleHeart }}>
      {children}
    </HeartContext.Provider>
  );
}

export function useHeart() {
  const context = useContext(HeartContext);
  if (!context) {
    throw new Error("useHeart doit être utilisé dans un HeartProvider");
  }
  return context;
}
