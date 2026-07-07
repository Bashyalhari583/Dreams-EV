import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 1200, label: "Vehicles Sold" },
  { value: 950, label: "Customers" },
  { value: 18, label: "Dealers" },
  { value: 9, label: "Service Centers" },
];

function AnimatedNumber({ target }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let current = 0;
        const step = Math.max(1, Math.ceil(target / 42));
        const timer = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(timer); }
          setCount(current);
        }, 24);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <strong ref={ref} className="text-3xl md:text-4xl font-display font-bold text-brand-cyan">{count.toLocaleString()}</strong>;
}

export default function AboutPage() {
  return (
    <>
      <div className="relative pt-32 pb-16 bg-gradient-to-b from-brand-cyan/5 to-brand-dark">
        <div className="section-container !py-0 text-center max-w-3xl mx-auto">
          <p className="eyebrow">About MiChe Auto Nepal</p>
          <h1 className="text-3xl md:text-5xl font-display font-bold">Premium mobility vision with local operations and global ambition.</h1>
        </div>
      </div>

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-display font-bold mb-4">Innovation, dealership trust, and future mobility.</h2>
            <p className="text-white/60 mb-4">
              MiChe Auto Nepal Pvt. Ltd. focuses exclusively on electric bikes, electric scooters, petrol bikes, and petrol scooters for Nepal's evolving mobility market.
            </p>
            <p className="text-white/60 mb-8">
              The company brings together global business presence, EV technology vision, Nepal operations, international offices, manufacturing excellence, and a professional dealership experience.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="glass p-5">
                <h3 className="font-display font-bold mb-2">Mission</h3>
                <p className="text-white/50 text-sm">Deliver premium two-wheeler mobility with reliable service, transparent pricing, and impressive showroom experiences.</p>
              </div>
              <div className="glass p-5">
                <h3 className="font-display font-bold mb-2">Vision</h3>
                <p className="text-white/50 text-sm">Become one of Nepal's most trusted premium EV and petrol motorcycle dealership brands.</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="glass p-6 text-center">
                <AnimatedNumber target={s.value} />
                <span className="block text-white/40 text-sm mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
