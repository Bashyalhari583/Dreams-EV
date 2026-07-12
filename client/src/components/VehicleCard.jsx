// import { Link } from "react-router-dom";

// export default function VehicleCard({ vehicle }) {
//   return (
//     <article className="glass-hover overflow-hidden group">
//       <Link to={`/vehicle/${vehicle.id}`} className="block aspect-[4/3] overflow-hidden">
//         <img src={vehicle.image} alt={vehicle.name} loading="lazy"
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
//       </Link>
//       <div className="p-5">
//         <p className="eyebrow">{vehicle.group}</p>
//         <h3 className="text-lg font-display font-bold mb-2">{vehicle.name}</h3>
//         <p className="text-white/60 text-sm mb-4 line-clamp-2">{vehicle.summary}</p>

//         {/* Key Stats */}
//         <div className="flex flex-wrap gap-3 mb-4">
//           {Object.entries(vehicle.stats).map(([label, value]) => (
//             <span key={label} className="text-xs">
//               <strong className="text-brand-cyan block">{value}</strong>
//               <span className="text-white/40">{label}</span>
//             </span>
//           ))}
//         </div>

//         <p className="text-brand-orange font-semibold mb-4">{vehicle.price}</p>
//         <Link to={`/vehicle/${vehicle.id}`} className="btn-primary text-sm w-full text-center">
//           View Details
//         </Link>
//       </div>
//     </article>
//   );
// }

// import { Link } from "react-router-dom";
// import { useRef } from "react";

// export default function VehicleCard({ vehicle }) {
//   const imgRef = useRef(null);

//   // Mouse move — sirf IMAGE rotate huncha
//   function handleMouseMove(e) {
//     const img = imgRef.current;
//     if (!img) return;
//     const rect = img.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;
//     const rotateX = ((y - centerY) / centerY) * -20;
//     const rotateY = ((x - centerX) / centerX) * 20;
//     img.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`;
//   }

//   // Mouse leave — image reset
//   function handleMouseLeave() {
//     const img = imgRef.current;
//     if (!img) return;
//     img.style.transform =
//       "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)";
//   }

//   return (
//     <article className="glass-hover overflow-hidden group">
//       {/* IMAGE CONTAINER — mouse event yahi cha */}
//       <div
//         className="block aspect-[4/3] overflow-hidden cursor-pointer"
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         style={{ perspective: "600px" }}
//       >
//         <Link to={`/vehicle/${vehicle.id}`}>
//           <img
//             ref={imgRef}
//             src={vehicle.image}
//             alt={vehicle.name}
//             loading="lazy"
//             className="w-full h-full object-cover"
//             style={{
//               transition: "transform 0.15s ease-out",
//               willChange: "transform",
//               transformStyle: "preserve-3d",
//             }}
//           />
//         </Link>
//       </div>

//       {/* CARD CONTENT — stable rahne, rotate hudaina */}
//       <div className="p-5">
//         <p className="eyebrow">{vehicle.group}</p>
//         <h3 className="text-lg font-display font-bold mb-2">{vehicle.name}</h3>
//         <p className="text-white/60 text-sm mb-4 line-clamp-2">
//           {vehicle.summary}
//         </p>

//         {/* Key Stats */}
//         <div className="flex flex-wrap gap-3 mb-4">
//           {Object.entries(vehicle.stats).map(([label, value]) => (
//             <span key={label} className="text-xs">
//               <strong className="text-brand-cyan block">{value}</strong>
//               <span className="text-white/40">{label}</span>
//             </span>
//           ))}
//         </div>

//         <p className="text-brand-orange font-semibold mb-4">{vehicle.price}</p>
//         <Link
//           to={`/vehicle/${vehicle.id}`}
//           className="btn-primary text-sm w-full text-center"
//         >
//           View Details
//         </Link>
//       </div>
//     </article>
//   );
// }

import { Link } from "react-router-dom";
import { useRef, useState } from "react";

export default function VehicleCard({ vehicle }) {
  const imgRef = useRef(null);
  const animRef = useRef(null);
  const angleRef = useRef(0);
  const [spinning, setSpinning] = useState(false);

  // Mouse enter — 360° auto spin start
  function handleMouseEnter() {
    setSpinning(true);
    const img = imgRef.current;
    if (!img) return;

    // Cancel previous animation if any
    if (animRef.current) cancelAnimationFrame(animRef.current);

    function spin() {
      angleRef.current += 0.8; // speed — badaunus bhane 3 garnus, ghataunus bhane 0.8
      if (angleRef.current >= 360) angleRef.current = 0;
      img.style.transform = `perspective(800px) rotateY(${angleRef.current}deg)`;
      animRef.current = requestAnimationFrame(spin);
    }
    spin();
  }

  // Mouse leave — spin rokne, original position ma farkine
  function handleMouseLeave() {
    setSpinning(false);
    if (animRef.current) cancelAnimationFrame(animRef.current);

    const img = imgRef.current;
    if (!img) return;

    // Smoothly reset to 0
    img.style.transition = "transform 0.6s ease-out";
    img.style.transform = "perspective(800px) rotateY(0deg)";

    // Transition hataunus animation ko lagi
    setTimeout(() => {
      if (img) img.style.transition = "";
    }, 600);

    angleRef.current = 0;
  }

  return (
    <article className="glass-hover overflow-hidden group">
      {/* IMAGE CONTAINER */}
      <div
        className="block aspect-[4/3] overflow-hidden cursor-pointer relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: "800px" }}
      >
        {/* Spin hint */}
        {!spinning && (
          <div className="absolute top-2 right-2 z-10 bg-black/50 text-white text-[10px] px-2 py-1 rounded-full pointer-events-none">
            🔄
          </div>
        )}

        <Link to={`/vehicle/${vehicle.id}`}>
          <img
            ref={imgRef}
            src={vehicle.image}
            alt={vehicle.name}
            loading="lazy"
            className="w-full h-full object-cover"
            style={{
              willChange: "transform",
              transformStyle: "preserve-3d",
            }}
          />
        </Link>
      </div>

      {/* CARD CONTENT — stable rahne */}
      <div className="p-5">
        <p className="eyebrow">{vehicle.group}</p>
        <h3 className="text-lg font-display font-bold mb-2">{vehicle.name}</h3>
        <p className="text-white/60 text-sm mb-4 line-clamp-2">
          {vehicle.summary}
        </p>

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
        <Link
          to={`/vehicle/${vehicle.id}`}
          className="btn-primary text-sm w-full text-center"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
