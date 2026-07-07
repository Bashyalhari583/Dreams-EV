import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import SearchOverlay from "./components/SearchOverlay";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import EVPage from "./pages/EVPage";
import PetrolPage from "./pages/PetrolPage";
import VehicleDetailPage from "./pages/VehicleDetailPage";
import DealersPage from "./pages/DealersPage";
import NewsPage from "./pages/NewsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <ScrollToTop />
      <Navbar onSearchOpen={() => setSearchOpen(true)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ev" element={<EVPage />} />
          <Route path="/petrol" element={<PetrolPage />} />
          <Route path="/vehicle/:id" element={<VehicleDetailPage />} />
          <Route path="/dealers" element={<DealersPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
      <ChatWidget />

      {/* WhatsApp & Call FABs */}
      <a href="https://wa.me/9779763230000" target="_blank" rel="noreferrer"
        className="fixed bottom-24 right-5 z-40 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg hover:bg-green-600 transition-colors"
        aria-label="WhatsApp">WA</a>
      <a href="tel:+9779763230000"
        className="fixed bottom-10 right-5 z-40 w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg hover:bg-orange-600 transition-colors"
        aria-label="Call">Call</a>
    </>
  );
}
