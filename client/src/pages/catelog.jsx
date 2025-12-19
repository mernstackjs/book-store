import axios from "axios";
import React from "react";
import { useState } from "react";

export default function Catelog() {
  const [message, setMessage] = useState(() => {
    const respMessage = localStorage.getItem("message");
    return respMessage ? JSON.parse(respMessage) : "";
  });
  const testApiCall = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/health`
    );
    localStorage.setItem("message", JSON.stringify(response.data.message));
  };
  return (
    <div>
      <h1>Book Catalog</h1>
      <p>Browse our collection of [] books</p>

      <button
        onClick={testApiCall}
        className="text-white bg-amber-900 p-3 rounded-md my-5"
      >
        Test Api Call
      </button>

      <p className="px-12  text-2xl font-extrabold italic">
        {message ? message : "No message"}
      </p>
    </div>
  );
}
