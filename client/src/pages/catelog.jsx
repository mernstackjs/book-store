import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Catelog() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetTestApi = async () => {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/health`
      );
      setMessage(response?.data);
      setLoading(false);
    };

    fetTestApi();
  }, []);

  console.log();

  return (
    <div>
      <h1>Book Catalog</h1>
      <p>Browse our collection of [] books</p>

      {!loading ? (
        <p className="text-white py-8 m-4 text-2xl font-extrabold bg-amber-800 p-4">
          {message.message}
        </p>
      ) : (
        <p className="text-white py-8 m-4 text-2xl font-extrabold bg-amber-800 p-4">
          Loading ......
        </p>
      )}
    </div>
  );
}
