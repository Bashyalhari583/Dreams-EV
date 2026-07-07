import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar({ onSearchOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 35);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/ev", label: "EV Vehicles" },
    { to: "/petrol", label: "Petrol Vehicles" },
    { to: "/dealers", label: "Dealers" },
    { to: "/news", label: "News / Blog" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
      style={{
        minHeight: 78,
        padding: ".75rem clamp(1rem, 4vw, 3rem)",
        borderBottom: "1px solid rgba(255,255,255,.08)",
        background: scrolled ? "rgba(0,0,0,.9)" : "rgba(2,3,4,.28)",
        backdropFilter: "blur(20px) saturate(150%)",
        boxShadow: scrolled ? "0 18px 60px rgba(0,0,0,.44)" : "none",
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        alignItems: "center",
        gap: "1rem",
      }}>

      {/* ── Brand ──────────────────────────────────────────────────────── */}
      <Link to="/" className="inline-flex items-center gap-3 min-w-max">
        <span
          className="grid place-items-center font-display font-bold text-white"
          style={{
            width: 46, height: 46,
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,.18)",
            background: "linear-gradient(135deg, rgba(255,255,255,.16), rgba(255,255,255,.04))",
            boxShadow: "inset 0 0 20px rgba(255,255,255,.08), 0 0 28px rgba(25,215,255,.15)",
          }}>
          MC
        </span>
        <span className="hidden sm:block">
          <strong className="block font-display text-white leading-none">MiChe Auto Nepal</strong>
          <small className="block text-[#aeb7c4] text-[.72rem] mt-[.16rem]">Pvt. Ltd.</small>
        </span>
      </Link>

      {/* ── Desktop Nav Links ──────────────────────────────────────────── */}
      <div className="hidden lg:flex justify-center items-center" style={{ gap: "clamp(.55rem, 1.1vw, 1.2rem)" }}>
        {navLinks.map((link) => (
          <Link key={link.to} to={link.to}
            className="inline-flex py-3 transition-colors"
            style={{
              color: isActive(link.to) ? "#fff" : "rgba(248,251,255,.76)",
              fontSize: ".76rem",
              fontWeight: 900,
              letterSpacing: ".08em",
              textTransform: "uppercase",
            }}>
            {link.label}
          </Link>
        ))}
      </div>

      {/* ── Actions ────────────────────────────────────────────────────── */}
      <div className="flex items-center gap-2.5">
        {/* Search */}
        <button onClick={onSearchOpen} aria-label="Search"
          style={{
            width: 42, height: 42,
            border: "1px solid rgba(255,255,255,.16)",
            borderRadius: 999,
            background: "rgba(255,255,255,.07)",
            color: "#fff",
            fontSize: "1.35rem",
            display: "grid",
            placeItems: "center",
          }}>
          ⌕
        </button>

        {/* Call */}
        <a href="tel:+9779763230000"
          className="hidden sm:inline-flex items-center justify-center"
          style={{
            minHeight: 42,
            padding: "0 .95rem",
            border: "1px solid rgba(255,255,255,.16)",
            borderRadius: 999,
            background: "rgba(255,255,255,.07)",
            color: "#fff",
            fontWeight: 900,
          }}>
          Call
        </a>

        {/* Explore Models */}
        <Link to="/ev" className="hidden md:inline-flex items-center justify-center"
          style={{
            minHeight: 42,
            padding: "0 .95rem",
            borderRadius: 999,
            background: "linear-gradient(135deg, #fff, #d8e0ea)",
            color: "#020304",
            fontWeight: 900,
            border: "none",
          }}>
          Explore Models
        </Link>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden grid place-items-center"
          style={{
            width: 44, height: 44,
            border: "1px solid rgba(255,255,255,.16)",
            borderRadius: 8,
            background: "rgba(255,255,255,.07)",
            color: "#fff",
          }}
          aria-label="Toggle menu">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* ── Mobile Menu ────────────────────────────────────────────────── */}
      {menuOpen && (
        <div className="lg:hidden col-span-3 animate-fade-up"
          style={{
            background: "rgba(4,6,8,.95)",
            backdropFilter: "blur(22px)",
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,.14)",
            padding: "1rem",
            marginTop: ".5rem",
          }}>
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to}
              className="block py-3 px-4 rounded-lg transition-colors"
              style={{
                color: isActive(link.to) ? "#19d7ff" : "rgba(248,251,255,.76)",
                fontSize: ".85rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: ".06em",
                background: isActive(link.to) ? "rgba(25,215,255,.08)" : "transparent",
              }}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
