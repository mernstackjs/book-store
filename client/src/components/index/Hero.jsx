import { ArrowRight, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

export default function Hero() {
  return (
    <div className="bg-yellow-50 h-96 flex justify-center items-center">
      <div className="flex flex-col items-center gap-3  text-center w-full px-4">
        <span className="inline-flex gap-2 bg-amber-100 p-3 rounded-2xl text-amber-400 mb-4">
          <Star /> Your Literary Journey Begins Here
        </span>
        <h1 className="font-bold leading-tight text-[clamp(2rem,5vw,6rem)]">
          Discover Your Next{" "}
          <span className="text-amber-500 text-[clamp(2rem,5vw,6rem)]">
            Great Read
          </span>
        </h1>
        <p>
          Explore our curated collection of timeless classics and modern
          masterpieces. Borrow, read, and return with ease at BookHaven.
        </p>

        <Link
          to="/catalog"
          className="bg-amber-500 mt-8 inline-flex items-center gap-2 rounded-md px-6 py-3 font-bold text-white hover:bg-amber-600 transition"
        >
          Browse Catalog <ArrowRight />
        </Link>
      </div>
    </div>
  );
}
