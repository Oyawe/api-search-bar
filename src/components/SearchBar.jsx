/* eslint-disable react/prop-types */
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import { useState } from "react";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fecthData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        // console.log(results);
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fecthData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        type="text"
        placeholder="Type to serach..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
