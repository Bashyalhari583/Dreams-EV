// import { useState } from "react";

// const INITIAL = {
//   name: "",
//   email: "",
//   phone: "",
//   vehicleInterest: "",
//   message: "",
// };

// export default function ContactPage() {
//   const [form, setForm] = useState(INITIAL);
//   const [status, setStatus] = useState("");
//   const [submitting, setSubmitting] = useState(false);

//   function update(field, value) {
//     setForm((prev) => ({ ...prev, [field]: value }));
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setSubmitting(true);
//     setStatus("Sending your inquiry...");

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });
//       const data = await res.json();

//       if (!res.ok) throw new Error(data.error || "Submission failed");

//       setStatus(data.message || "Inquiry sent successfully.");
//       setForm(INITIAL);
//     } catch (err) {
//       setStatus(
//         err.message || "Something went wrong. Please call +977-9763230000.",
//       );
//     } finally {
//       setSubmitting(false);
//     }
//   }

//   const inputClass =
//     "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-brand-cyan transition-colors";

//   return (
//     <>
//       <div className="relative pt-32 pb-16 bg-gradient-to-b from-brand-cyan/5 to-brand-dark">
//         <div className="section-container !py-0 text-center">
//           <p className="eyebrow">Contact</p>
//           <h1 className="text-3xl md:text-5xl font-display font-bold">
//             Book a test ride, ask about EMI, or contact the dealer.
//           </h1>
//         </div>
//       </div>

//       <div className="section-container">
//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Contact Info */}
//           <div className="glass p-6">
//             <h2 className="font-display font-bold text-lg mb-4">
//               MiChe Auto Nepal Pvt. Ltd.
//             </h2>
//             <p className="text-white/50 text-sm mb-3">
//               Tokha-2, Kathmandu, Nepal
//             </p>
//             <a
//               href="tel:+9779763230000"
//               className="text-brand-cyan text-sm block mb-1 hover:underline"
//             >
//               +977-9763230000
//             </a>
//             <a
//               href="mailto:micheautonepal@gmail.com"
//               className="text-brand-cyan text-sm block mb-3 hover:underline"
//             >
//               micheautonepal@gmail.com
//             </a>
//             <span className="text-white/40 text-xs block mb-4">
//               Sunday - Friday 9:00-18:00
//             </span>
//             <div className="flex gap-3">
//               <a
//                 href="#"
//                 className="text-white/40 text-sm hover:text-brand-cyan transition-colors"
//               >
//                 Facebook
//               </a>
//               <a
//                 href="#"
//                 className="text-white/40 text-sm hover:text-brand-cyan transition-colors"
//               >
//                 Instagram
//               </a>
//               <a
//                 href="#"
//                 className="text-white/40 text-sm hover:text-brand-cyan transition-colors"
//               >
//                 YouTube
//               </a>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <form onSubmit={handleSubmit} className="glass p-6 space-y-4">
//             <input
//               type="text"
//               placeholder="Full name"
//               required
//               value={form.name}
//               onChange={(e) => update("name", e.target.value)}
//               className={inputClass}
//             />
//             <input
//               type="email"
//               placeholder="Email address"
//               required
//               value={form.email}
//               onChange={(e) => update("email", e.target.value)}
//               className={inputClass}
//             />
//             <input
//               type="tel"
//               placeholder="Phone number"
//               required
//               value={form.phone}
//               onChange={(e) => update("phone", e.target.value)}
//               className={inputClass}
//             />
//             <select
//               required
//               value={form.vehicleInterest}
//               onChange={(e) => update("vehicleInterest", e.target.value)}
//               className={inputClass}
//             >
//               <option value="" className="text-black">
//                 Vehicle interest
//               </option>
//               <option className="text-black">Electric Bike</option>
//               <option className="text-black">Electric Scooter</option>
//               <option className="text-black">Petrol Bike</option>
//               <option className="text-black">Petrol Scooter</option>
//               <option className="text-black">Dealer Inquiry</option>
//             </select>
//             <textarea
//               rows={5}
//               placeholder="Message"
//               required
//               value={form.message}
//               onChange={(e) => update("message", e.target.value)}
//               className={`${inputClass} resize-none`}
//             />
//             <button
//               type="submit"
//               disabled={submitting}
//               className="btn-primary w-full disabled:opacity-50"
//             >
//               {submitting ? "Sending..." : "Send Inquiry"}
//             </button>
//             {status && (
//               <p className="text-sm text-center text-brand-cyan">{status}</p>
//             )}
//           </form>

//           {/* Map */}
//           <div className="glass overflow-hidden min-h-[300px]">
//             <iframe
//               title="MiChe Auto Nepal contact map"
//               src="https://www.google.com/maps?q=Tokha-2%2C%20Kathmandu%2C%20Nepal&output=embed"
//               className="w-full h-full min-h-[500px]"
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

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

  const SOCIALS = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61590465150130",
      icon: (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/miche_auto_nepal/",
      icon: (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@miche_auto_nepal",
      icon: (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.53V6.77a4.85 4.85 0 01-1.02-.08z" />
        </svg>
      ),
    },
  ];

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
              href="mailto:micheautonepal@gmail.com"
              className="text-brand-cyan text-sm block mb-3 hover:underline"
            >
              micheautonepal@gmail.com
            </a>
            <span className="text-white/40 text-xs block mb-5">
              Sunday - Friday 9:00-18:00
            </span>

            {/* Social links */}
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,.08)",
                paddingTop: "1.1rem",
              }}
            >
              <p
                style={{
                  fontSize: ".62rem",
                  fontWeight: 800,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,.3)",
                  marginBottom: ".75rem",
                }}
              >
                Follow Us
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: ".55rem",
                }}
              >
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: ".55rem",
                      color: "rgba(255,255,255,.5)",
                      fontSize: ".82rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      transition: "color .18s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#19d7ff")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,.5)")
                    }
                  >
                    {s.icon}
                    {s.label}
                  </a>
                ))}
              </div>
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
