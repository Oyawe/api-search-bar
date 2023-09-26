// eslint-disable-next-line react/prop-types
const SearchError = ({ err }) => {
  return (
    <>
      <div
        className="results-list"
        style={{ padding: 10, textAlign: "center" }}
      >
        {err}
      </div>
    </>
  );
};

export default SearchError;
