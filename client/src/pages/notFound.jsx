import React from "react";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen justify-center items-center">
      <button
        className="bg-red-500 text-white font-bold text-2xl px-12 py-2 rounded-2xl cursor-pointer"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </div>
  );
}
