import { Calendar, RotateCcw } from "lucide-react";
import React from "react";

export default function LoanHistoryBook() {
  return (
    <div className="mt-8 w-full bg-white/80 backdrop-blur-sm border border-amber-100 rounded-2xl p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl p-2.5 shadow-md">
          <RotateCcw size={28} className="text-white" />
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Loan History</span>
      </div>

      <div className="bg-gradient-to-br from-white to-purple-50/30 border border-purple-200 rounded-2xl p-5 hover:shadow-xl transition-all duration-300">
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
                <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                  Borrowed: 1/5/2024
                </span>
                <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                  Returned: 1/18/2024
                </span>
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl px-6 py-3 font-semibold shadow-lg">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            Returned
          </div>
        </div>
      </div>
    </div>
  );
}
