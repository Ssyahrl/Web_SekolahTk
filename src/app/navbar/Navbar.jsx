import { useState } from "react";
import { Home, Menu, Info, Image, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="p-4 shadow-md bg-white sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 relative">
        {/* Logo */}
        <div className="flex items-center space-x-4 z-50">
          <img src="/src/assets/Tkq.png" alt="TKQ" className="h-12 w-auto" />
          <span className="text-xl font-bold tracking-wide">TKQ NURUL ANWAR</span>
        </div>

        {/* Tombol Menu Mobile */}
        <button
          className="lg:hidden p-2 z-50 text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} />}
        </button>

        {/* Sidebar Mobile */}
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center lg:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col items-center space-y-8 text-white text-center text-2xl font-medium">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-3 ${
                currentPath === "/" ? "text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              <Home size={28} />
              <span>Home</span>
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-3 ${
                currentPath === "/about" ? "text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              <Info size={28} />
              <span>About</span>
            </Link>
            <Link
              to="/galeri"
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-3 ${
                currentPath === "/galeri" ? "text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              <Image size={28} />
              <span>Galeri</span>
            </Link>
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="text-sm text-gray-300 hover:text-white transition-all"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-full bg-yellow-400 hover:bg-yellow-500 text-sm text-black font-semibold transition"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Navbar Desktop */}
        <div className="hidden lg:flex space-x-4 border rounded-full p-2 bg-white shadow">
          <Link
            to="/"
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ease-in-out ${
              currentPath === "/" ? "bg-black text-white" : "hover:bg-gray-200"
            }`}
          >
            {currentPath === "/" && <Home size={18} />} <span>Home</span>
          </Link>
          <Link
            to="/about"
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ease-in-out ${
              currentPath === "/about" ? "bg-black text-white" : "hover:bg-gray-200"
            }`}
          >
            {currentPath === "/about" && <Info size={18} />} <span>About</span>
          </Link>
          <Link
            to="/galeri"
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ease-in-out ${
              currentPath === "/galeri" ? "bg-black text-white" : "hover:bg-gray-200"
            }`}
          >
            {currentPath === "/galeri" && <Image size={18} />} <span>Galeri</span>
          </Link>
        </div>

        {/* Login & Sign Up - Desktop Only */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            to="/login"
            className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition-all duration-300 ease-in-out flex items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
            Login
          </Link>

          <Link
            to="/signup"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-sm font-semibold shadow hover:brightness-110 transition-all duration-300 ease-in-out flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 21v-2a4 4 0 00-8 0v2m8-10a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
