import { Edit, Plus, Search, Trash2 } from "lucide-react";
import React, { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";

export default function ManageBooks() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);

  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      category: "Classic",
      copies: 5,
      available: 3,
      isbn: "978-0743273565",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      category: "Classic",
      copies: 4,
      available: 2,
      isbn: "978-0061120084",
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      category: "Dystopian",
      copies: 6,
      available: 4,
      isbn: "978-0451524935",
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      category: "Romance",
      copies: 3,
      available: 1,
      isbn: "978-0141439518",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <AdminSidebar />

      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8 animate-fadeInUp">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Manage Books
              </h1>
              <p className="text-gray-600 mt-2 text-lg">
                Add, edit, or remove books from your collection
              </p>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
            >
              <Plus size={20} />
              Add New Book
            </button>
          </div>

          {/* Search Bar */}
          <div className="mb-6 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search books by title, author, or ISBN..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border border-amber-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 shadow-md"
              />
            </div>
          </div>

          {/* Books Table */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-amber-100 overflow-hidden animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Title</th>
                    <th className="px-6 py-4 text-left font-semibold">Author</th>
                    <th className="px-6 py-4 text-left font-semibold">Category</th>
                    <th className="px-6 py-4 text-left font-semibold">ISBN</th>
                    <th className="px-6 py-4 text-left font-semibold">Copies</th>
                    <th className="px-6 py-4 text-left font-semibold">Available</th>
                    <th className="px-6 py-4 text-left font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {books.map((book, index) => (
                    <tr
                      key={book.id}
                      className="border-b border-amber-100 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 transition-all duration-300"
                    >
                      <td className="px-6 py-4">
                        <p className="font-bold text-gray-900">{book.title}</p>
                      </td>
                      <td className="px-6 py-4 text-gray-700">{book.author}</td>
                      <td className="px-6 py-4">
                        <span className="inline-block bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold border border-amber-200">
                          {book.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-700 text-sm font-mono">
                        {book.isbn}
                      </td>
                      <td className="px-6 py-4 text-gray-900 font-semibold">
                        {book.copies}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${
                            book.available > 0
                              ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                              : "bg-gradient-to-r from-red-500 to-red-600 text-white"
                          }`}
                        >
                          <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                          {book.available}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110">
                            <Edit size={18} />
                          </button>
                          <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Add Book Modal */}
          {showAddModal && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeInUp">
              <div className="bg-white rounded-3xl p-8 max-w-2xl w-full mx-4 shadow-2xl border border-amber-200">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
                  Add New Book
                </h2>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Book Title
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300"
                        placeholder="Enter book title"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Author
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300"
                        placeholder="Enter author name"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Category
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300"
                        placeholder="e.g., Classic, Fiction"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        ISBN
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300"
                        placeholder="978-XXXXXXXXXX"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Total Copies
                      </label>
                      <input
                        type="number"
                        className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300"
                        placeholder="0"
                        min="0"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Image URL
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300"
                        placeholder="https://..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Description
                    </label>
                    <textarea
                      rows="3"
                      className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300"
                      placeholder="Enter book description"
                    ></textarea>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowAddModal(false)}
                      className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Add Book
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
