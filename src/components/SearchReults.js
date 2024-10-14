import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Google_Api_Key } from "../utils/constants";
<<<<<<< HEAD

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");
  const [searchResults, setSearchResults] = useState([]);
  const fetchSearchResults = async () => {
    const api = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${Google_Api_Key}`;
    console.log("aaa", api);
    const response = await fetch(api);
    const data = await response.json();
    console.log("dataa", data.items);
    const filteredResults = data?.items.filter(
      (result) => result.id.kind === "youtube#video"
    );
    console.log("kaka", filteredResults);
    setSearchResults(filteredResults); // Update the results with fetched data
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
=======

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");

  const [searchResults, setSearchResults] = useState([]);
  const fetchSearchResults = async () => {
    const getvalue = decodeURIComponent(query);
    const api = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${getvalue}&key=${Google_Api_Key}`;
    console.log("aaa", api);
    const response = await fetch(api);
    const data = await response.json();
    console.log("dataa", data.items);
    setSearchResults(data.items); // Update the results with fetched data
  };
  useEffect(() => {
    // Fetch search results based on the query
    fetchSearchResults();
    // eslint-disable-next-line
  }, [query]);
  const filteredResults = searchResults.filter(
    (result) => result.id.kind === "youtube#video"
  );

  console.log(filteredResults);
  return (
    <div>
      {filteredResults?.map((result) => (
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
>>>>>>> 39b982be48fdac07ecd83bdcb9f203822750f431
    </div>
  );
};

export default SearchResults;
