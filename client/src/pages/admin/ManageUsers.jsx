import { Ban, CheckCircle, Mail, Search, UserCog } from "lucide-react";
import React, { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";

export default function ManageUsers() {
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    {
      id: 1,
      name: "Ahmed Abdirizaak",
      email: "ahmed@example.com",
      memberSince: "Dec 18, 2025",
      activeLoans: 1,
      totalLoans: 15,
      status: "active",
    },
    {
      id: 2,
      name: "John Doe",
      email: "john@example.com",
      memberSince: "Nov 10, 2025",
      activeLoans: 2,
      totalLoans: 23,
      status: "active",
    },
    {
      id: 3,
      name: "Jane Smith",
      email: "jane@example.com",
      memberSince: "Oct 5, 2025",
      activeLoans: 0,
      totalLoans: 8,
      status: "active",
    },
    {
      id: 4,
      name: "Mike Johnson",
      email: "mike@example.com",
      memberSince: "Sep 15, 2025",
      activeLoans: 3,
      totalLoans: 45,
      status: "suspended",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <AdminSidebar />

      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 animate-fadeInUp">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Manage Users
            </h1>
            <p className="text-gray-600 mt-2 text-lg">
              View and manage all registered users
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-6 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search users by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border border-amber-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 shadow-md"
              />
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-3 shadow-lg">
                  <UserCog size={28} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-600 font-medium">Total Users</p>
                  <p className="text-3xl font-bold text-gray-900">2,543</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl p-3 shadow-lg">
                  <CheckCircle size={28} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-600 font-medium">Active Users</p>
                  <p className="text-3xl font-bold text-gray-900">2,398</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-red-500 to-rose-500 rounded-xl p-3 shadow-lg">
                  <Ban size={28} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-600 font-medium">Suspended</p>
                  <p className="text-3xl font-bold text-gray-900">145</p>
                </div>
              </div>
            </div>
          </div>

          {/* Users Table */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-amber-100 overflow-hidden animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">User</th>
                    <th className="px-6 py-4 text-left font-semibold">Email</th>
                    <th className="px-6 py-4 text-left font-semibold">Member Since</th>
                    <th className="px-6 py-4 text-left font-semibold">Active Loans</th>
                    <th className="px-6 py-4 text-left font-semibold">Total Loans</th>
                    <th className="px-6 py-4 text-left font-semibold">Status</th>
                    <th className="px-6 py-4 text-left font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr
                      key={user.id}
                      className="border-b border-amber-100 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 transition-all duration-300"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                            {user.name.charAt(0)}
                          </div>
                          <p className="font-bold text-gray-900">{user.name}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-gray-700">
                          <Mail size={16} className="text-gray-400" />
                          {user.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {user.memberSince}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {user.activeLoans}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-900 font-semibold">
                        {user.totalLoans}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${
                            user.status === "active"
                              ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                              : "bg-gradient-to-r from-red-500 to-red-600 text-white"
                          }`}
                        >
                          <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                          {user.status === "active" ? "Active" : "Suspended"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 text-sm font-medium">
                            View Details
                          </button>
                          {user.status === "active" ? (
                            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 text-sm font-medium">
                              Suspend
                            </button>
                          ) : (
                            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 text-sm font-medium">
                              Activate
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
