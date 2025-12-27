import { ArrowRight, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

export default function Hero() {
  return (
    <div className="relative bg-linear-to-br from-amber-50 via-yellow-50 to-orange-50 h-150 flex justify-center items-center overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute -bottom-20 left-1/2 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative flex flex-col items-center gap-5 text-center w-full px-4 max-w-5xl">
        <span className="inline-flex gap-2 bg-linear-to-r from-amber-100 to-orange-100 p-3 px-5 rounded-full text-amber-600 font-medium mb-2 shadow-lg border border-amber-200 animate-fadeInUp hover:scale-105 transition-transform duration-300">
          <Star className="animate-float" fill="#f59e0b" /> Your Literary
          Journey Begins Here
        </span>

        <h1
          className="font-extrabold leading-tight text-[clamp(2.5rem,6vw,6rem)] animate-fadeInUp"
          style={{ animationDelay: "0.1s" }}
        >
          Discover Your Next{" "}
          <span className="gradient-text text-[clamp(2.5rem,6vw,6rem)] drop-shadow-lg">
            Great Read
          </span>
        </h1>

        <p
          className="text-lg text-gray-700 max-w-2xl leading-relaxed animate-fadeInUp"
          style={{ animationDelay: "0.2s" }}
        >
          Explore our curated collection of timeless classics and modern
          masterpieces. Borrow, read, and return with ease at BookHaven.
        </p>

        <Link
          to="/catalog"
          className="bg-linear-to-r from-amber-500 to-orange-500 mt-6 inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold text-white hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 animate-pulse-glow animate-fadeInUp"
          style={{ animationDelay: "0.3s" }}
        >
          Browse Catalog{" "}
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
