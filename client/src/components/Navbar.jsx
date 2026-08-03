import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronLeft, ChevronRight, Zap, Search } from "lucide-react";

const EV_VEHICLES = [
  {
    id: "mc-su8",
    name: "MC SU8",
    type: "electric-bike",
    image: "/images/ev/SU8/12668bbc5ce7bf818fc0ebbfb465aa5.webp",
  },
  {
    id: "mc-tank",
    name: "MC Tank",
    type: "electric-bike",
    image: "/images/ev/Tank/00846.webp",
  },
  {
    id: "mc-vmax",
    name: "MC Vmax",
    type: "electric-bike",
    image: "/images/ev/Vmax-2/20250411161753.webp",
  },
  {
    id: "mc-apache",
    name: "MC Apache",
    type: "electric-bike",
    image: "/images/ev/Apache/1e72cff5bbb67a28f8b2e2678b18ff7.webp",
  },
  {
    id: "mc-mohsen",
    name: "MC Mohsen",
    type: "electric-scooter",
    image: "/images/ev/Mohsen/01066.webp",
  },
];

// ─── EV Hover Dropdown Strip ──────────────────────────────────────────────────
function EVDropStrip({ onClose }) {
  const stripRef = useRef(null);
  const [hoveredId, setHoveredId] = useState(null);

  const scroll = (dir) => {
    if (!stripRef.current) return;
    stripRef.current.scrollBy({ left: dir * 260, behavior: "smooth" });
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 78,
        left: 0,
        right: 0,
        zIndex: 99,
        background: "rgba(4,6,10,.97)",
        borderBottom: "1px solid rgba(25,215,255,.12)",
        backdropFilter: "blur(28px) saturate(160%)",
        boxShadow: "0 24px 60px rgba(0,0,0,.7)",
        animation: "evStripIn .18s ease",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: ".6rem clamp(1rem, 4vw, 3rem) .35rem",
          borderBottom: "1px solid rgba(255,255,255,.05)",
        }}
      >
        <p
          style={{
            fontSize: ".62rem",
            letterSpacing: ".14em",
            color: "#19d7ff",
            fontWeight: 800,
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <Zap size={10} />
          Electric Models
          <span style={{ color: "rgba(255,255,255,.25)", fontWeight: 500 }}>
            — {EV_VEHICLES.length} available
          </span>
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {[
            { dir: -1, Icon: ChevronLeft },
            { dir: 1, Icon: ChevronRight },
          ].map(({ dir, Icon }) => (
            <button
              key={dir}
              onClick={() => scroll(dir)}
              style={{
                width: 26,
                height: 26,
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,.12)",
                background: "rgba(255,255,255,.05)",
                color: "rgba(255,255,255,.55)",
                display: "grid",
                placeItems: "center",
                cursor: "pointer",
              }}
            >
              <Icon size={12} />
            </button>
          ))}
          <Link
            to="/ev"
            onClick={onClose}
            style={{
              fontSize: ".62rem",
              fontWeight: 800,
              color: "#19d7ff",
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: ".1em",
              padding: "3px 10px",
              borderRadius: 999,
              border: "1px solid rgba(25,215,255,.25)",
              background: "rgba(25,215,255,.08)",
              marginLeft: 4,
            }}
          >
            View All →
          </Link>
        </div>
      </div>

      {/* Scrollable cards */}
      <div
        ref={stripRef}
        style={{
          display: "flex",
          gap: ".85rem",
          overflowX: "auto",
          padding: ".75rem clamp(1rem, 4vw, 3rem) 1rem",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {EV_VEHICLES.map((v) => {
          const isHov = hoveredId === v.id;
          const isScooter = v.type === "electric-scooter";
          return (
            <Link
              key={v.id}
              to={`/vehicle/${v.id}`}
              onClick={onClose}
              onMouseEnter={() => setHoveredId(v.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                flexShrink: 0,
                width: 180,
                borderRadius: 13,
                border: `1px solid ${isHov ? (isScooter ? "rgba(168,85,247,.4)" : "rgba(25,215,255,.38)") : "rgba(255,255,255,.07)"}`,
                background: isHov
                  ? isScooter
                    ? "linear-gradient(160deg, rgba(168,85,247,.10), rgba(0,0,0,.55))"
                    : "linear-gradient(160deg, rgba(25,215,255,.10), rgba(0,0,0,.55))"
                  : "rgba(255,255,255,.03)",
                padding: ".8rem .75rem .7rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: ".5rem",
                cursor: "pointer",
                textDecoration: "none",
                transition: "all .2s ease",
                transform: isHov ? "translateY(-4px)" : "translateY(0)",
                boxShadow: isHov
                  ? isScooter
                    ? "0 12px 30px rgba(168,85,247,.14)"
                    : "0 12px 30px rgba(25,215,255,.13)"
                  : "none",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: 100,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                {isHov && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      pointerEvents: "none",
                      background: isScooter
                        ? "radial-gradient(ellipse at 50% 70%, rgba(168,85,247,.18) 0%, transparent 70%)"
                        : "radial-gradient(ellipse at 50% 70%, rgba(25,215,255,.18) 0%, transparent 70%)",
                    }}
                  />
                )}
                <img
                  src={v.image}
                  alt={v.name}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    filter: isHov
                      ? isScooter
                        ? "drop-shadow(0 5px 16px rgba(168,85,247,.3))"
                        : "drop-shadow(0 5px 16px rgba(25,215,255,.28))"
                      : "drop-shadow(0 3px 8px rgba(0,0,0,.55))",
                    transition: "filter .2s",
                    position: "relative",
                    zIndex: 1,
                  }}
                />
              </div>
              <div style={{ textAlign: "center", width: "100%" }}>
                <p
                  style={{
                    color: isHov ? "#fff" : "rgba(255,255,255,.8)",
                    fontWeight: 800,
                    fontSize: ".78rem",
                    lineHeight: 1.2,
                    transition: "color .18s",
                  }}
                >
                  {v.name}
                </p>
                <span
                  style={{
                    display: "inline-block",
                    marginTop: 3,
                    fontSize: ".55rem",
                    padding: "2px 7px",
                    borderRadius: 999,
                    background: isScooter
                      ? "rgba(168,85,247,.15)"
                      : "rgba(25,215,255,.12)",
                    color: isScooter ? "#c084fc" : "#19d7ff",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: ".07em",
                  }}
                >
                  {isScooter ? "E-Scooter" : "E-Bike"}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 4,
                  width: "100%",
                  padding: ".38rem",
                  borderRadius: 7,
                  background: isHov
                    ? isScooter
                      ? "linear-gradient(135deg, #a855f7, #7c3aed)"
                      : "linear-gradient(135deg, #19d7ff, #0fb8d9)"
                    : "rgba(255,255,255,.05)",
                  color: isHov
                    ? isScooter
                      ? "#fff"
                      : "#020304"
                    : "rgba(255,255,255,.32)",
                  fontWeight: 800,
                  fontSize: ".63rem",
                  textTransform: "uppercase",
                  letterSpacing: ".07em",
                  border: isHov ? "none" : "1px solid rgba(255,255,255,.08)",
                  transition: "all .18s",
                }}
              >
                Explore <ChevronRight size={9} />
              </div>
            </Link>
          );
        })}
      </div>

      <style>{`
        @keyframes evStripIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
export default function Navbar({ onSearchOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [evOpen, setEvOpen] = useState(false);
  const closeTimer = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 35);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setEvOpen(false);
  }, [location]);

  const openEV = () => {
    clearTimeout(closeTimer.current);
    setEvOpen(true);
  };
  const closeEV = () => {
    closeTimer.current = setTimeout(() => setEvOpen(false), 150);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/ev", label: "EV Vehicles", hasStrip: true },
    { to: "/petrol", label: "Petrol Vehicles" },
    { to: "/dealers", label: "Dealers" },
    { to: "/gallery", label: "Gallery" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
        style={{
          minHeight: 78,
          padding: ".75rem clamp(1rem, 4vw, 3rem)",
          borderBottom: evOpen
            ? "1px solid transparent"
            : "1px solid rgba(255,255,255,.08)",
          background:
            scrolled || evOpen ? "rgba(0,0,0,.95)" : "rgba(2,3,4,.28)",
          backdropFilter: "blur(20px) saturate(150%)",
          boxShadow: scrolled ? "0 18px 60px rgba(0,0,0,.44)" : "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {/* ── Brand ── */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 min-w-0 flex-shrink-0"
          style={{ maxWidth: "calc(100% - 120px)" }}
        >
          <img
            src="/images/logo.webp"
            alt="MiChe Auto Nepal"
            style={{
              width: 42,
              height: 42,
              borderRadius: 8,
              objectFit: "contain",
              flexShrink: 0,
            }}
          />
          <span className="min-w-0">
            <strong
              className="block font-display text-white leading-none truncate"
              style={{
                textTransform: "uppercase",
                letterSpacing: ".05em",
                fontSize: "clamp(.65rem, 2.5vw, .95rem)",
              }}
            >
              MICHE AUTO NEPAL
            </strong>
            {/* <small
              className="block text-[#aeb7c4] mt-[.16rem]"
              style={{ fontSize: "clamp(.55rem, 1.8vw, .72rem)" }}
            >
              Pvt. Ltd.
            </small> */}
          </span>
        </Link>

        {/* ── Desktop Links ── */}
        <div
          className="hidden lg:flex justify-center items-center"
          style={{ gap: "clamp(.55rem, 1.1vw, 1.2rem)" }}
        >
          {navLinks.map((link) =>
            link.hasStrip ? (
              <div
                key={link.to}
                onMouseEnter={openEV}
                onMouseLeave={closeEV}
                style={{ position: "relative" }}
              >
                <Link
                  to={link.to}
                  className="inline-flex items-center gap-1 py-3 transition-colors"
                  style={{
                    color:
                      isActive(link.to) || evOpen
                        ? "#19d7ff"
                        : "rgba(248,251,255,.76)",
                    fontSize: ".76rem",
                    fontWeight: 900,
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                  }}
                >
                  {link.label}
                  <svg
                    width="8"
                    height="5"
                    viewBox="0 0 8 5"
                    fill="currentColor"
                    style={{
                      opacity: 0.55,
                      transform: evOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform .2s",
                    }}
                  >
                    <path d="M0 0l4 5 4-5H0z" />
                  </svg>
                </Link>
                {evOpen && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "60%",
                      height: 2,
                      background: "#19d7ff",
                      borderRadius: 999,
                    }}
                  />
                )}
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className="inline-flex py-3 transition-colors"
                style={{
                  color: isActive(link.to)
                    ? "#19d7ff"
                    : "rgba(248,251,255,.76)",
                  fontSize: ".76rem",
                  fontWeight: 900,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                }}
              >
                {link.label}
              </Link>
            ),
          )}
        </div>

        {/* ── Actions ── */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={onSearchOpen}
            aria-label="Search"
            style={{
              width: 40,
              height: 40,
              border: "1px solid rgba(255,255,255,.16)",
              borderRadius: 999,
              background: "rgba(255,255,255,.07)",
              color: "#fff",
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
            }}
          >
            <Search size={17} />
          </button>

          <a
            href="tel:+9779763230000"
            className="hidden sm:inline-flex items-center justify-center"
            style={{
              minHeight: 40,
              padding: "0 .85rem",
              border: "1px solid rgba(255,255,255,.16)",
              borderRadius: 999,
              background: "rgba(255,255,255,.07)",
              color: "#fff",
              fontWeight: 900,
              fontSize: ".78rem",
            }}
          >
            Call
          </a>

          <Link
            to="/ev"
            className="hidden md:inline-flex items-center justify-center"
            style={{
              minHeight: 40,
              padding: "0 .85rem",
              borderRadius: 999,
              background: "linear-gradient(135deg, #fff, #d8e0ea)",
              color: "#020304",
              fontWeight: 900,
              border: "none",
              fontSize: ".78rem",
              whiteSpace: "nowrap",
            }}
          >
            Explore Models
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden grid place-items-center"
            style={{
              width: 40,
              height: 40,
              border: "1px solid rgba(255,255,255,.16)",
              borderRadius: 8,
              background: "rgba(255,255,255,.07)",
              color: "#fff",
              cursor: "pointer",
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>

        {/* ── Mobile Menu — left dropdown ── */}
        {menuOpen && (
          <div
            className="lg:hidden animate-fade-up"
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              marginTop: 0,
              width: "min(300px, 100vw)",
              background: "rgba(4,6,8,.97)",
              backdropFilter: "blur(22px)",
              borderRight: "1px solid rgba(255,255,255,.12)",
              borderBottom: "1px solid rgba(255,255,255,.12)",
              padding: "1rem",
              zIndex: 99,
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block py-3 px-4 rounded-lg transition-colors"
                style={{
                  color: isActive(link.to)
                    ? "#19d7ff"
                    : "rgba(248,251,255,.76)",
                  fontSize: ".85rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: ".06em",
                  background: isActive(link.to)
                    ? "rgba(25,215,255,.08)"
                    : "transparent",
                  marginBottom: ".1rem",
                }}
              >
                {link.label}
              </Link>
            ))}

            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,.07)",
                marginTop: ".75rem",
                paddingTop: ".75rem",
              }}
            >
              <p
                style={{
                  fontSize: ".6rem",
                  letterSpacing: ".12em",
                  color: "#19d7ff",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  marginBottom: ".5rem",
                  paddingLeft: "1rem",
                }}
              >
                EV Models
              </p>
              {EV_VEHICLES.map((v) => (
                <Link
                  key={v.id}
                  to={`/vehicle/${v.id}`}
                  className="flex items-center justify-between py-2 px-4 rounded-lg"
                  style={{
                    color: "rgba(255,255,255,.6)",
                    fontSize: ".8rem",
                    fontWeight: 600,
                  }}
                >
                  <span>{v.name}</span>
                  <span
                    style={{
                      fontSize: ".6rem",
                      color:
                        v.type === "electric-scooter" ? "#c084fc" : "#19d7ff",
                      fontWeight: 700,
                      textTransform: "uppercase",
                    }}
                  >
                    {v.type === "electric-scooter" ? "E-Scooter" : "E-Bike"}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* EV strip dropdown */}
      {evOpen && (
        <div onMouseEnter={openEV} onMouseLeave={closeEV}>
          <EVDropStrip onClose={() => setEvOpen(false)} />
        </div>
      )}
    </>
  );
}
