/* eslint-disable react/prop-types */
import { SearchResults } from "./SearchResults";
import "./SearchResultsLists.css";

export const SearchResultsLists = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, index) => {
        return <SearchResults key={index} result={result} />;
      })}
    </div>
  );
};
