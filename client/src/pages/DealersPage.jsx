import { useState } from "react";
import { BRANCHES as DEALERS } from "../config/contact";

const PRIMARY = DEALERS.filter((d) => d.badge !== "Dealer");
const DEALER_BRANCHES = DEALERS.filter((d) => d.badge === "Dealer");

function DealerCard({ d }) {
  return (
    <article
      className="glass p-6"
      style={{ borderLeft: "3px solid rgba(25,215,255,.3)" }}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h2 className="font-display font-bold text-base leading-tight">
          {d.name}
        </h2>
        <span
          style={{
            flexShrink: 0,
            fontSize: ".58rem",
            padding: "2px 8px",
            borderRadius: 999,
            background: "rgba(25,215,255,.12)",
            color: "#19d7ff",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: ".07em",
            marginTop: 2,
          }}
        >
          {d.badge}
        </span>
      </div>
      {d.officeLines ? (
        <div className="mb-3">
          {d.officeLines.map((o) => (
            <p key={o.label} className="text-white/50 text-sm mb-1">
              <span className="text-white/70 font-semibold">{o.label}:</span>{" "}
              {o.address}
            </p>
          ))}
        </div>
      ) : (
        <p className="text-white/50 text-sm mb-3">{d.address}</p>
      )}
      <a
        href={`tel:${d.phone.replace(/[^+\d]/g, "")}`}
        className="text-brand-cyan text-sm block mb-1 hover:underline"
      >
        📞 {d.phone}
      </a>
      {d.showEmail && (
        <a
          href={`mailto:${d.email}`}
          className="text-brand-cyan text-sm block mb-2 hover:underline"
        >
          ✉️ {d.email}
        </a>
      )}
      {d.hours && (
        <span className="text-white/40 text-xs">🕐 {d.hours}</span>
      )}
    </article>
  );
}

export default function DealersPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    center: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (!form.name || !form.phone || !form.center) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", center: "", message: "" });
    }, 3500);
  }

  return (
    <>
      <div className="relative pt-32 pb-16 bg-gradient-to-b from-brand-cyan/5 to-brand-dark">
        <div className="section-container !py-0 text-center">
          <p className="eyebrow">Dealers and service centers</p>
          <h1 className="text-3xl md:text-5xl font-display font-bold">
            Premium support from Kathmandu to key service regions.
          </h1>
        </div>
      </div>

      <div className="section-container">
        {/* Assembly Plant + National Distributor */}
        <div className="grid sm:grid-cols-2 gap-5 mb-5">
          {PRIMARY.map((d) => (
            <DealerCard key={d.name} d={d} />
          ))}
        </div>

        {/* Dealer Branches */}
        <div className="grid sm:grid-cols-2 gap-5 mb-8">
          {DEALER_BRANCHES.map((d) => (
            <DealerCard key={d.name} d={d} />
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Service Booking Form */}
          <div className="glass p-6">
            <h2 className="font-display font-bold text-lg mb-4">
              Service Booking
            </h2>

            {submitted ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                  minHeight: 280,
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: "2.5rem" }}>✅</span>
                <p
                  style={{
                    color: "#19d7ff",
                    fontWeight: 800,
                    fontSize: "1rem",
                  }}
                >
                  Request Received!
                </p>
                <p
                  style={{ color: "rgba(255,255,255,.5)", fontSize: ".85rem" }}
                >
                  MiChe Auto Nepal will contact you shortly.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-brand-cyan transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-brand-cyan transition-colors"
                />
                <select
                  value={form.center}
                  onChange={(e) => setForm({ ...form, center: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-brand-cyan transition-colors"
                >
                  <option value="" className="text-black">
                    Select branch
                  </option>
                  {DEALERS.map((d) => (
                    <option key={d.name} className="text-black" value={d.name}>
                      {d.name} — {d.badge}
                    </option>
                  ))}
                </select>
                <textarea
                  rows={4}
                  placeholder="Vehicle or service request"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-brand-cyan transition-colors resize-none"
                />
                <button onClick={handleSubmit} className="btn-primary w-full">
                  Request Service
                </button>
              </div>
            )}
          </div>

          {/* Map — Tokha, Kathmandu */}
          <div className="glass overflow-hidden min-h-[300px]">
            <iframe
              title="MiChe Auto Nepal contact map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4436.459409680579!2d85.32271282546573!3d27.78302254876104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1f003ef27069%3A0xb1c24262b54253af!2sMc%20miche%20auto!5e0!3m2!1sen!2snp!4v1785908096753!5m2!1sen!2snp"
              className="w-full h-full min-h-[500px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
