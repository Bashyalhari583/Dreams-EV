import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-cyan to-brand-orange flex items-center justify-center text-brand-dark font-display font-bold text-sm">MC</span>
              <span>
                <strong className="text-white text-sm">MiChe Auto Nepal</strong>
                <small className="block text-[10px] text-white/40">Pvt. Ltd.</small>
              </span>
            </Link>
            <p className="text-white/40 text-sm">Premium electric and petrol bikes and scooters for Nepal.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/ev" className="text-white/40 text-sm hover:text-brand-cyan transition-colors">EV Vehicles</Link>
              <Link to="/petrol" className="text-white/40 text-sm hover:text-brand-cyan transition-colors">Petrol Vehicles</Link>
              <Link to="/dealers" className="text-white/40 text-sm hover:text-brand-cyan transition-colors">Dealers</Link>
              <Link to="/contact" className="text-white/40 text-sm hover:text-brand-cyan transition-colors">Contact</Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Categories</h3>
            <div className="flex flex-col gap-2">
              <Link to="/ev" className="text-white/40 text-sm hover:text-brand-cyan transition-colors">Electric Bikes</Link>
              <Link to="/ev" className="text-white/40 text-sm hover:text-brand-cyan transition-colors">Electric Scooters</Link>
              <Link to="/petrol" className="text-white/40 text-sm hover:text-brand-cyan transition-colors">Petrol Bikes</Link>
              <Link to="/petrol" className="text-white/40 text-sm hover:text-brand-cyan transition-colors">Petrol Scooters</Link>
            </div>
          </div>

          {/* Dealer Info */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Dealer</h3>
            <p className="text-white/40 text-sm mb-2">Tokha-2, Kathmandu, Nepal</p>
            <a href="tel:+9779763230000" className="text-brand-cyan text-sm block mb-1 hover:underline">+977-9763230000</a>
            <a href="mailto:boyktm520@gmail.com" className="text-brand-cyan text-sm block hover:underline">boyktm520@gmail.com</a>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Newsletter</h3>
            <form onSubmit={(e) => { e.preventDefault(); alert("Subscribed! Thanks."); }} className="flex flex-col gap-2">
              <input type="email" placeholder="Email address" required
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-brand-cyan transition-colors" />
              <button type="submit" className="btn-primary text-sm">Subscribe</button>
            </form>
          </div>
        </div>

        <p className="text-center text-white/20 text-xs pt-6 border-t border-white/5">
          © {new Date().getFullYear()} MiChe Auto Nepal Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
