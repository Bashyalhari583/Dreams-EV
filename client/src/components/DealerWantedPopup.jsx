import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const SESSION_KEY = "dealerWantedPopupShown";

export default function DealerWantedPopup() {
  const [open, setOpen] = useState(false);

  // Show once per browser session, shortly after the page loads
  useEffect(() => {
    let timer;
    try {
      if (!sessionStorage.getItem(SESSION_KEY)) {
        timer = setTimeout(() => {
          setOpen(true);
          sessionStorage.setItem(SESSION_KEY, "1");
        }, 1200);
      }
    } catch {
      // sessionStorage unavailable (private mode etc.) — just skip the popup
    }
    return () => clearTimeout(timer);
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[110] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        >
          <X size={18} />
        </button>
        <Link to="/dealers" onClick={() => setOpen(false)} className="block">
          <img
            src="/images/dealer-wanted-poster.webp"
            alt="Dealer Wanted — GMC Motors, Authorised distributor of MiChe Auto"
            className="w-full h-auto rounded-xl shadow-2xl"
          />
        </Link>
      </div>
    </div>
  );
}
