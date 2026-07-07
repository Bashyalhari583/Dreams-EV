import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { vehicles } from "../data/vehicles";
import VehicleCard from "../components/VehicleCard";

export default function VehicleDetailPage() {
  const { id } = useParams();
  const vehicle = vehicles.find((v) => v.id === id) || vehicles[0];
  const [mainImage, setMainImage] = useState(vehicle.gallery[0]);
  const isEV = vehicle.type.startsWith("electric");

  const related = vehicles.filter((v) => v.id !== vehicle.id && v.type === vehicle.type).slice(0, 3);

  const allSpecs = { ...vehicle.stats, ...vehicle.specs };

  return (
    <div className="pt-20">
      <div className="section-container">
        {/* ─── Main: Gallery + Info ─────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Gallery */}
          <div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4">
              <img src={mainImage} alt={vehicle.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {vehicle.gallery.map((img, i) => (
                <button key={i} onClick={() => setMainImage(img)}
                  className={`aspect-[4/3] rounded-xl overflow-hidden border-2 transition-colors ${img === mainImage ? "border-brand-cyan" : "border-transparent hover:border-white/30"}`}>
                  <img src={img} alt={`${vehicle.name} ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="eyebrow">{vehicle.group}</p>
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">{vehicle.name}</h1>
            <p className="text-white/60 mb-6 text-lg">{vehicle.summary}</p>

            {/* Price */}
            <div className="glass p-5 mb-6">
              <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Price</p>
              <h2 className="text-2xl font-display font-bold text-brand-orange">{vehicle.price}</h2>
              <p className="text-white/50 text-sm mt-1">{vehicle.emi}</p>
            </div>

            {/* Colors */}
            <div className="mb-6">
              <p className="text-xs text-white/40 uppercase tracking-widest mb-3">Available colors</p>
              <div className="flex gap-3">
                {vehicle.colors.map((color) => (
                  <span key={color} className="w-8 h-8 rounded-full border-2 border-white/20" style={{ backgroundColor: color }} />
                ))}
              </div>
            </div>

            <Link to="/contact" className="btn-primary w-full text-center">Book Test Ride</Link>
          </div>
        </div>

        {/* ─── Detail Panels ───────────────────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Specifications */}
          <div className="glass p-6">
            <h2 className="font-display font-bold text-lg mb-4">Specifications</h2>
            <div className="space-y-3">
              {Object.entries(allSpecs).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-white/50 text-sm">{key}</span>
                  <strong className="text-sm">{value}</strong>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="glass p-6">
            <h2 className="font-display font-bold text-lg mb-4">Features</h2>
            <div className="flex flex-wrap gap-2">
              {vehicle.features.map((f) => (
                <span key={f} className="px-3 py-1.5 bg-white/5 rounded-full text-sm text-white/70">{f}</span>
              ))}
            </div>
          </div>

          {/* Performance */}
          <div className="glass p-6">
            <h2 className="font-display font-bold text-lg mb-4">Performance</h2>
            <p className="text-white/60 text-sm leading-relaxed">
              {isEV
                ? "Instant torque delivery, quiet acceleration, smart controller tuning, and low operating cost for urban and highway riding."
                : "Refined throttle response, practical mileage, durable engine tuning, and confident daily performance."}
            </p>
          </div>

          {/* Power / Battery Info */}
          <div className="glass p-6">
            <h2 className="font-display font-bold text-lg mb-4">{isEV ? "Battery Information" : "Engine Information"}</h2>
            <p className="text-white/60 text-sm leading-relaxed">
              {isEV
                ? `${vehicle.specs.Battery} with ${vehicle.stats.Charging} charging and ${vehicle.stats["Battery Range"]} claimed riding range.`
                : `${vehicle.specs.Engine} engine with ${vehicle.stats.Mileage} mileage and ${vehicle.stats["Fuel Tank"]} tank capacity.`}
            </p>
          </div>

          {/* EMI */}
          <div className="glass p-6 md:col-span-2">
            <h2 className="font-display font-bold text-lg mb-4">EMI / Finance Options</h2>
            <p className="text-white/60 text-sm leading-relaxed">
              {vehicle.emi}. Down payment, tenure, and approval are subject to dealer and finance partner confirmation.
            </p>
          </div>
        </div>

        {/* ─── Related ─────────────────────────────────────────────────────── */}
        {related.length > 0 && (
          <section>
            <h2 className="text-xl font-display font-bold mb-6">Similar Models</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((v) => <VehicleCard key={v.id} vehicle={v} />)}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
