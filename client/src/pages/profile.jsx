import {
  BookOpen,
  BookOpenText,
  Calendar,
  Mail,
  RotateCcw,
} from "lucide-react";
import React from "react";
import LoansBooks from "../components/LoansBooks";
import LoanHistoryBook from "../components/LoanHistoryBook";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 p-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Profile Card */}
        <div className="w-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden animate-fadeInUp border border-amber-100">
          <div className="h-48 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-20 -translate-x-10"></div>

            <div className="absolute -bottom-16 left-8">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-4 border-white bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-2xl">
                  <span className="text-5xl font-bold text-white">A</span>
                </div>
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
            </div>
          </div>

          <div className="pt-20 pb-8 px-8">
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Ahmed Abdirizaak
                </h2>
                <p className="text-gray-600 mt-1 font-medium">Book Enthusiast</p>
              </div>
              <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2.5 rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Edit Profile
              </button>
            </div>

            <div className="flex flex-wrap gap-6 mt-6">
              <div className="flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-full border border-amber-200">
                <Mail size={18} className="text-amber-600" />
                <span className="text-gray-700 font-medium">ahmed@ahmed-book-store.com</span>
              </div>

              <div className="flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-full border border-amber-200">
                <Calendar size={18} className="text-amber-600" />
                <span className="text-gray-700 font-medium">Member since 12/18/2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-8 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 p-6 rounded-2xl flex gap-4 items-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-3 shadow-lg">
              <BookOpen size={32} className="text-white" />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">1</p>
              <p className="text-gray-600 font-medium">Active Loans</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 p-6 rounded-2xl flex gap-4 items-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-3 shadow-lg">
              <BookOpenText size={32} className="text-white" />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">1</p>
              <p className="text-gray-600 font-medium">Books Returned</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 p-6 rounded-2xl flex gap-4 items-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-3 shadow-lg">
              <RotateCcw size={32} className="text-white" />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">1</p>
              <p className="text-gray-600 font-medium">Total Loans</p>
            </div>
          </div>
        </div>

        {/* Loans Sections */}
        <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <LoansBooks />
        </div>
        <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <LoanHistoryBook />
        </div>
      </div>
    </div>
  );
}
