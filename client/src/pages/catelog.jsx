import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Catelog() {
  const [message, setMessage] = useState("");
  const [people, setPeople] = useState([]);
  const [name, setName] = useState("");
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
  useEffect(() => {
    const getPeople = async () => {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/get-peoples`
      );
      setPeople(response.data.peoples);
      setLoading(false);
    };

    getPeople();
  }, []);

  const addPersonHandle = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/add-person`,

        {
          name,
        }
      );
      setName("");
    } catch (error) {
      console.log(error);
    }
  };

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

      <div className="p-4 md:flex gap-2">
        <div>
          <h1>Add Person</h1>
          <input
            className="border my-3 rounded-md w-full p-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Name"
          />
          <button
            className="p-3 mb-3 rounded-md bg-blue-900 text-white"
            onClick={addPersonHandle}
          >
            Add Name
          </button>
        </div>
        <div>
          <h1>View Peoples</h1>
          {!loading &&
            people?.map((person) => (
              <div
                key={person.id}
                className="flex gap-2 bg-amber-300 text-amber-700 p-2 rounded-xl my-2"
              >
                <p>{person.id}</p>
                <p>{person.name}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
