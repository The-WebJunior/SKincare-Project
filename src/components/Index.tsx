import Conseil from "./Conseil";
import Home from "./Home";
import Produit from "./Produit";
import Produit2 from "./Produit2";
import Propos from "./Propos";

export default function Index() {
  return (
    <div className="min-w-sm">
      <Home />
      <main className="sm:px-8 px-4">
        <Produit />
        <Produit2 />
        <Conseil />
        <Propos />
      </main>
    </div>
  );
}
