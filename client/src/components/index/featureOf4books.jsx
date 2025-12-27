import { ArrowRight, BookOpen, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";
export const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    rating: 4.5,
    available: 3,
    category: "Classic",
    image:
      "https://skyhorse-us.imgix.net/covers/9781949846386.jpg?auto=format&w=298",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    rating: 4.8,
    available: 2,
    category: "Classic",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    rating: 4.7,
    available: 4,
    category: "Dystopian",
    image: "https://i.ebayimg.com/images/g/u6wAAOSwwX1hN7xf/s-l1200.jpg",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    rating: 4.6,
    available: 1,
    category: "Romance",
    image:
      "https://goldenglobes.com/wp-content/uploads/2023/10/pride-prejudice.jpg",
  },
];
export default function FeatureOf4books() {
  return (
    <div className="bg-gradient-to-b from-yellow-50 to-white md:p-18 p-4 py-16">
      <div className="flex justify-between items-center mb-12">
        <div>
          <span className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Featured Books</span>
          <p className="text-gray-600 mt-2 text-lg">
            Hand-picked selections from our collection
          </p>
        </div>
        <Link
          className="md:flex hidden justify-center items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          to="/catalog"
        >
          View All <ArrowRight size={18} />
        </Link>
      </div>
      <div className="grid mt-8 gap-6 md:grid-cols-4">
        {books?.map((book, index) => (
          <div
            key={book.id}
            className="bg-white group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 animate-fadeInUp"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative overflow-hidden">
              <img
                className="h-80 object-cover w-full group-hover:scale-110 transition-transform duration-500"
                src={book.image}
                alt={book.title}
              />
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <Link
                to={`/book/${book.id}`}
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold flex gap-2 justify-center items-center px-6 py-3 rounded-full absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl hover:scale-105 whitespace-nowrap"
              >
                <BookOpen size={20} /> View Details
              </Link>
            </div>
            <div className="p-5">
              <div className="flex gap-1 items-center mb-3">
                <Star fill="#f59e0b" color="#f59e0b" size={20} />
                <span className="text-lg font-bold text-amber-600">{book.rating}</span>
                <span className="text-gray-400 text-sm">/ 5</span>
              </div>
              <h3 className="text-xl font-bold my-2 text-gray-900 group-hover:text-amber-600 transition-colors duration-300">{book.title}</h3>
              <p className="text-gray-600 mb-3 font-medium">{book.author}</p>
              <span className="inline-block bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-full px-4 py-1.5 font-semibold text-sm border border-amber-200">
                {book.category}
              </span>
              <button className="w-full bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-gray-300 rounded-xl cursor-pointer mt-4 px-4 py-3 font-semibold text-gray-700 hover:from-amber-500 hover:to-orange-500 hover:text-white hover:border-transparent transition-all duration-300 hover:shadow-lg">
                Loan Book
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
