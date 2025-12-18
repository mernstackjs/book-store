import {
  BookOpen,
  CircleUserRound,
  House,
  Library,
  LogOut,
  Menu,
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
    <header className="bg-yellow-50 p-4 md:px-18 md:py-4 flex justify-between items-center relative">
      <Link to="/" className="flex gap-2 justify-center items-center">
        <BookOpen
          className="bg-yellow-500 p-2 rounded-2xl"
          color="white"
          size={40}
        />
        <span className=" text-2xl"> Book-Store</span>
      </Link>

      <nav className="md:flex gap-2 hidden">
        <Link
          to="/"
          className={`flex gap-2 items-center px-3 py-2 rounded-md transition
          hover:bg-yellow-500 hover:text-black
          ${isActive("/") ? "bg-slate-700 text-white font-semibold" : ""}`}
        >
          <House />
          Home
        </Link>

        <Link
          to="/catalog"
          className={`flex gap-2 items-center px-3 py-2 rounded-md transition
          hover:bg-yellow-500 hover:text-black
          ${
            isActive("/catalog") ? "bg-slate-700 text-white font-semibold" : ""
          }`}
        >
          <Library />
          Catalog
        </Link>
      </nav>

      {/* Mobile View Navbar */}
      {mobileMenuIsOpen && (
        <nav className="md:hidden p-8 absolute top-full left-0 bg-yellow-50 w-full">
          <Link
            to="/"
            className={`flex gap-2 items-center px-3 py-2 rounded-md transition
          hover:bg-yellow-500 hover:text-black
          ${isActive("/") ? "bg-slate-700 text-white font-semibold" : ""}`}
          >
            <House />
            Home
          </Link>

          <Link
            to="/catalog"
            className={`flex gap-2 items-center px-3 py-2 rounded-md transition
          hover:bg-yellow-500 hover:text-black
          ${
            isActive("/catalog") ? "bg-slate-700 text-white font-semibold" : ""
          }`}
          >
            <Library />
            Catalog
          </Link>
        </nav>
      )}

      <div className="flex gap-4">
        <CircleUserRound onClick={openProfileHandle} />
        <Menu onClick={mobileMenuOpenHandle} className="md:hidden" />
      </div>

      {openProfile && (
        <div className="border  z-50 border-gray-200 absolute top-full right-4 md:right-18 rounded-md">
          <div className="flex justify-center items-center border-b border-gray-200  gap-2 px-2 py-4">
            <CircleUserRound />
            <div className="flex   flex-col gap-1">
              <span className="text-sm">John Doe</span>
              <span className="text-sm">john.doe@example.com</span>
            </div>
          </div>

          <div
            onClick={() => setOpenProfile(false)}
            className="border-b cursor-pointer border-gray-200 flex gap-2 px-2 py-1 hover:bg-yellow-500 hover:rounded-2xl "
          >
            <UserRoundPen />
            <Link to="/profile">Profile</Link>
          </div>
          <div className=" flex cursor-pointer  text-red-600 gap-2 px-2 py-1  hover:bg-yellow-500 hover:rounded-2xl">
            <LogOut />
            <button>Logout</button>
          </div>
        </div>
      )}
    </header>
  );
}
