import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

// Auto-imports ALL images from public/images/gallery/
// Jaba naya image add garxau, automatic dekhaucha — code change gardaina
const imageModules = import.meta.glob(
  "/public/images/gallery/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true, query: "?url", import: "default" },
);

const IMAGES = Object.keys(imageModules)
  .sort()
  .map((path) => path.replace("/public", ""));

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState(null);

  const open = (i) => setLightbox(i);
  const close = () => setLightbox(null);
  const prev = () =>
    setLightbox((i) => (i - 1 + IMAGES.length) % IMAGES.length);
  const next = () => setLightbox((i) => (i + 1) % IMAGES.length);

  const handleKey = (e) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
    if (e.key === "Escape") close();
  };

  return (
    <>
      {/* Hero */}
      <div className="relative pt-32 pb-12 bg-gradient-to-b from-brand-cyan/5 to-brand-dark">
        <div className="section-container !py-0 text-center">
          <p className="eyebrow">Gallery</p>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-3">
            MiChe Auto Nepal — In Action
          </h1>
          <p className="text-white/40 text-sm">
            Showroom, events, and our electric lineup on Nepal's roads.{" "}
            <span style={{ color: "rgba(255,255,255,.25)" }}>
              {IMAGES.length} photos
            </span>
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="section-container !pt-8">
        {IMAGES.length === 0 ? (
          <p className="text-center text-white/30 py-20">
            No images found. Add images to{" "}
            <code className="text-brand-cyan">
              client/public/images/gallery/
            </code>
          </p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1rem",
            }}
          >
            {IMAGES.map((src, i) => (
              <div
                key={src}
                onClick={() => open(i)}
                className="group"
                style={{
                  position: "relative",
                  borderRadius: 12,
                  overflow: "hidden",
                  aspectRatio: "4/3",
                  cursor: "zoom-in",
                  border: "1px solid rgba(255,255,255,.08)",
                  background: "rgba(255,255,255,.03)",
                }}
              >
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform .4s ease",
                  }}
                  className="group-hover:scale-105"
                />
                <div
                  className="group-hover:opacity-100"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,.42)",
                    opacity: 0,
                    transition: "opacity .25s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ZoomIn size={28} color="#19d7ff" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          onClick={close}
          onKeyDown={handleKey}
          tabIndex={0}
          autoFocus
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,.93)",
            backdropFilter: "blur(18px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
            outline: "none",
          }}
        >
          {/* Close */}
          <button
            onClick={close}
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              width: 40,
              height: 40,
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,.2)",
              background: "rgba(255,255,255,.1)",
              color: "#fff",
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
              zIndex: 1,
            }}
          >
            <X size={18} />
          </button>

          {/* Counter */}
          <div
            style={{
              position: "absolute",
              top: 24,
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: ".72rem",
              fontWeight: 800,
              color: "rgba(255,255,255,.4)",
              letterSpacing: ".1em",
              userSelect: "none",
            }}
          >
            {lightbox + 1} / {IMAGES.length}
          </div>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            style={{
              position: "absolute",
              left: 16,
              width: 44,
              height: 44,
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,.18)",
              background: "rgba(255,255,255,.08)",
              color: "#fff",
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
            }}
          >
            <ChevronLeft size={22} />
          </button>

          {/* Image */}
          <img
            src={IMAGES[lightbox]}
            alt={`Gallery ${lightbox + 1}`}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: "85vh",
              objectFit: "contain",
              borderRadius: 12,
              boxShadow: "0 32px 80px rgba(0,0,0,.8)",
              userSelect: "none",
            }}
          />

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            style={{
              position: "absolute",
              right: 16,
              width: 44,
              height: 44,
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,.18)",
              background: "rgba(255,255,255,.08)",
              color: "#fff",
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
            }}
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </>
  );
}
