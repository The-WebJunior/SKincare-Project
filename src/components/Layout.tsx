// import { Outlet } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";
import Navbar from "./Navbar";
import { HeartProvider } from "./Context/HeartContext";

export default function Layout() {
  return (
    <section className="">
      <CartProvider>
      <HeartProvider>
        <Navbar />

        <div className="">
          <Outlet /> 
        </div>

      </HeartProvider>
      </CartProvider>
    </section>
  );
}
