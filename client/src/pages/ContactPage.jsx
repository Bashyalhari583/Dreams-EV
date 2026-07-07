import { useState } from "react";

const INITIAL = {
  name: "",
  email: "",
  phone: "",
  vehicleInterest: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setStatus("Sending your inquiry...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Submission failed");

      setStatus(data.message || "Inquiry sent successfully.");
      setForm(INITIAL);
    } catch (err) {
      setStatus(
        err.message || "Something went wrong. Please call +977-9763230000.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-brand-cyan transition-colors";

  return (
    <>
      <div className="relative pt-32 pb-16 bg-gradient-to-b from-brand-cyan/5 to-brand-dark">
        <div className="section-container !py-0 text-center">
          <p className="eyebrow">Contact</p>
          <h1 className="text-3xl md:text-5xl font-display font-bold">
            Book a test ride, ask about EMI, or contact the dealer.
          </h1>
        </div>
      </div>

      <div className="section-container">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="glass p-6">
            <h2 className="font-display font-bold text-lg mb-4">
              MiChe Auto Nepal Pvt. Ltd.
            </h2>
            <p className="text-white/50 text-sm mb-3">
              Tokha-2, Kathmandu, Nepal
            </p>
            <a
              href="tel:+9779763230000"
              className="text-brand-cyan text-sm block mb-1 hover:underline"
            >
              +977-9763230000
            </a>
            <a
              href="mailto:boyktm520@gmail.com"
              className="text-brand-cyan text-sm block mb-3 hover:underline"
            >
              boyktm520@gmail.com
            </a>
            <span className="text-white/40 text-xs block mb-4">
              Sunday - Friday 9:00-18:00
            </span>
            <div className="flex gap-3">
              <a
                href="#"
                className="text-white/40 text-sm hover:text-brand-cyan transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-white/40 text-sm hover:text-brand-cyan transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-white/40 text-sm hover:text-brand-cyan transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="glass p-6 space-y-4">
            <input
              type="text"
              placeholder="Full name"
              required
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className={inputClass}
            />
            <input
              type="email"
              placeholder="Email address"
              required
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className={inputClass}
            />
            <input
              type="tel"
              placeholder="Phone number"
              required
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className={inputClass}
            />
            <select
              required
              value={form.vehicleInterest}
              onChange={(e) => update("vehicleInterest", e.target.value)}
              className={inputClass}
            >
              <option value="" className="text-black">
                Vehicle interest
              </option>
              <option className="text-black">Electric Bike</option>
              <option className="text-black">Electric Scooter</option>
              <option className="text-black">Petrol Bike</option>
              <option className="text-black">Petrol Scooter</option>
              <option className="text-black">Dealer Inquiry</option>
            </select>
            <textarea
              rows={5}
              placeholder="Message"
              required
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className={`${inputClass} resize-none`}
            />
            <button
              type="submit"
              disabled={submitting}
              className="btn-primary w-full disabled:opacity-50"
            >
              {submitting ? "Sending..." : "Send Inquiry"}
            </button>
            {status && (
              <p className="text-sm text-center text-brand-cyan">{status}</p>
            )}
          </form>

          {/* Map */}
          <div className="glass overflow-hidden min-h-[300px]">
            <iframe
              title="MiChe Auto Nepal contact map"
              src="https://www.google.com/maps?q=Tokha-2%2C%20Kathmandu%2C%20Nepal&output=embed"
              className="w-full h-full min-h-[500px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
}
