import { BookOpen, Home, LayoutDashboard, Library, Users } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router";

export default function AdminSidebar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { path: "/admin", icon: LayoutDashboard, label: "Dashboard" },
    { path: "/admin/books", icon: Library, label: "Manage Books" },
    { path: "/admin/users", icon: Users, label: "Manage Users" },
    { path: "/", icon: Home, label: "Back to Store" },
  ];

  return (
    <aside className="w-64 bg-white/80 backdrop-blur-sm border-r border-amber-200 min-h-screen p-6 shadow-lg">
      <Link to="/admin" className="flex gap-3 items-center mb-8 group">
        <div className="bg-gradient-to-br from-amber-500 to-orange-500 p-2.5 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
          <BookOpen color="white" size={28} />
        </div>
        <div>
          <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent block">
            Admin Portal
          </span>
          <span className="text-xs text-gray-600">Book Store Management</span>
        </div>
      </Link>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
              isActive(item.path)
                ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg"
                : "text-gray-700 hover:bg-gradient-to-r hover:from-amber-100 hover:to-orange-100 hover:text-amber-700"
            }`}
          >
            <item.icon size={20} />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
