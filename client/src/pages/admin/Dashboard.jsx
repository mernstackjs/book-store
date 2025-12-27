import {
  BookOpen,
  BookOpenText,
  TrendingUp,
  Users,
} from "lucide-react";
import React from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Books",
      value: "248",
      change: "+12 this month",
      icon: BookOpen,
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
      border: "border-amber-200",
    },
    {
      title: "Active Users",
      value: "2,543",
      change: "+145 this month",
      icon: Users,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      border: "border-blue-200",
    },
    {
      title: "Active Loans",
      value: "189",
      change: "+23 today",
      icon: BookOpenText,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      border: "border-green-200",
    },
    {
      title: "Growth Rate",
      value: "12.5%",
      change: "+2.3% vs last month",
      icon: TrendingUp,
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50",
      border: "border-purple-200",
    },
  ];

  const recentLoans = [
    {
      user: "John Doe",
      book: "The Great Gatsby",
      date: "2024-01-15",
      status: "active",
    },
    {
      user: "Jane Smith",
      book: "To Kill a Mockingbird",
      date: "2024-01-14",
      status: "active",
    },
    {
      user: "Mike Johnson",
      book: "1984",
      date: "2024-01-13",
      status: "returned",
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
              Admin Dashboard
            </h1>
            <p className="text-gray-600 mt-2 text-lg">
              Welcome back! Here's what's happening today.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${stat.bgGradient} border ${stat.border} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`bg-gradient-to-br ${stat.gradient} rounded-xl p-3 shadow-lg`}>
                    <stat.icon size={28} className="text-white" />
                  </div>
                </div>
                <p className="text-gray-600 font-medium mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-green-600 font-medium">
                  {stat.change}
                </p>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-100 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
              Recent Loan Activity
            </h2>
            <div className="space-y-3">
              {recentLoans.map((loan, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-gradient-to-br from-white to-amber-50/30 border border-amber-200 rounded-xl hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {loan.user.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{loan.user}</p>
                      <p className="text-gray-600 text-sm">{loan.book}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600 mb-1">{loan.date}</p>
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                        loan.status === "active"
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                          : "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      {loan.status === "active" ? "Active" : "Returned"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
