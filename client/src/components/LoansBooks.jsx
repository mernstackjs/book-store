import { BookOpen, Calendar } from "lucide-react";
import React from "react";

export default function LoansBooks() {
  return (
    <div className="mt-8 w-full bg-white/80 backdrop-blur-sm border border-amber-100 rounded-2xl p-6 shadow-lg">
      <div className="flex gap-3 items-center mb-6">
        <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl p-2.5 shadow-md">
          <BookOpen size={28} className="text-white" />
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Active Loans</span>
      </div>

      <div className="bg-gradient-to-br from-white to-amber-50/30 border border-amber-200 rounded-2xl p-5 hover:shadow-xl transition-all duration-300">
        <div className="md:flex justify-between items-center gap-4">
          <div className="flex gap-4 mb-4 md:mb-0">
            <img
              className="w-24 h-24 rounded-xl object-cover shadow-lg hover:scale-105 transition-transform duration-300"
              src="https://cdn.pixabay.com/photo/2022/01/22/16/54/book-6957870_1280.jpg"
              alt="book image"
            />
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-lg font-bold text-gray-900">Book Title</p>
                <p className="text-gray-600 font-medium">Book author</p>
              </div>

              <div className="flex flex-wrap gap-2 items-center mt-2">
                <span className="flex gap-2 items-center text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                  <Calendar size={16} /> Borrowed: 1/10/2024
                </span>
                <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
                  Due: 1/24/2024
                </span>
                <span className="inline-flex items-center gap-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm rounded-full px-3 py-1 font-semibold shadow-md">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  Overdue
                </span>
              </div>
            </div>
          </div>

          <button className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-xl px-6 py-3 font-semibold hover:from-slate-900 hover:to-black transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap">
            Return Book
          </button>
        </div>
      </div>
    </div>
  );
}
