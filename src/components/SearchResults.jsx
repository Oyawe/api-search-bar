/* eslint-disable react/prop-types */
import "./SearchResults.css";

export const SearchResults = ({ result }) => {
  return <div className="search-result">{result.name}</div>;
};
