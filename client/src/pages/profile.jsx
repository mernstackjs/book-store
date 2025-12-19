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
    <div className="min-h-screen p-4  flex flex-col items-center justify-center ">
      <div className="w-full  md:max-w-4xl bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="h-40 bg-linear-to-r from-slate-900 to-slate-700 relative">
          <div className="absolute -bottom-14 left-8">
            <img
              src=""
              alt="profile image"
              className="w-28 h-28 rounded-full border-4 border-white object-cover"
            />
          </div>
        </div>

        <div className="pt-20 pb-8 px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Ahmed Abdirizaak
          </h2>

          <div className="flex flex-wrap gap-6 mt-4 text-slate-600">
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>ahmed@ahmed-book-store.com</span>
            </div>

            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>Member since 12/18/2025</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-3 mt-8 w-full max-w-4xl">
        <div className="w-full border border-gray-200 p-4 rounded-2xl flex gap-3 items-center">
          <BookOpen
            size={40}
            className="bg-yellow-100 rounded-2xl text-yellow-600 p-2"
          />
          <div>
            <span>1</span>
            <p>Active Loans</p>
          </div>
        </div>
        <div className="w-full border border-gray-200 p-4 rounded-2xl flex gap-3 items-center">
          <BookOpenText
            size={40}
            className="bg-green-300 rounded-2xl text-green-900 p-2"
          />
          <div>
            <span>1</span>
            <p>Books Returned</p>
          </div>
        </div>
        <div className="w-full border border-gray-200 p-4 rounded-2xl flex gap-3 items-center">
          <RotateCcw
            size={40}
            className="bg-emerald-500 rounded-2xl text-emerald-900 p-2"
          />
          <div>
            <span>1</span>
            <p>Total Loans</p>
          </div>
        </div>
      </div>

      <LoansBooks />
      <LoanHistoryBook />
    </div>
  );
}
