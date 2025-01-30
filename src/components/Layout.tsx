import { Route, Routes } from "react-router-dom";
import Conseil from "./Conseil";
import Index from "./Index";
import Navbar from "./Navbar";
import ProductDetails from "./ProductDetails";
import Produit from "./Produit";
import Produit2 from "./Produit2";
import Propos from "./Propos";
import MakeUpDetail from "./MakeUpDetail";

export default function Layout() {
  return (
    <div className="h-screen">
      {/* Navbar fixe */}
      <Navbar />

      {/* Contenu dynamique */}
      <div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/produit" element={<Produit />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/product2/:id" element={<MakeUpDetail/>} />

          <Route path="/conseil" element={<Conseil />} />
          <Route path="/mak" element={<Produit2 />} />
          <Route path="/propos" element={<Propos />} />
        </Routes>
      </div>
    </div>
  );
}
