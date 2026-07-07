import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { vehicles } from "../data/vehicles";

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!open) return null;

  const term = query.trim().toLowerCase();
  const results = vehicles
    .filter((v) => !term || [v.name, v.group, v.summary].join(" ").toLowerCase().includes(term))
    .slice(0, 8);

  return (
    <div className="fixed inset-0 z-[60] bg-brand-dark/95 backdrop-blur-lg flex items-start justify-center pt-24 px-4" onClick={onClose}>
      <div className="w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3 mb-6">
          <input ref={inputRef} type="search" value={query} onChange={(e) => setQuery(e.target.value)}
            placeholder="Search MiChe vehicles..."
            className="flex-1 bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-white/40 outline-none focus:border-brand-cyan transition-colors" />
          <button onClick={onClose} className="p-3 text-white/60 hover:text-white" aria-label="Close search">
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col gap-2">
          {results.map((v) => (
            <Link key={v.id} to={`/vehicle/${v.id}`} onClick={onClose}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/10 transition-colors">
              <img src={v.image} alt={v.name} className="w-16 h-12 object-cover rounded-lg" />
              <div>
                <strong className="text-white text-sm">{v.name}</strong>
                <p className="text-white/40 text-xs">{v.group} · {v.price}</p>
              </div>
            </Link>
          ))}
          {results.length === 0 && (
            <p className="text-center text-white/40 py-8">No vehicles match your search.</p>
          )}
        </div>
      </div>
    </div>
  );
}
