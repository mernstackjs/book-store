import { Calendar, RotateCcw } from "lucide-react";
import React from "react";

export default function LoanHistoryBook() {
  return (
    <div className="mt-8 w-full max-w-4xl border border-gray-200 rounded-lg p-6">
      <div className="flex items-center gap-3">
        <RotateCcw
          size={40}
          className="bg-yellow-100 rounded-2xl text-yellow-600 p-2"
        />
        <span className="text-2xl font-bold">Loan History</span>
      </div>
      <div className="border border-gray-200 mt-4 rounded-lg p-4 flex justify-between items-center">
        <div className="flex gap-2.5">
          <img
            className="w-20 h-20"
            src="https://cdn.pixabay.com/photo/2022/01/22/16/54/book-6957870_1280.jpg"
            alt="book image"
          />
          <div>
            <p>Book Title</p>
            <p>Book author</p>

            <div className="flex gap-2">
              Borrowed: 1/5/2024 Returned: 1/18/2024
            </div>
          </div>
        </div>
        <button className="bg-green-900 text-white rounded-lg px-4 py-2 cursor-pointer">
          Returned
        </button>
      </div>
    </div>
  );
}
