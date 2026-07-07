import { useState } from "react";

const DEALERS = [
  {
    name: "MiChe Auto Nepal Pvt. Ltd.",
    address: "Tokha-2, Kathmandu, Nepal",
    phone: "+977-9763230000",
    email: "boyktm520@gmail.com",
    hours: "Sunday - Friday, 9:00 AM - 6:00 PM",
  },
  {
    name: "Birgunj Service Center",
    address: "Southern plains region service point",
    phone: "+977-21-4567890",
    email: "Birgunj@mc-nepal.com",
    hours: "Service booking and regional support",
  },
];

export default function DealersPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    center: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    alert("Thank you. MiChe Auto Nepal will contact you shortly.");
    setForm({ name: "", phone: "", center: "", message: "" });
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
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Dealer Cards */}
          <div className="space-y-6">
            {DEALERS.map((d) => (
              <article key={d.name} className="glass p-6">
                <h2 className="font-display font-bold text-lg mb-2">
                  {d.name}
                </h2>
                <p className="text-white/50 text-sm mb-3">{d.address}</p>
                <a
                  href={`tel:${d.phone.replace(/[^+\d]/g, "")}`}
                  className="text-brand-cyan text-sm block mb-1 hover:underline"
                >
                  {d.phone}
                </a>
                <a
                  href={`mailto:${d.email}`}
                  className="text-brand-cyan text-sm block mb-2 hover:underline"
                >
                  {d.email}
                </a>
                <span className="text-white/40 text-xs">{d.hours}</span>
              </article>
            ))}
          </div>

          {/* Service Booking Form */}
          <div className="glass p-6">
            <h2 className="font-display font-bold text-lg mb-4">
              Service Booking
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-brand-cyan transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone number"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-brand-cyan transition-colors"
              />
              <select
                required
                value={form.center}
                onChange={(e) => setForm({ ...form, center: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-brand-cyan transition-colors"
              >
                <option value="" className="text-black">
                  Select service center
                </option>
                <option className="text-black">Kathmandu Main Dealer</option>
                <option className="text-black">Birgunj Service Center</option>
              </select>
              <textarea
                rows={4}
                placeholder="Vehicle or service request"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-brand-cyan transition-colors resize-none"
              />
              <button type="submit" className="btn-primary w-full">
                Request Service
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="glass overflow-hidden min-h-[300px]">
            <iframe
              title="MiChe Auto Nepal map"
              src="https://www.google.com/maps?q=Tokha-2%2C%20Kathmandu%2C%20Nepal&output=embed"
              className="w-full h-full min-h-[400px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
}
