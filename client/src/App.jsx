import { Routes, Route } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import SearchOverlay from "./components/SearchOverlay";
import ScrollToTop from "./components/ScrollToTop";

// HomePage — eagerly load (first paint)
import HomePage from "./pages/HomePage";

// Baki sabai pages — lazily load (click garda matra)
const EVPage = lazy(() => import("./pages/EVPage"));
const PetrolPage = lazy(() => import("./pages/PetrolPage"));
const VehicleDetailPage = lazy(() => import("./pages/VehicleDetailPage"));
const DealersPage = lazy(() => import("./pages/DealersPage"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));

// Loading fallback
function PageLoader() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "3px solid rgba(25,215,255,.15)",
          borderTopColor: "#19d7ff",
          animation: "spin .7s linear infinite",
        }}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <ScrollToTop />
      <Navbar onSearchOpen={() => setSearchOpen(true)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />

      <main className="min-h-screen">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ev" element={<EVPage />} />
            <Route path="/petrol" element={<PetrolPage />} />
            <Route path="/vehicle/:id" element={<VehicleDetailPage />} />
            <Route path="/dealers" element={<DealersPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <ChatWidget />

      {/* WhatsApp & Call FABs */}
      <a
        href="https://wa.me/9779763789999"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-24 right-5 z-40 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg hover:bg-green-600 transition-colors"
        aria-label="WhatsApp"
      >
        WA
      </a>
      <a
        href="tel:+9779763789999"
        className="fixed bottom-10 right-5 z-40 w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg hover:bg-orange-600 transition-colors"
        aria-label="Call"
      >
        Call
      </a>
    </>
  );
}
