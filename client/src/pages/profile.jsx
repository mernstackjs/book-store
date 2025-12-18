import React from "react";
import { useState } from "react";

export default function Profile() {
  const [username, setUsername] = useState("");
  const [name] = useState(() => {
    const storedName = localStorage.getItem("name");
    return storedName ? JSON.parse(storedName) : "";
  });
  const setNameHandle = () => {
    console.log(username);
    localStorage.setItem("name", JSON.stringify(username));
    setUsername("");
  };

  return (
    <div>
      <h1>Profile</h1>

      <div className="border p-3 m-4">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full"
          type="text"
          placeholder="Enter Your Name"
        />
        <button
          onClick={setNameHandle}
          className="bg-blue-700 text-white text-lg px-4 py-2 rounded-2xl m-2 cursor-pointer"
        >
          Add Name
        </button>
      </div>

      <div className="bg-amber-300 text-red-600 p-4 flex flex-col gap-2">
        <span>Hello, {name || "Guest"}!</span>
        <button
          onClick={() => localStorage.removeItem("name")}
          className="bg-blue-700 text-white rounded-2xl p-2 cursor-pointer"
        >
          Remove my Name
        </button>
      </div>
    </div>
  );
}
