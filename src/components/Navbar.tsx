import {
  CalendarCheck,
  Heart,
  LogOut,
  Menu,
  Settings,
  ShoppingCart,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "./Context/CartContext";
import { useHeart } from "./Context/HeartContext";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Gère le panier
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const { cart, removeFromCart } = useCart();
  const { favoriteProducts } = useHeart();

  const fraisLivraison = 100;
  const sousTotal = cart.reduce(
    (total, item) => total + (item.prix || 0) * (item.quantity || 0),
    0
  );
  const total = sousTotal + fraisLivraison;

  useEffect(() => {
    console.log("Cart actuel:", cart);
    cart.forEach((item) => {
      console.log(
        `Produit: ${item.nom}, Prix: ${item.prix}, Quantité: ${item.quantity}`
      );
    });
  }, [cart]);

  const [sidebarOpen1, setSidebarOpen1] = useState(false); // Gère le menu latéral
  const toggleSidebar1 = () => {
    setSidebarOpen1(!sidebarOpen1);
  };
  useEffect(() => {
    console.log("Cart actuel:", cart);
    cart.forEach((item) => {
      console.log(
        `Produit: ${item.nom}, Prix: ${item.prix}, Quantité: ${item.quantity}`
      );
    });
  }, []);
  const [activeLink, setActiveLink] = useState(null);

  // Fonction pour définir l'élément actif
  const handleClick = (link: any) => {
    setActiveLink(link);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(""); // Numéro du client

  // Ouvrir la modal
  const openModal = () => setIsModalOpen(true);

  // Fermer la modal
  const closeModal = () => setIsModalOpen(false);

  // Gérer l'envoi vers WhatsApp
  const handleWhatsAppRedirect = () => {
    if (!phoneNumber) return alert("Veuillez entrer votre numéro de téléphone");

    const vendeurPhone = "36582908"; // Numéro du commerçant

    const message = `Bonjour, je souhaite passer la commande suivante :\n\n${cart
      .map(
        (item) =>
          `- ${item.nom} (x${item.quantity}) : ${item.prix * item.quantity} MRU`
      )
      .join(
        "\n"
      )}\n\nSous-total : ${sousTotal} MRU\nFrais de livraison : ${fraisLivraison} MRU\nTotal : ${total} MRU\n\nMon numéro : ${phoneNumber}\n\nMerci !`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${vendeurPhone}?text=${encodedMessage}`;
    // Le lien de base pour démarrer une conversation avec le numéro du commerçant.
    window.open(whatsappUrl, "_blank");
    closeModal(); // Ferme la modal après l'envoi
  };

  return (
    <section>
      <nav className="fixed top-0 left-0 w-full z-50 sm:p-5 p-4 bg-black min-w-sm">
        <div className="flex lg:justify-around justify-between items-center">
          <div className="flex gap-4 lg:gap-0 items-center ">
            <Menu
              className="lg:hidden block"
              color="white"
              onClick={toggleSidebar1}
            />
            <h1 className="text-white font-[Open_Sans] lg:text-3xl text-xs  font-bold max-lg:w-32  ">
              S K I N K A R E
            </h1>
          </div>
          <ul className="lg:flex text-gray-300 gap-5 items-center hidden  font-mono ">
            <li>
              <a href="#product">Nos Produit</a>
            </li>
            <li>
              <a href="#conseil">Nos Conseil</a>
            </li>
            <li>
              <a href="#pro">A Propos</a>
            </li>
            <li>
              <a href="#service">Service Client</a>
            </li>
          </ul>
          <div className="flex gap-3">
            <div className="relative">
              <Heart className="text-white cursor-pointer" />
              {favoriteProducts.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1">
                  {favoriteProducts.length}
                </span>
              )}
            </div>
            <CalendarCheck className="text-white  max-sm:hidden  " />
            <div className="relative">
              <ShoppingCart
                className="text-white cursor-pointer"
                onClick={toggleSidebar}
              />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1">
                  {cart.length}
                </span>
              )}
            </div>{" "}
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0  bg-opacity-50 z-50 transition-opacity ${
          sidebarOpen1 ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar1}
      >
        <div
          className={`fixed top-0 left-0 w-64 bg-white h-full p-5 max-lg:w-[400px] max-sm:w-[300px] transform transition-transform ${
            sidebarOpen1 ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <p className="text-center font-extrabold text-3xl max-sm:mt-5 max-lg:mt-9">
            SKINA
          </p>
          <div className="flex flex-col gap-60 max-lg:gap-80 max-lg:mt-18  max-sm:gap-48 max-sm:mt-1">
            <div>
              <ul className="mt-20 flex flex-col gap-6">
                <li
                  className={`${
                    activeLink === "product"
                      ? "bg-black text-white"
                      : "bg-gray-200 hover:bg-black hover:text-white"
                  } p-3 rounded-2xl`}
                >
                  <a href="#product" onClick={() => handleClick("product")}>
                    Nos Produit
                  </a>
                </li>
                <li
                  className={`${
                    activeLink === "conseil"
                      ? "bg-black text-white"
                      : "bg-gray-200 hover:bg-black hover:text-white"
                  } p-3 rounded-2xl`}
                >
                  <a href="#conseil" onClick={() => handleClick("conseil")}>
                    Nos Conseil
                  </a>
                </li>
                <li
                  className={`${
                    activeLink === "pro"
                      ? "bg-black text-white"
                      : "bg-gray-200 hover:bg-black hover:text-white"
                  } p-3 rounded-2xl`}
                >
                  <a href="#pro" onClick={() => handleClick("pro")}>
                    A Propos
                  </a>
                </li>
                <li
                  className={`${
                    activeLink === "service"
                      ? "bg-black text-white"
                      : "bg-gray-200 hover:bg-black hover:text-white"
                  } p-3 rounded-2xl`}
                >
                  <a href="#service" onClick={() => handleClick("service")}>
                    Service Client
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex gap-10">
              <LogOut />
              <Settings />
            </div>
          </div>
        </div>
      </div>
      {/* Sidebar Panier */}
      <div
        className={`fixed top-0 right-0 w-1/3 bg-white h-full shadow-xl p-10 max-lg:p-4 transform transition-transform z-50 
          max-lg:w-2/3  max-sm:w-[45vh] rounded-s-4xl ${
            sidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex mb-10 -mt-5  overflow-auto ">
          <button onClick={toggleSidebar} className="absolute top-2 right-2">
            <X className="mt-6" size={13} />
          </button>
          <h2 className="text-xl font-bold mb-3 max-sm:mt-10">Votre Panier</h2>
        </div>
        {cart.length === 0 ? (
          <p>Votre panier est vide</p>
        ) : (
          <ul className="">
            {cart.map((item) => (
              <li key={item.id} className="flex  p-2 max-sm:p-1 max-sm:mr-10 ">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-sm -mt-32 "
                >
                  <X className="mt-6" size={13} />
                </button>
                <div className="grid grid-cols-2 gap-10  ">
                  <div className="flex max-sm:mr-14">
                    <img
                      src={item.image}
                      alt={item.nom}
                      className="w-16 h-16 max-sm:w-20 max-sm:h-16"
                    />
                    <p className="mt-3 font-bold w-80 text-md">{item.nom}</p>
                  </div>
                  <div className="flex flex-col items-start space-y-2 ml-16">
                    <p className="text-xl max-sm:text-sm font-bold w-80 max-sm:w-52">{item.prix} MRU</p>
                    <div className="flex items-center justify-between w-24  max-sm:w-16  max-sm:p1 border rounded-2xl p2">
                      <button className="text-xl font-bold text-green-500 hover:bg-green-100 rounded-full w-8 h-8 flex items-center justify-center">
                        +
                      </button>
                      <p className="text-lg font-semibold">{item.quantity}</p>
                      <button className="text-xl font-bold text-red-500 hover:bg-red-100 rounded-full w-8 h-8 flex items-center justify-center">
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="fixed bottom-14 p-1 max-lg:bottom-30 max-sm:bottom-10 ">
          <div className=" mb-5 border rounded-3xl w-[57vh] p-2 max-lg:w-[38vh] bg-black font-bold text-center  text-white">
            Frais de livraison {fraisLivraison}MRU
          </div>
          <div className="grid grid-cols-1  max-lg:w-[38vh]">
            <p className="text-lg font-semibold  flex justify-between">
              Sous-total{" "}
              <span className="font-bold">
                {cart.length === 0 ? 0 : sousTotal} MRU
              </span>
            </p>
            <p className=" text-lg font-semibold  flex justify-between">
              Livraison<span> {fraisLivraison} MRU</span>
            </p>
            <p className="text-lg font-semibold mb-5  flex justify-between">
              Total
              <span className="font-bold">
                {cart.length === 0 ? 0 : total} MRU
              </span>
            </p>
          </div>
          <div
            className={`border rounded-3xl w-[57vh]  max-lg:w-[38vh] p-2 font-bold text-center text-white 
    ${
      cart.length === 0
        ? "bg-gray-500 cursor-not-allowed"
        : "bg-black cursor-pointer"
    }`}
            onClick={openModal}
          >
            Commander
          </div>
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center rounded-s-4xl shadow-xl bg-white bg-opacity-50">
              <div className="bg-black p-6 rounded-lg shadow-lg w-[40vh]">
                <h2 className="text-xl text-white font-bold mb-4 text-center">
                  Votre numéro
                </h2>

                {/* Champ de saisie du numéro */}
                <input
                  type="tel"
                  placeholder="Ex: 221774567890"
                  className="border p-2  w-full rounded text-white placeholder:text-white"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />

                {/* Boutons */}
                <div className="flex justify-between mt-4">
                  <button
                    className="bg-slate-200 text-black px-4 py-1 rounded"
                    onClick={closeModal}
                  >
                    Annuler
                  </button>
                  <button
                    className="bg-slate-200 text-black px-4 py-1 rounded"
                    onClick={handleWhatsAppRedirect}
                  >
                    Envoyer
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
