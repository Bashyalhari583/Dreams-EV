import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { vehicles, categories } from "../data/vehicles";
import VehicleCard from "../components/VehicleCard";
import hero from "../../public/hero.webp";

// ─── Featured vehicle config ─────────────────────────────────────────────────
const FEATURED_IDS = ["mc-su8", "mc-tank", "mc-vmax", "mc-apache", "mc-mohsen"];
const FEATURED_LABELS = [
  "Flagship EV Bike",
  "Power Cruiser",
  "Sport EV",
  "Trail Blazer",
  "Urban Scooter",
];

// ─── Feature grid items ──────────────────────────────────────────────────────
const FEATURES = [
  {
    abbr: "EV",
    title: "Advanced EV Technology",
    desc: "Smart controllers, efficient motors, and rider-focused digital systems.",
  },
  {
    abbr: "FC",
    title: "Fast Charging",
    desc: "Selected EV models support practical charging windows for daily use.",
  },
  {
    abbr: "LB",
    title: "Long Battery Life",
    desc: "Durable lithium battery systems built for repeated city and highway cycles.",
  },
  {
    abbr: "HP",
    title: "High Performance",
    desc: "Instant EV torque and refined petrol powertrains for confident riding.",
  },
  {
    abbr: "TD",
    title: "Trusted Dealership",
    desc: "Clear inquiry flow, model guidance, and professional showroom support.",
  },
  {
    abbr: "NS",
    title: "Nationwide Service",
    desc: "Dealer and service center growth designed for riders across Nepal.",
  },
  {
    abbr: "AP",
    title: "Affordable Pricing",
    desc: "Premium presentation with practical pricing and EMI-ready options.",
  },
  {
    abbr: "PD",
    title: "Premium Design",
    desc: "Modern automotive surfaces, LED signatures, and luxury showroom appeal.",
  },
];

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [visible, setVisible] = useState(true);
  const featuredVehicles = FEATURED_IDS.map((id) =>
    vehicles.find((v) => v.id === id),
  ).filter(Boolean);
  const total = featuredVehicles.length;

  const goTo = (next) => {
    setVisible(false);
    setTimeout(() => {
      setActiveSlide((next + total) % total);
      setVisible(true);
    }, 220);
  };

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(() => goTo(activeSlide + 1), 6500);
    return () => clearInterval(timer);
  }, [activeSlide]);

  const current = featuredVehicles[activeSlide];

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════════
          HERO — Full-screen video background, left-aligned content
          Matches original: gradient text, energy lines, shade overlay
      ═══════════════════════════════════════════════════════════════════════ */}
      <header
        className="relative min-h-screen grid items-center overflow-hidden"
        style={{ padding: "7rem max(18px, calc((100vw - 1200px) / 2)) 4rem" }}
      >
        {/* Video Background */}
        <div
          className="absolute inset-0 overflow-hidden hero-bg"
          style={{
            backgroundImage: hero && `url('${hero}')`,
            backgroundSize: "cover",
            backgroundPosition: "64% center",
            filter: "brightness(.42) contrast(1.18) saturate(1.08)",
          }}
        >
          <video
            className="hero-video absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "64% center" }}
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-motorcycle-rider-riding-on-a-country-road-41716-large.mp4"
              type="video/mp4"
            />
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-curvy-road-on-a-tree-covered-hill-41537-large.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Shade Overlay (brand-colored glows + dark gradient) */}
        <div className="hero-shade absolute inset-0 z-[1] pointer-events-none" />

        {/* Energy Lines (scanning light effect) */}
        <div className="energy-lines absolute inset-0 z-[2] pointer-events-none" />

        {/* Hero Content — LEFT aligned, max-width 760px */}
        <div className="relative z-[3]" style={{ maxWidth: 760 }}>
          <p className="eyebrow animate-fade-up">
            Electric and petrol bikes and scooters
          </p>

          <h1
            className="hero-gradient-text animate-fade-up mt-4 mb-4 font-display font-bold uppercase"
            style={{
              fontSize: "clamp(3rem, 8vw, 7.4rem)",
              lineHeight: ".86",
              animationDelay: "0.1s",
            }}
          >
            Powering Nepal's Future Mobility
          </h1>

          <p
            className="animate-fade-up"
            style={{
              color: "rgba(248, 251, 255, .82)",
              fontSize: "clamp(1.05rem, 2vw, 1.35rem)",
              lineHeight: "1.7",
              animationDelay: "0.2s",
            }}
          >
            Premium Electric & Petrol Bikes and Scooters
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 mt-8 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link to="/ev" className="btn-primary">
              Explore EV Models
            </Link>
            <Link to="/petrol" className="btn-ghost">
              Explore Petrol Models
            </Link>
          </div>

          {/* Hero Stats — Glass cards in a 3-column grid */}
          <div
            className="grid grid-cols-3 gap-3 mt-8 animate-fade-up"
            style={{ maxWidth: 650, animationDelay: "0.4s" }}
          >
            {[
              { value: "150km+", label: "EV range" },
              { value: "110km/h", label: "Top speed" },
              { value: "3hrs", label: "Fast charging" },
            ].map((stat) => (
              <div key={stat.label} className="stat-card">
                <strong
                  className="text-white text-2xl block tracking-normal"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {stat.value}
                </strong>
                <span className="text-[#aeb7c4] text-xs uppercase tracking-widest font-bold">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════════════════
          CATEGORIES — 4-column grid with image backgrounds
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="section-container">
        <div className="mb-8" style={{ maxWidth: 820 }}>
          <p className="eyebrow">Product universe</p>
          <h2 className="section-heading font-display font-bold mt-3">
            Four focused categories. One premium dealership experience.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => {
            const img =
              cat.type === "electric-bike"
                ? "../images/ev/ev.webp"
                : vehicles.find((v) => v.type === cat.type)?.image;
            return (
              <Link
                key={cat.type}
                to={cat.path}
                className="glass-hover group relative isolate grid items-end p-4"
                style={{ minHeight: 390 }}
              >
                {/* Background image */}
                <div
                  className="category-card-bg"
                  style={{ backgroundImage: img && `url('${img}')` }}
                />
                <div className="category-card-overlay" />
                {/* Content */}
                <div className="relative z-10">
                  <p className="eyebrow">{cat.type.replace("-", " ")}</p>
                  <h3 className="font-display font-bold text-2xl uppercase">
                    {cat.title}
                  </h3>
                  <p className="text-white/70 text-sm mt-1 leading-relaxed">
                    {cat.desc}
                  </p>
                  <span
                    className="btn-ghost mt-4 text-xs inline-flex"
                    style={{ minHeight: 40, padding: ".6rem 1rem" }}
                  >
                    Explore
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FEATURED VEHICLES — Dark band section with slider
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="dark-band" style={{ overflow: "hidden" }}>
        <div className="section-container">
          {/* Header row */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
              marginBottom: "3rem",
            }}
          >
            <div style={{ maxWidth: 600 }}>
              <p className="eyebrow">Featured vehicles</p>
              <h2 className="section-heading font-display font-bold mt-3">
                Trending EV bikes, popular scooters, new launches, and best
                sellers.
              </h2>
            </div>

            {/* Slide counter + dots */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: ".6rem",
              }}
            >
              <span
                style={{
                  fontSize: ".72rem",
                  fontWeight: 800,
                  letterSpacing: ".12em",
                  color: "rgba(255,255,255,.3)",
                  textTransform: "uppercase",
                }}
              >
                <span style={{ color: "#19d7ff", fontSize: "1.1rem" }}>
                  {String(activeSlide + 1).padStart(2, "0")}
                </span>{" "}
                / {String(total).padStart(2, "0")}
              </span>
              <div style={{ display: "flex", gap: 6 }}>
                {featuredVehicles.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    style={{
                      width: i === activeSlide ? 28 : 8,
                      height: 8,
                      borderRadius: 999,
                      background:
                        i === activeSlide
                          ? "linear-gradient(90deg, #19d7ff, #0fb8d9)"
                          : "rgba(255,255,255,.18)",
                      border: "none",
                      cursor: "pointer",
                      transition: "all .35s cubic-bezier(.2,.72,.18,1)",
                      padding: 0,
                    }}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div
            style={{
              width: "100%",
              height: 2,
              background: "rgba(255,255,255,.07)",
              borderRadius: 999,
              marginBottom: "2.5rem",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                borderRadius: 999,
                background: "linear-gradient(90deg, #19d7ff, #0fb8d9)",
                width: `${((activeSlide + 1) / total) * 100}%`,
                transition: "width .6s cubic-bezier(.2,.72,.18,1)",
              }}
            />
          </div>

          {current && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "clamp(2rem, 6vw, 5rem)",
                alignItems: "center",
                opacity: visible ? 1 : 0,
                transform: visible
                  ? "translateY(0) scale(1)"
                  : "translateY(8px) scale(.98)",
                transition: "opacity .18s ease, transform .18s ease",
              }}
              className="max-md:!grid-cols-1"
            >
              {/* ── Left: Copy ── */}
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {/* Label badge */}
                <div>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "4px 12px",
                      borderRadius: 999,
                      background: "rgba(25,215,255,.10)",
                      border: "1px solid rgba(25,215,255,.22)",
                      fontSize: ".62rem",
                      fontWeight: 800,
                      color: "#19d7ff",
                      textTransform: "uppercase",
                      letterSpacing: ".1em",
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: 999,
                        background: "#19d7ff",
                        display: "inline-block",
                        animation: "pulse 1.6s ease-in-out infinite",
                      }}
                    />
                    {FEATURED_LABELS[activeSlide]}
                  </span>
                </div>

                <h3
                  className="font-display font-bold uppercase"
                  style={{
                    fontSize: "clamp(2.4rem, 5vw, 5rem)",
                    lineHeight: ".88",
                    letterSpacing: "-.01em",
                  }}
                >
                  {current.name}
                </h3>

                <p
                  style={{
                    color: "rgba(255,255,255,.65)",
                    lineHeight: 1.7,
                    fontSize: ".95rem",
                  }}
                >
                  {current.summary}
                </p>

                {/* Spec pills */}
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: ".6rem" }}
                >
                  {Object.entries(current.stats).map(([label, value]) => (
                    <div
                      key={label}
                      style={{
                        padding: ".5rem .9rem",
                        borderRadius: 10,
                        background: "rgba(255,255,255,.05)",
                        border: "1px solid rgba(255,255,255,.1)",
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        minWidth: 80,
                      }}
                    >
                      <strong
                        style={{
                          color: "#fff",
                          fontSize: "1rem",
                          fontWeight: 800,
                          lineHeight: 1.1,
                        }}
                      >
                        {value}
                      </strong>
                      <span
                        style={{
                          color: "#aeb7c4",
                          fontSize: ".58rem",
                          textTransform: "uppercase",
                          letterSpacing: ".1em",
                          fontWeight: 700,
                        }}
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div
                  style={{
                    display: "flex",
                    gap: ".85rem",
                    flexWrap: "wrap",
                    alignItems: "center",
                  }}
                >
                  <Link to={`/vehicle/${current.id}`} className="btn-primary">
                    View Details
                  </Link>

                  {/* Prev / Next inline */}
                  <div style={{ display: "flex", gap: ".5rem" }}>
                    <button
                      onClick={() => goTo(activeSlide - 1)}
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 999,
                        border: "1px solid rgba(255,255,255,.14)",
                        background: "rgba(255,255,255,.07)",
                        color: "#fff",
                        fontSize: "1.3rem",
                        display: "grid",
                        placeItems: "center",
                        cursor: "pointer",
                        transition: "border-color .2s",
                      }}
                      aria-label="Previous"
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => goTo(activeSlide + 1)}
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 999,
                        border: "1px solid rgba(255,255,255,.14)",
                        background: "rgba(255,255,255,.07)",
                        color: "#fff",
                        fontSize: "1.3rem",
                        display: "grid",
                        placeItems: "center",
                        cursor: "pointer",
                        transition: "border-color .2s",
                      }}
                      aria-label="Next"
                    >
                      ›
                    </button>
                  </div>
                </div>
              </div>

              {/* ── Right: Image ── */}
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: 280,
                }}
              >
                {/* Glow blob behind bike */}
                <div
                  style={{
                    position: "absolute",
                    width: "70%",
                    height: "60%",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(ellipse, rgba(25,215,255,.14) 0%, transparent 70%)",
                    filter: "blur(32px)",
                    pointerEvents: "none",
                    zIndex: 0,
                  }}
                />

                <div
                  className="animate-drift"
                  style={{ position: "relative", zIndex: 1, width: "100%" }}
                >
                  <img
                    src={current.image}
                    alt={current.name}
                    className="featured-media-img"
                  />
                </div>

                {/* Bottom reflection line */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "10%",
                    right: "10%",
                    height: 1,
                    background:
                      "linear-gradient(90deg, transparent, rgba(25,215,255,.3), transparent)",
                  }}
                />
              </div>
            </div>
          )}
        </div>

        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: .4; transform: scale(.7); }
          }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          WHY MICHE — 4x2 feature grid with glass cards
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="section-container">
        <div className="mb-8" style={{ maxWidth: 820 }}>
          <p className="eyebrow">Why choose MiChe Auto</p>
          <h2 className="section-heading font-display font-bold mt-3">
            Advanced mobility backed by a trusted Nepal dealership.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className="glass p-5 transition-all duration-300 hover:-translate-y-2 hover:border-[rgba(51,255,153,.34)]"
              style={{ minHeight: 230 }}
            >
              <div className="feature-icon-box mb-4">
                <span className="text-brand-cyan text-sm font-bold">
                  {f.abbr}
                </span>
              </div>
              <h3 className="font-display font-bold mb-2">{f.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{f.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
