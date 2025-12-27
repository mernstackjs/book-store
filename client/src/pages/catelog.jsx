import { BookOpen, Filter, Search, Star } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export default function Catelog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Classic", "Dystopian", "Romance", "Fiction", "Mystery", "Science Fiction"];

  const allBooks = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      rating: 4.5,
      available: 3,
      category: "Classic",
      image: "https://skyhorse-us.imgix.net/covers/9781949846386.jpg?auto=format&w=298",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      rating: 4.8,
      available: 2,
      category: "Classic",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
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
      image: "https://goldenglobes.com/wp-content/uploads/2023/10/pride-prejudice.jpg",
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      rating: 4.3,
      available: 5,
      category: "Classic",
      image: "https://skyhorse-us.imgix.net/covers/9781949846386.jpg?auto=format&w=298",
    },
    {
      id: 6,
      title: "Brave New World",
      author: "Aldous Huxley",
      rating: 4.4,
      available: 3,
      category: "Dystopian",
      image: "https://i.ebayimg.com/images/g/u6wAAOSwwX1hN7xf/s-l1200.jpg",
    },
    {
      id: 7,
      title: "Jane Eyre",
      author: "Charlotte Brontë",
      rating: 4.5,
      available: 2,
      category: "Romance",
      image: "https://goldenglobes.com/wp-content/uploads/2023/10/pride-prejudice.jpg",
    },
    {
      id: 8,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      rating: 4.9,
      available: 0,
      category: "Fiction",
      image: "https://skyhorse-us.imgix.net/covers/9781949846386.jpg?auto=format&w=298",
    },
  ];

  const filteredBooks = allBooks.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-12 px-4 md:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 text-center animate-fadeInUp">
          <div className="inline-block mb-4">
            <span className="px-6 py-2 bg-white/80 backdrop-blur-sm border-2 border-amber-300 rounded-full text-amber-700 font-bold text-sm shadow-lg">
              📚 Explore Our Collection
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 bg-clip-text text-transparent mb-4 drop-shadow-sm">
            Book Catalog
          </h1>
          <p className="text-gray-700 text-xl max-w-2xl mx-auto font-medium">
            Discover {allBooks.length} incredible books waiting for you
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          {/* Search Bar */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative">
              <Search
                className="absolute left-6 top-1/2 -translate-y-1/2 text-amber-600"
                size={24}
              />
              <input
                type="text"
                placeholder="Search by title or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-6 py-5 bg-white/90 backdrop-blur-xl border-2 border-amber-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-400 transition-all duration-300 text-gray-800 placeholder-gray-500 text-lg shadow-xl"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border-2 border-amber-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-xl shadow-lg">
                <Filter className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Filter by Category</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xl shadow-amber-500/40 scale-110"
                      : "bg-amber-50 text-amber-700 border-2 border-amber-300 hover:scale-105 hover:bg-amber-100 hover:border-amber-400"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <div className="inline-block bg-white/90 backdrop-blur-xl px-6 py-3 rounded-2xl border-2 border-amber-200 shadow-lg">
            <p className="text-gray-700 text-lg font-semibold">
              Showing <span className="font-bold text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">{filteredBooks.length}</span> books
              {selectedCategory !== "All" && (
                <span> in <span className="font-bold text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">{selectedCategory}</span></span>
              )}
            </p>
          </div>
        </div>

        {/* Books List - Horizontal Layout (Different from Featured Books) */}
        {filteredBooks.length > 0 ? (
          <div className="space-y-6">
            {filteredBooks.map((book, index) => (
              <div
                key={book.id}
                className="group relative animate-fadeInUp"
                style={{ animationDelay: `${(index % 8) * 0.05}s` }}
              >
                {/* Card Container - Horizontal Layout */}
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border-2 border-amber-200 hover:border-amber-400 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row gap-6 p-6">
                    {/* Left Side - Book Image */}
                    <div className="relative md:w-48 lg:w-56 flex-shrink-0">
                      <div className="relative overflow-hidden rounded-2xl group/img">
                        <img
                          className="w-full h-64 md:h-72 object-cover group-hover/img:scale-110 transition-transform duration-700"
                          src={book.image}
                          alt={book.title}
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500"></div>

                        {/* Availability Badge on Image */}
                        <div className="absolute top-3 right-3">
                          {book.available > 0 ? (
                            <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-3 py-1.5 rounded-xl text-xs font-bold shadow-xl">
                              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                              {book.available} Available
                            </span>
                          ) : (
                            <span className="bg-gradient-to-r from-red-500 to-rose-600 text-white px-3 py-1.5 rounded-xl text-xs font-bold shadow-xl">
                              Out of Stock
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Rating Display Below Image */}
                      <div className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-3 border-2 border-amber-300">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={i < Math.floor(book.rating) ? "fill-amber-500 text-amber-500" : "fill-gray-300 text-gray-300"}
                            />
                          ))}
                        </div>
                        <span className="text-lg font-bold text-amber-600">{book.rating}</span>
                      </div>
                    </div>

                    {/* Right Side - Book Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        {/* Category Badge */}
                        <span className="inline-block bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-full px-4 py-1.5 font-bold text-sm border-2 border-amber-300 mb-4">
                          {book.category}
                        </span>

                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-orange-600 group-hover:bg-clip-text transition-all duration-300">
                          {book.title}
                        </h3>

                        {/* Author */}
                        <p className="text-lg text-gray-600 mb-4 font-semibold">by {book.author}</p>

                        {/* Description (Mock) */}
                        <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                          A timeless classic that continues to captivate readers across generations. This masterpiece offers profound insights into human nature and society, making it a must-read for book enthusiasts.
                        </p>
                      </div>

                      {/* Bottom Actions */}
                      <div className="flex flex-wrap gap-3 items-center">
                        <Link
                          to={`/book/${book.id}`}
                          className="flex-1 min-w-[200px] bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold flex gap-2 justify-center items-center px-6 py-3.5 rounded-2xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                          <BookOpen size={20} /> View Details
                        </Link>

                        <button
                          className={`flex-1 min-w-[200px] px-6 py-3.5 rounded-2xl font-bold transition-all duration-300 ${
                            book.available > 0
                              ? "bg-white border-2 border-amber-400 text-amber-700 hover:bg-amber-50 hover:border-amber-500 hover:scale-105 shadow-md hover:shadow-lg"
                              : "bg-gray-200 text-gray-400 cursor-not-allowed border-2 border-gray-300"
                          }`}
                          disabled={book.available === 0}
                        >
                          {book.available > 0 ? "🔖 Loan Book" : "Unavailable"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 animate-fadeInUp">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-12 md:p-16 shadow-2xl border-2 border-amber-200 max-w-lg mx-auto">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur-2xl opacity-20"></div>
                <div className="relative bg-gradient-to-br from-amber-500 to-orange-500 w-28 h-28 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                  <BookOpen size={56} className="text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">No Books Found</h3>
              <p className="text-gray-600 text-lg mb-8">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-bold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-xl shadow-amber-500/40 hover:scale-110"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
