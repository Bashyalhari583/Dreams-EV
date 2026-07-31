import { Link } from "react-router-dom";
import { Zap, Clock, Bell, ArrowRight, Flame } from "lucide-react";
import { useState } from "react";

const PETROL_TEASERS = [
  {
    name: "MC Woliao",
    tag: "Adventure",
    silhouette: "🏍️",
    color: "#f97316",
  },
  {
    name: "MC Moying",
    tag: "Street",
    silhouette: "🏍️",
    color: "#ef4444",
  },
  {
    name: "MC AK",
    tag: "Cruiser",
    silhouette: "🏍️",
    color: "#f59e0b",
  },
  {
    name: "MC DR",
    tag: "Enduro",
    silhouette: "🏍️",
    color: "#f97316",
  },
];

export default function PetrolPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleNotify = () => {
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(249,115,22,.08) 0%, transparent 60%), #020304",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "7rem 1.5rem 4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background texture rings */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 700,
          borderRadius: "50%",
          border: "1px solid rgba(249,115,22,.06)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 480,
          height: 480,
          borderRadius: "50%",
          border: "1px solid rgba(249,115,22,.09)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 260,
          height: 260,
          borderRadius: "50%",
          border: "1px solid rgba(249,115,22,.12)",
          pointerEvents: "none",
        }}
      />

      {/* Flame icon top */}
      <div
        style={{
          width: 68,
          height: 68,
          borderRadius: 18,
          background:
            "linear-gradient(135deg, rgba(249,115,22,.25), rgba(239,68,68,.15))",
          border: "1px solid rgba(249,115,22,.3)",
          display: "grid",
          placeItems: "center",
          marginBottom: "1.75rem",
          boxShadow: "0 0 40px rgba(249,115,22,.2)",
        }}
      >
        <Flame size={30} color="#f97316" />
      </div>

      {/* Badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "5px 14px",
          borderRadius: 999,
          background: "rgba(249,115,22,.10)",
          border: "1px solid rgba(249,115,22,.25)",
          marginBottom: "1.25rem",
        }}
      >
        <Clock size={11} color="#f97316" />
        <span
          style={{
            fontSize: ".65rem",
            fontWeight: 800,
            color: "#f97316",
            letterSpacing: ".12em",
            textTransform: "uppercase",
          }}
        >
          Coming Soon
        </span>
      </div>

      {/* Heading */}
      <h1
        style={{
          fontSize: "clamp(2rem, 6vw, 3.5rem)",
          fontWeight: 900,
          color: "#fff",
          textAlign: "center",
          lineHeight: 1.1,
          marginBottom: ".85rem",
          maxWidth: 620,
        }}
      >
        Petrol Bikes Are{" "}
        <span
          style={{
            background: "linear-gradient(135deg, #f97316, #ef4444)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Reviving Up
        </span>
      </h1>

      <p
        style={{
          color: "rgba(255,255,255,.48)",
          textAlign: "center",
          fontSize: "1rem",
          maxWidth: 480,
          lineHeight: 1.65,
          marginBottom: "2.5rem",
        }}
      >
        We're putting the finishing touches on our petrol lineup — built tough
        for Nepal's roads. Our team is working hard to get this section live
        very soon. Stay tuned.
      </p>

      {/* Teaser cards */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "2.75rem",
          maxWidth: 720,
        }}
      >
        {PETROL_TEASERS.map((bike) => {
          const isHov = hoveredCard === bike.name;
          return (
            <div
              key={bike.name}
              onMouseEnter={() => setHoveredCard(bike.name)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                width: 148,
                borderRadius: 14,
                border: `1px solid ${
                  isHov ? "rgba(249,115,22,.4)" : "rgba(255,255,255,.07)"
                }`,
                background: isHov
                  ? "linear-gradient(160deg, rgba(249,115,22,.10), rgba(0,0,0,.5))"
                  : "rgba(255,255,255,.03)",
                padding: "1.1rem .85rem .85rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: ".5rem",
                transition: "all .22s ease",
                transform: isHov ? "translateY(-4px)" : "translateY(0)",
                boxShadow: isHov ? "0 14px 32px rgba(249,115,22,.14)" : "none",
                cursor: "default",
              }}
            >
              {/* Blurred silhouette / mystery style */}
              <div
                style={{
                  width: "100%",
                  height: 80,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2.8rem",
                  filter: isHov ? "none" : "blur(3px) grayscale(1)",
                  transition: "filter .3s",
                  userSelect: "none",
                }}
              >
                {bike.silhouette}
              </div>

              <p
                style={{
                  color: isHov ? "#fff" : "rgba(255,255,255,.45)",
                  fontWeight: 800,
                  fontSize: ".8rem",
                  textAlign: "center",
                  transition: "color .2s",
                }}
              >
                {bike.name}
              </p>

              <span
                style={{
                  fontSize: ".57rem",
                  padding: "2px 9px",
                  borderRadius: 999,
                  background: `rgba(${bike.color === "#f97316" ? "249,115,22" : bike.color === "#ef4444" ? "239,68,68" : "245,158,11"},.14)`,
                  color: bike.color,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: ".07em",
                }}
              >
                {bike.tag}
              </span>

              <span
                style={{
                  fontSize: ".58rem",
                  color: "rgba(255,255,255,.22)",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: ".1em",
                }}
              >
                {isHov ? "Dropping Soon" : "Classified 🔒"}
              </span>
            </div>
          );
        })}
      </div>

      {/* Notify form */}
      {!submitted ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: ".75rem",
            width: "100%",
            maxWidth: 400,
            marginBottom: "2.5rem",
          }}
        >
          <p
            style={{
              fontSize: ".72rem",
              color: "rgba(255,255,255,.38)",
              textTransform: "uppercase",
              letterSpacing: ".1em",
              fontWeight: 700,
            }}
          >
            <Bell size={11} style={{ display: "inline", marginRight: 5 }} />
            Get notified when we launch
          </p>
          <div style={{ display: "flex", gap: ".6rem", width: "100%" }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleNotify()}
              placeholder="your@email.com"
              style={{
                flex: 1,
                padding: ".65rem 1rem",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,.12)",
                background: "rgba(255,255,255,.05)",
                color: "#fff",
                fontSize: ".85rem",
                outline: "none",
              }}
            />
            <button
              onClick={handleNotify}
              style={{
                padding: ".65rem 1.1rem",
                borderRadius: 10,
                background: "linear-gradient(135deg, #f97316, #ef4444)",
                color: "#fff",
                fontWeight: 800,
                fontSize: ".78rem",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 5,
                whiteSpace: "nowrap",
              }}
            >
              Notify Me <ArrowRight size={13} />
            </button>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: ".7rem 1.4rem",
            borderRadius: 12,
            background: "rgba(249,115,22,.10)",
            border: "1px solid rgba(249,115,22,.25)",
            marginBottom: "2.5rem",
          }}
        >
          <span style={{ fontSize: "1.1rem" }}>🎉</span>
          <p style={{ color: "#f97316", fontWeight: 700, fontSize: ".82rem" }}>
            You're on the list! We'll let you know the moment it's live.
          </p>
        </div>
      )}

      {/* Bottom CTA */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Link
          to="/ev"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: ".65rem 1.3rem",
            borderRadius: 999,
            background: "linear-gradient(135deg, #19d7ff, #0fb8d9)",
            color: "#020304",
            fontWeight: 800,
            fontSize: ".78rem",
            textDecoration: "none",
            letterSpacing: ".04em",
          }}
        >
          <Zap size={14} />
          Explore EV Lineup Instead
        </Link>
        <Link
          to="/contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: ".65rem 1.3rem",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,.14)",
            background: "rgba(255,255,255,.05)",
            color: "rgba(255,255,255,.7)",
            fontWeight: 700,
            fontSize: ".78rem",
            textDecoration: "none",
          }}
        >
          Contact Us for Petrol Inquiries
        </Link>
      </div>
    </div>
  );
}

