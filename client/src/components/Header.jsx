import {
  BookOpen,
  CircleUserRound,
  House,
  Library,
  LogOut,
  Menu,
  Shield,
  UserRoundPen,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";

export default function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const [openProfile, setOpenProfile] = useState(false);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const openProfileHandle = () => {
    setOpenProfile(!openProfile);
    setMobileMenuIsOpen(false);
  };
  const mobileMenuOpenHandle = () => {
    setMobileMenuIsOpen(!mobileMenuIsOpen);
    setOpenProfile(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-amber-200/50 p-4 md:px-18 md:py-5 flex justify-between items-center shadow-sm">
      <Link
        onClick={() => setMobileMenuIsOpen(false)}
        to="/"
        className="flex gap-3 justify-center items-center group"
      >
        <div className="bg-gradient-to-br from-amber-500 to-orange-500 p-2.5 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
          <BookOpen
            color="white"
            size={32}
          />
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Book-Store</span>
      </Link>

      <nav className="md:flex gap-2 hidden">
        <Link
          to="/"
          className={`flex gap-2 items-center px-4 py-2.5 rounded-full font-semibold transition-all duration-300
          hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 hover:text-white hover:shadow-lg
          ${isActive("/") ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md" : "text-gray-700"}`}
        >
          <House size={20} />
          Home
        </Link>

        <Link
          to="/catalog"
          className={`flex gap-2 items-center px-4 py-2.5 rounded-full font-semibold transition-all duration-300
          hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 hover:text-white hover:shadow-lg
          ${
            isActive("/catalog") ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md" : "text-gray-700"
          }`}
        >
          <Library size={20} />
          Catalog
        </Link>
      </nav>

      {/* Mobile View Navbar */}
      {mobileMenuIsOpen && (
        <nav className="md:hidden z-50 p-8 absolute top-full left-0 backdrop-blur-md bg-white/95 w-full shadow-lg border-b border-amber-200">
          <Link
            onClick={() => setMobileMenuIsOpen(false)}
            to="/"
            className={`flex gap-2 items-center px-4 py-3 rounded-full font-semibold transition-all duration-300 mb-2
          hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 hover:text-white
          ${isActive("/") ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white" : "text-gray-700"}`}
          >
            <House size={20} />
            Home
          </Link>

          <Link
            onClick={() => setMobileMenuIsOpen(false)}
            to="/catalog"
            className={`flex gap-2 items-center px-4 py-3 rounded-full font-semibold transition-all duration-300
          hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 hover:text-white
          ${
            isActive("/catalog") ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white" : "text-gray-700"
          }`}
          >
            <Library size={20} />
            Catalog
          </Link>
        </nav>
      )}

      <div className="flex gap-4 items-center">
        <CircleUserRound
          onClick={openProfileHandle}
          className="cursor-pointer text-gray-700 hover:text-amber-600 transition-colors duration-300 hover:scale-110"
          size={28}
        />
        <Menu
          onClick={mobileMenuOpenHandle}
          className="md:hidden cursor-pointer text-gray-700 hover:text-amber-600 transition-colors duration-300"
          size={28}
        />
      </div>

      {openProfile && (
        <div className="border border-amber-200 p-3 shadow-2xl bg-white/95 backdrop-blur-sm z-50 absolute top-full right-4 md:right-18 rounded-2xl min-w-64 animate-fadeInUp">
          <div className="flex items-center border-b border-gray-200 gap-3 px-3 py-4">
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 p-2 rounded-full">
              <CircleUserRound size={24} color="white" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-gray-900">Ahmed</span>
              <span className="text-sm text-gray-600">ahmed@example.com</span>
            </div>
          </div>

          <div
            onClick={() => setOpenProfile(false)}
            className="cursor-pointer flex gap-3 items-center px-3 py-3 mt-2 hover:bg-gradient-to-r hover:from-amber-100 hover:to-orange-100 rounded-xl transition-all duration-300 group"
          >
            <UserRoundPen size={20} className="text-gray-700 group-hover:text-amber-600 transition-colors" />
            <Link className="text-sm font-medium text-gray-700 group-hover:text-amber-600 transition-colors" to="/profile">
              Profile
            </Link>
          </div>
          <div
            onClick={() => setOpenProfile(false)}
            className="cursor-pointer flex gap-3 items-center px-3 py-3 hover:bg-gradient-to-r hover:from-purple-100 hover:to-indigo-100 rounded-xl transition-all duration-300 group border-t border-gray-200"
          >
            <Shield size={20} className="text-purple-600 group-hover:text-purple-700 transition-colors" />
            <Link className="text-sm font-medium text-purple-600 group-hover:text-purple-700 transition-colors" to="/admin">
              Admin Portal
            </Link>
          </div>
          <div className="flex cursor-pointer items-center gap-3 px-3 py-3 hover:bg-red-50 rounded-xl transition-all duration-300 group">
            <LogOut size={20} className="text-red-600" />
            <button className="text-sm font-medium text-red-600">Logout</button>
          </div>
        </div>
      )}
    </header>
  );
}
