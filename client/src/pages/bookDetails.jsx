import { ArrowLeft, BookOpen, Calendar, Hash, Star } from "lucide-react";

import { Link, useParams } from "react-router";
import { books } from "../components/index/featureOf4books";

export default function BookDetails() {
  const { bookId } = useParams();
  const book = books.find((book) => book.id == bookId);

  return (
    <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 min-h-screen py-8 md:px-18 px-4">
      <Link
        className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white shadow-md hover:shadow-lg transition-all duration-300 font-medium text-gray-700 hover:text-amber-600"
        to="/catalog"
      >
        <ArrowLeft size={18} /> Back to catalog
      </Link>

      <div className="md:flex gap-8 bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-xl animate-fadeInUp">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <img
            className="w-full h-auto rounded-2xl shadow-2xl object-cover hover:scale-105 transition-transform duration-500"
            src={book?.image}
            alt={book?.title}
          />
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="inline-block bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-full px-5 py-2 font-semibold border border-amber-200 shadow-sm">
              {book.category}
            </span>
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full px-5 py-2 font-semibold shadow-md">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              {book.available} available
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            {book.title}
          </h1>
          <p className="text-xl text-gray-600 mb-4 font-medium">{book.author}</p>

          <div className="flex gap-2 items-center mb-6">
            <div className="flex items-center gap-1 bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-full border border-amber-200">
              <Star fill="#f59e0b" color="#f59e0b" size={24} />
              <span className="text-xl font-bold text-amber-600">{book.rating}</span>
              <span className="text-gray-500 text-sm font-medium">/ 5</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 my-6">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border border-amber-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex gap-3 items-center">
                <Calendar
                  size={48}
                  className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl text-white p-3 shadow-lg"
                />
                <div className="flex flex-col">
                  <span className="text-sm text-gray-600 font-medium">Published</span>
                  <span className="text-lg font-bold text-gray-900">1960</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border border-amber-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex gap-3 items-center">
                <Hash
                  size={48}
                  className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl text-white p-3 shadow-lg"
                />
                <div className="flex flex-col">
                  <span className="text-sm text-gray-600 font-medium">ISBN</span>
                  <span className="text-sm font-bold text-gray-900">978-0061120084</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border border-amber-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex gap-3 items-center">
                <BookOpen
                  size={48}
                  className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl text-white p-3 shadow-lg"
                />
                <div className="flex flex-col">
                  <span className="text-sm text-gray-600 font-medium">Total Copies</span>
                  <span className="text-lg font-bold text-gray-900">4</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-amber-50/30 rounded-2xl p-6 border border-amber-100 shadow-md mb-6">
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Description</h3>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aliquam modi dolorum voluptatem, repellendus optio quod
              reiciendis rem odio ratione officiis. Lorem ipsum dolor sit
              amet.
            </p>
          </div>

          <button className="bg-gradient-to-r from-amber-500 to-orange-500 cursor-pointer inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold text-white hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 animate-pulse-glow">
            <BookOpen size={24} /> Loan This Book
          </button>
        </div>
      </div>
    </div>
  );
}
