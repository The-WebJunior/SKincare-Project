// import { Outlet } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { CartProvider } from "./CartContext";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="">
      <CartProvider>
        {/* Navbar fixe */}
        <Navbar />

        {/* Contenu dynamique */}
        <div className="">
          <Outlet /> {/* C'est ici que les routes enfants seront affichées */}
        </div>
      </CartProvider>
    </div>
  );
}
