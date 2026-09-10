import { Link } from "react-router-dom";
import { CONTACT, DISTRIBUTOR } from "../config/contact";

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61590465150130",
    icon: (
      <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/miche_auto_nepal/",
    icon: (
      <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@miche_auto_nepal",
    icon: (
      <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.53V6.77a4.85 4.85 0 01-1.02-.08z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
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
              <span>
                <strong className="text-white text-sm">MiChe Auto Nepal</strong>
                {/* <small className="block text-[10px] text-white/40">
                  Pvt. Ltd.
                </small> */}
              </span>
            </Link>
            <p className="text-white/40 text-sm">
              Premium electric and petrol bikes and scooters for Nepal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2">
              <Link
                to="/ev"
                className="text-white/40 text-sm hover:text-brand-cyan transition-colors"
              >
                EV Vehicles
              </Link>
              <Link
                to="/petrol"
                className="text-white/40 text-sm hover:text-brand-cyan transition-colors"
              >
                Petrol Vehicles
              </Link>
              <Link
                to="/dealers"
                className="text-white/40 text-sm hover:text-brand-cyan transition-colors"
              >
                Dealers
              </Link>
              <Link
                to="/contact"
                className="text-white/40 text-sm hover:text-brand-cyan transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              Categories
            </h3>
            <div className="flex flex-col gap-2">
              <Link
                to="/ev"
                className="text-white/40 text-sm hover:text-brand-cyan transition-colors"
              >
                Electric Bikes
              </Link>
              <Link
                to="/ev"
                className="text-white/40 text-sm hover:text-brand-cyan transition-colors"
              >
                Electric Scooters
              </Link>
              <Link
                to="/petrol"
                className="text-white/40 text-sm hover:text-brand-cyan transition-colors"
              >
                Petrol Bikes
              </Link>
              <Link
                to="/petrol"
                className="text-white/40 text-sm hover:text-brand-cyan transition-colors"
              >
                Petrol Scooters
              </Link>
            </div>
          </div>

          {/* Dealer Info + Social Icons */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              Assembly Plant
            </h3>
            <p className="text-white/40 text-sm mb-2">
              Tokha-2, Kathmandu, Nepal
            </p>
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="text-brand-cyan text-sm block mb-1 hover:underline"
            >
              {CONTACT.phoneDisplay}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-brand-cyan text-sm block hover:underline"
            >
              {CONTACT.email}
            </a>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: ".5rem", marginTop: "1rem" }}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 7,
                    border: "1px solid rgba(255,255,255,.12)",
                    background: "rgba(255,255,255,.05)",
                    display: "grid",
                    placeItems: "center",
                    color: "rgba(255,255,255,.45)",
                    transition: "all .18s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(25,215,255,.4)";
                    e.currentTarget.style.color = "#19d7ff";
                    e.currentTarget.style.background = "rgba(25,215,255,.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,.12)";
                    e.currentTarget.style.color = "rgba(255,255,255,.45)";
                    e.currentTarget.style.background = "rgba(255,255,255,.05)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* National Distributor */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              {DISTRIBUTOR.badge}
            </h3>
            <p className="text-white/40 text-xs uppercase tracking-wide mb-1">
              {DISTRIBUTOR.name}
            </p>
            {DISTRIBUTOR.offices.map((o) => (
              <p key={o.label} className="text-white/40 text-sm mb-2">
                <span className="text-white/60">{o.label}:</span> {o.address}
              </p>
            ))}
            <a
              href={`tel:${DISTRIBUTOR.phoneTel}`}
              className="text-brand-cyan text-sm block mb-1 hover:underline"
            >
              {DISTRIBUTOR.phoneDisplay}
            </a>
            <a
              href={`mailto:${DISTRIBUTOR.email}`}
              className="text-brand-cyan text-sm block hover:underline"
            >
              {DISTRIBUTOR.email}
            </a>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              Newsletter
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscribed! Thanks.");
              }}
              className="flex flex-col gap-2"
            >
              <input
                type="email"
                placeholder="Email address"
                required
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-brand-cyan transition-colors"
              />
              <button type="submit" className="btn-primary text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <p className="text-center text-white/20 text-xs pt-6 border-t border-white/5">
          © {new Date().getFullYear()} MiChe Auto Nepal Pvt. Ltd. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
