import { Link } from "react-router-dom";

export default function VehicleCard({ vehicle }) {
  return (
    <article className="glass-hover overflow-hidden group">
      <Link to={`/vehicle/${vehicle.id}`} className="block aspect-[4/3] overflow-hidden">
        <img src={vehicle.image} alt={vehicle.name} loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </Link>
      <div className="p-5">
        <p className="eyebrow">{vehicle.group}</p>
        <h3 className="text-lg font-display font-bold mb-2">{vehicle.name}</h3>
        <p className="text-white/60 text-sm mb-4 line-clamp-2">{vehicle.summary}</p>

        {/* Key Stats */}
        <div className="flex flex-wrap gap-3 mb-4">
          {Object.entries(vehicle.stats).map(([label, value]) => (
            <span key={label} className="text-xs">
              <strong className="text-brand-cyan block">{value}</strong>
              <span className="text-white/40">{label}</span>
            </span>
          ))}
        </div>

        <p className="text-brand-orange font-semibold mb-4">{vehicle.price}</p>
        <Link to={`/vehicle/${vehicle.id}`} className="btn-primary text-sm w-full text-center">
          View Details
        </Link>
      </div>
    </article>
  );
}
