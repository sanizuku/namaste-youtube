import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");
  const [searchResults, setSearchResults] = useState([]);
  const fetchSearchResults = async () => {
    const api = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${process.env.REACT_APP_API_KEY}`;

    const response = await fetch(api);
    const data = await response.json();

    const filteredResults = data?.items.filter(
      (result) => result.id.kind === "youtube#video"
    );
    if (filteredResults) {
      setSearchResults(filteredResults);
      // Update the results with fetched data
    } else {
      setSearchResults([]);
    }
  };
  useEffect(() => {
    // Fetch search results based on the query
    fetchSearchResults();
    // eslint-disable-next-line
  }, [query]);

  return (
    <div>
      {searchResults &&
        searchResults.map((result) => (
          <Link key={result.id.videoId} to={"/watch?v=" + result.id.videoId}>
            <div
              className="p-2 m-2 w-full shadow-lg flex flex-row"
              key={result.id.videoId}
            >
              <img
                className="rounded-lg "
                alt="thumbnail"
                src={result?.snippet?.thumbnails.medium.url}
              />
              <div className="p-2 m-2">
                <h3 className="font-bold">{result.snippet.title}</h3>
                <p>{result.snippet.description}</p>
              </div>
            </div>
          </Link>
        ))}
      <div className="mb-24"></div>
    </div>
  );
};

export default SearchResults;
