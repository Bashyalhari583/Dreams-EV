import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { vehicles, categories } from "../data/vehicles";
import VehicleCard from "../components/VehicleCard";
import hero from "../../public/hero.jpg";

// ─── Featured vehicle config ─────────────────────────────────────────────────
const FEATURED_IDS = ["thunder-ev", "city-spark", "titan-400", "royal-150"];
const FEATURED_LABELS = [
  "Trending EV Bike",
  "Popular Scooter",
  "New Launch",
  "Best Seller",
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
  const featuredVehicles = FEATURED_IDS.map((id) =>
    vehicles.find((v) => v.id === id),
  );

  // Auto-rotate featured slider
  useEffect(() => {
    const timer = setInterval(() => setActiveSlide((i) => (i + 1) % 4), 6500);
    return () => clearInterval(timer);
  }, []);

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
          className="absolute inset-0 overflow-hidden"
          style={{
            backgroundImage: hero && `url('${hero}')`,
            backgroundSize: "cover",
            backgroundPosition: "64% center",
            filter: "brightness(.42) contrast(1.18) saturate(1.08)",
          }}
        >
          <video
            className="hero-video absolute inset-0 w-full h-full object-cover"
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
            const img = vehicles.find((v) => v.type === cat.type)?.image;
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
      <section className="dark-band">
        <div className="section-container">
          <div className="mb-8" style={{ maxWidth: 820 }}>
            <p className="eyebrow">Featured vehicles</p>
            <h2 className="section-heading font-display font-bold mt-3">
              Trending EV bikes, popular scooters, new launches, and best
              sellers.
            </h2>
          </div>

          {current && (
            <div
              className="grid items-center gap-3"
              style={{ gridTemplateColumns: "auto 1fr auto" }}
            >
              {/* Prev Arrow */}
              <button
                onClick={() => setActiveSlide((activeSlide + 3) % 4)}
                className="w-12 h-12 rounded-full border border-white/[.14] bg-white/[.08] text-white text-2xl flex-shrink-0 flex items-center justify-center hover:border-brand-cyan/40 transition-colors"
                aria-label="Previous"
              >
                ‹
              </button>

              {/* Slide Content */}
              <div
                className="grid md:grid-cols-[.82fr_1.18fr] gap-6 lg:gap-12 items-center min-w-0 animate-fade-up"
                key={activeSlide}
              >
                {/* Copy */}
                <div className="grid gap-4">
                  <p className="eyebrow">{FEATURED_LABELS[activeSlide]}</p>
                  <h3
                    className="font-display font-bold uppercase"
                    style={{
                      fontSize: "clamp(2rem, 5vw, 4.6rem)",
                      lineHeight: ".92",
                    }}
                  >
                    {current.name}
                  </h3>
                  <p className="text-white/75 leading-relaxed">
                    {current.summary}
                  </p>
                  {/* Spec list */}
                  <div className="flex flex-wrap gap-4">
                    {Object.entries(current.stats).map(([label, value]) => (
                      <span key={label} className="text-sm">
                        <strong className="text-white block text-lg">
                          {value}
                        </strong>
                        <span className="text-[#aeb7c4] text-xs uppercase tracking-wider">
                          {label}
                        </span>
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/vehicle/${current.id}`}
                    className="btn-primary w-max"
                  >
                    View More
                  </Link>
                </div>

                {/* Media */}
                <div className="animate-drift">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="featured-media-img"
                  />
                </div>
              </div>

              {/* Next Arrow */}
              <button
                onClick={() => setActiveSlide((activeSlide + 1) % 4)}
                className="w-12 h-12 rounded-full border border-white/[.14] bg-white/[.08] text-white text-2xl flex-shrink-0 flex items-center justify-center hover:border-brand-cyan/40 transition-colors"
                aria-label="Next"
              >
                ›
              </button>
            </div>
          )}
        </div>
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
