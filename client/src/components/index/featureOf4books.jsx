import { ArrowRight, BookOpen, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

export default function FeatureOf4books() {
  const books = [
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

  return (
    <div className="bg-yellow-50 md:p-18 p-4">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-3xl">Featured Books</span>
          <p className="text-gray-500">
            Hand-picked selections from our collection
          </p>
        </div>
        <Link
          className="md:flex hidden justify-center items-center gap-2"
          to="/catalog"
        >
          View All <ArrowRight size={18} />
        </Link>
      </div>
      <div className="grid mt-8 h-164 gap-4 md:grid-cols-4">
        {books?.map((book) => (
          <div className="shadow-2xl bg-white group rounded-xl">
            <div className=" relative">
              <img
                className="h-140 rounded-t-xl object-cover w-full"
                src={book.image}
                alt={book.title}
              />
              <Link
                to={`/book/${book.id}`}
                className="bg-yellow-500 text-white  flex gap-2 justify-center items-center  w-3/4 px-4 py-2 rounded-xl  absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <BookOpen /> View Details
              </Link>
            </div>
            <div className="p-4">
              <span className="flex gap-1">
                <Star color="#d29641" /> {book.rating}{" "}
                <span className="text-gray-400 text-sm">/ 5</span>
              </span>
              <p className="text-xl font-medium my-1">{book.title}</p>
              <p className="text-gray-500 mb-2">{book.author}</p>
              <span className="border rounded-2xl  border-gray-200 px-4 py-1 font-medium">
                {book.category}
              </span>
              <button className="w-full  border-2  border-gray-300 rounded-xl cursor-pointer bg-gray-50 mt-4 px-4 py-2">
                Loan Book
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
