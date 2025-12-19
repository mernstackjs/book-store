import { BookOpen, Calendar } from "lucide-react";
import React from "react";

export default function LoansBooks() {
  return (
    <div className="mt-8 w-full max-w-4xl border border-gray-200 rounded-lg p-6">
      <div className="flex gap-3">
        <BookOpen
          size={40}
          className="bg-yellow-100 rounded-2xl text-yellow-600 p-2"
        />
        <span className="text-2xl font-bold">Active Loans</span>
      </div>
      <div className="border border-gray-200 mt-4 rounded-lg p-4 md:flex justify-between items-center">
        <div className="flex gap-2.5">
          <img
            className="w-20 h-20"
            src="https://cdn.pixabay.com/photo/2022/01/22/16/54/book-6957870_1280.jpg"
            alt="book image"
          />
          <div>
            <p>Book Title</p>
            <p>Book author</p>

            <div className="md:flex gap-2">
              <span className="flex gap-2">
                <Calendar size={20} /> Borrowed: 1/10/2024
              </span>
              <span>Due: 1/24/2024</span>
              <button className="bg-red-600 text-white rounded-2xl px-3 cursor-pointer">
                Overdue
              </button>
            </div>
          </div>
        </div>
        <button className="bg-slate-900 text-white rounded-lg px-4 py-2 cursor-pointer">
          Return
        </button>
      </div>
    </div>
  );
}
