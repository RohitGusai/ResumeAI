import { FileText, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/30">
            <FileText size={22} />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight text-white">
              Resume<span className="text-indigo-400">AI</span>
            </h1>

            <p className="text-[11px] font-medium text-slate-500">
              Resume Compare System
            </p>
          </div>
        </Link>

        {/* Menu */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-slate-100 md:flex">
          <li>
            <Link
              to="/"
              className="transition-colors hover:text-indigo-400"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/compare"
              className="transition-colors hover:text-indigo-400"
            >
              Compare
            </Link>
          </li>

          <li>
            <Link
              to="/features"
              className="transition-colors hover:text-indigo-400"
            >
              Features
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <Link
          to="/compare"
          className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:scale-105 hover:bg-indigo-500 hover:shadow-indigo-600/40 active:scale-95"
        >
          <Sparkles size={16} />
          <span>Get Started</span>
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;