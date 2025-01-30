import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import ProductDetails from "./components/ProductDetails";
import Produit from "./components/Produit";
// import Produit from "./components/Produit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/*" element={<Layout />} />
{/* 
        <Route path="/" element={<Layout />} />
        <Route path="/" element={<Produit />}>
        <Route path="/product/:id" element={<ProductDetails />} /> */}
        {/* </Route> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
