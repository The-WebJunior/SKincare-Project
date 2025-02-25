import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Conseil from "./components/Conseil";
import Index from "./components/Index";
import Layout from "./components/Layout";
import MakeUpDetail from "./components/MakeUpDetail";
import ProductDetails from "./components/ProductDetails";
import Produit from "./components/Produit";
import Produit2 from "./components/Produit2";
import Propos from "./components/Propos";

// import Produit from "./components/Produit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="produit" element={<Produit />} />
          <Route path="produit/:id" element={<ProductDetails />} />

          <Route path="produit2/:id" element={<MakeUpDetail />} />
          <Route path="conseil" element={<Conseil />} />
          <Route path="mak" element={<Produit2 />} />
          <Route path="propos" element={<Propos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
