import { ArrowLeft, BookOpen, Calendar, Hash, Star } from "lucide-react";

import { Link, useParams } from "react-router";
import { books } from "../components/index/featureOf4books";

export default function BookDetails() {
  const { bookId } = useParams();
  const book = books.find((book) => book.id == bookId);

  return (
    <div className="bg-yellow-50 min-h-screen flex flex-col justify-center md:px-18 px-2">
      <Link className="flex my-4  items-center gap-2" to="/catalog">
        <ArrowLeft size={18} /> Back to catelog
      </Link>

      <div className="md:flex gap-3">
        <img className="border h-150" src={book?.image} alt={book?.title} />
        <div className="flex flex-col flex-1">
          <div className="flex gap-5 my-3">
            <span className="border rounded-2xl  border-gray-200 px-4 py-1 font-medium">
              {book.category}
            </span>
            <span className="border rounded-2xl  bg-green-900/85 text-white px-4 py-1 font-medium">
              {book.available} available
            </span>
          </div>
          <h1 className="text-2xl font-medium">{book.title}</h1>
          <p className="text-gray-500 mb-2">{book.author}</p>
          <span className="flex gap-1 my-3">
            <Star color="#d29641" /> {book.rating}{" "}
            <span className="text-gray-400 text-sm">/ 5</span>
          </span>
          <div className="border md:flex flex flex-col gap-4 items-start  my-5 border-gray-200 bg-white rounded-xl w-full p-6">
            <div className="flex gap-2 items-center justify-center">
              <Calendar
                size={40}
                className="bg-yellow-100 rounded-2xl text-yellow-600 p-2"
              />
              <div className="flex flex-col gap-1">
                <span>Published</span> <span>1960</span>
              </div>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <Hash
                size={40}
                className="bg-yellow-100 rounded-2xl text-yellow-600 p-2"
              />
              <div className="flex flex-col gap-1">
                <span>ISBN</span> <span>978-0061120084</span>
              </div>
            </div>
            <div className="flex gap-3 items-center justify-center">
              <BookOpen
                size={40}
                className="bg-yellow-100 rounded-2xl text-yellow-600 p-2"
              />
              <div className="flex flex-col gap-1">
                <span> Total Copies</span> <span>4</span>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h3 className="text-xl font-semibold">Description</h3>
              <p className="text-sm italic">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam modi dolorum voluptatem, repellendus optio quod
                reiciendis rem odio ratione officiis. Lorem ipsum dolor sit
                amet.
              </p>
            </div>
            <button className="bg-amber-500 ml-12 cursor-pointer my-8 inline-flex items-center gap-2 rounded-md px-6 py-3 font-bold text-white hover:bg-amber-600 transition">
              <BookOpen /> Loan This Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
