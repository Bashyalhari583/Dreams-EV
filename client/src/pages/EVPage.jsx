import { useState } from "react";
import { vehicles } from "../data/vehicles";
import VehicleCard from "../components/VehicleCard";

const EV_TYPES = ["electric-bike", "electric-scooter"];
const FILTERS = [
  { value: "all", label: "All" },
  { value: "electric-bike", label: "Electric Bikes" },
  { value: "electric-scooter", label: "Electric Scooters" },
];

export default function EVPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const term = search.trim().toLowerCase();
  const filtered = vehicles.filter((v) => {
    const matchType = EV_TYPES.includes(v.type) && (filter === "all" || v.type === filter);
    const matchSearch = !term || [v.name, v.group, v.summary].join(" ").toLowerCase().includes(term);
    return matchType && matchSearch;
  });

  // Group by type
  const groups = filter === "all" ? EV_TYPES : [filter];

  return (
    <>
      {/* Hero */}
      <div className="relative pt-32 pb-16 bg-gradient-to-b from-brand-cyan/10 to-brand-dark">
        <div className="section-container !py-0 text-center">
          <p className="eyebrow">EV Vehicles</p>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-3">Electric bikes and scooters engineered for Nepal.</h1>
          <p className="text-white/50">Search, filter, compare, and explore premium vehicle details.</p>
        </div>
      </div>

      {/* Controls */}
      <div className="section-container !pt-8 !pb-4">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <input type="search" value={search} onChange={(e) => setSearch(e.target.value)}
            placeholder="Search EV models..."
            className="w-full sm:w-72 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-brand-cyan transition-colors" />
          <div className="flex gap-2">
            {FILTERS.map((f) => (
              <button key={f.value} onClick={() => setFilter(f.value)}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${filter === f.value ? "bg-brand-cyan text-brand-dark font-semibold" : "bg-white/5 text-white/60 hover:bg-white/10"}`}>
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Vehicle Grid */}
      <div className="section-container !pt-4">
        {groups.map((type) => {
          const items = filtered.filter((v) => v.type === type);
          if (!items.length) return null;
          const title = type.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase()) + "s";
          return (
            <section key={type} className="mb-12">
              <h2 className="text-xl font-display font-bold mb-6">{title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((v) => <VehicleCard key={v.id} vehicle={v} />)}
              </div>
            </section>
          );
        })}
        {filtered.length === 0 && <p className="text-center text-white/40 py-12">No models match your search.</p>}
      </div>
    </>
  );
}