// import { useState } from "react";
// import { vehicles } from "../data/vehicles";
// import VehicleCard from "../components/VehicleCard";

// const PETROL_TYPES = ["petrol-bike", "petrol-scooter"];
// const FILTERS = [
//   { value: "all", label: "All" },
//   { value: "petrol-bike", label: "Petrol Bikes" },
//   { value: "petrol-scooter", label: "Petrol Scooters" },
// ];

// export default function PetrolPage() {
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("all");

//   const term = search.trim().toLowerCase();
//   const filtered = vehicles.filter((v) => {
//     const matchType = PETROL_TYPES.includes(v.type) && (filter === "all" || v.type === filter);
//     const matchSearch = !term || [v.name, v.group, v.summary].join(" ").toLowerCase().includes(term);
//     return matchType && matchSearch;
//   });

//   const groups = filter === "all" ? PETROL_TYPES : [filter];

//   return (
//     <>
//       <div className="relative pt-32 pb-16 bg-gradient-to-b from-brand-orange/10 to-brand-dark">
//         <div className="section-container !py-0 text-center">
//           <p className="eyebrow !text-brand-orange">Petrol Vehicles</p>
//           <h1 className="text-3xl md:text-5xl font-display font-bold mb-3">Premium petrol bikes and scooters with refined performance.</h1>
//           <p className="text-white/50">Explore engine capacity, mileage, pricing, and complete details.</p>
//         </div>
//       </div>

//       <div className="section-container !pt-8 !pb-4">
//         <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
//           <input type="search" value={search} onChange={(e) => setSearch(e.target.value)}
//             placeholder="Search petrol models..."
//             className="w-full sm:w-72 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-brand-orange transition-colors" />
//           <div className="flex gap-2">
//             {FILTERS.map((f) => (
//               <button key={f.value} onClick={() => setFilter(f.value)}
//                 className={`px-4 py-2 rounded-lg text-sm transition-colors ${filter === f.value ? "bg-brand-orange text-brand-dark font-semibold" : "bg-white/5 text-white/60 hover:bg-white/10"}`}>
//                 {f.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="section-container !pt-4">
//         {groups.map((type) => {
//           const items = filtered.filter((v) => v.type === type);
//           if (!items.length) return null;
//           const title = type.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase()) + "s";
//           return (
//             <section key={type} className="mb-12">
//               <h2 className="text-xl font-display font-bold mb-6">{title}</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {items.map((v) => <VehicleCard key={v.id} vehicle={v} />)}
//               </div>
//             </section>
//           );
//         })}
//         {filtered.length === 0 && <p className="text-center text-white/40 py-12">No models match your search.</p>}
//       </div>
//     </>
//   );
// }
