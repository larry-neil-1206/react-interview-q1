import React, { FC, useEffect, useState } from "react";
import { getLocations, isNameValid } from "../../mock-api/apis";

const ReactInterviewForm: FC = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [locations, setLocations] = useState<string[]>([]);
  const [data, setData] = useState([
    { name: "John Doe", location: "Location 1" },
    { name: "John Doe", location: "Location 1" },
  ]);
  const [isNameTaken, setIsNameTaken] = useState(false);

  const handleClear = () => {
    // Clear the form
  };

  const handleAdd = () => {
    // Add the form data
  };

  const onNameChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setName(newName);
    const nameTaken = await isNameValid(newName);
    setIsNameTaken(nameTaken);
  };
  const fetchLocations = async () => {
    const locations = await getLocations();
    setLocations(locations);
  };
  useEffect(() => {
    fetchLocations();
  }, []);

  return (
    <>
      <form className="m-5 p-5">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={name}
            onChange={onNameChange}
          />
          {isNameTaken && (
            <p className="text-red-500 text-xs italic">
              This name is already taken.
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="location"
          >
            Location:
          </label>
          <select
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">--Please choose an option--</option>
            {locations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4 flex justify-end mt-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={() => handleClear()}
          >
            Clear
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleAdd()}
          >
            Add
          </button>
        </div>
      </form>
      <div className="m-5 p-5">
        <table className="table-auto w-full mt-5">
          <thead>
            <tr>
              <th className="border text-left px-4 py-2">Name</th>
              <th className="border text-left px-4 py-2">Location</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ReactInterviewForm;
