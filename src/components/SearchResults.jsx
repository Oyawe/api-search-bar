/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./SearchResults.css";

export const SearchResults = ({ result }) => {
  return (
    <div
      className="search-result"
      onClick={(e) => alert(`You clicked on ${result.name}`)}
    >
      {result.name}
    </div>
  );
};
