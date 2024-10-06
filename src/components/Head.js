import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Youtube_Search_Query_Api } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import SearchVideos from "./SearchVideos";
// import { useNavigate } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [currentSearch, setCurrentSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  // const navigate = useNavigate();
  const searchCache = useSelector((store) => store.search);
  const getSearchSuggestion = useCallback(async () => {
    const data = await fetch(Youtube_Search_Query_Api + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    //update cache

    dispatch(cacheResults({ [searchQuery]: json[1] }));
    // eslint-disable-next-line
  }, [searchQuery]);
  useEffect(() => {
    const timer = setTimeout(
      () =>
        searchCache[searchQuery]
          ? setSuggestions(searchCache[searchQuery])
          : getSearchSuggestion(),
      200
    ); //Debouncing
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [searchQuery]);

  // console.log(suggestions);
  // useEffect(()=>{

  // },[])
  const searchVideos = (query) => {
    console.log("Searching for:", query); // Log the query
    setCurrentSearch(query);
    window.location.href = `/results?search_query=${query}`;
    // navigate(`/searchResults?q=${query}`);
    setShowSuggestions(false); // Hide suggestions after selection
  };
  return (
    <div className="relative bg-white shadow-lg top-0 z-30 w-full grid grid-flow-col p-4 m-1">
      <div className="container mx-auto flex items-center">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-12 cursor-pointer"
          alt="hamburger-icon"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/non_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />
        <a href="LOGO">
          <img
            className="h-12"
            alt="youtube-logo"
            src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg"
          />
        </a>
      </div>
      <div className="col-span-10 px-10 relative">
        <div>
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            onFocus={() => setShowSuggestions(true)}
            //  onBlur={() => setShowSuggestions(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchVideos(searchQuery); // Trigger search on Enter
              }
            }}
          />
          <button
            onClick={() => searchVideos(searchQuery)}
            className="border border-gray-400 p-2 rounded-r-full"
          >
            🔍
          </button>
        </div>
        {searchQuery && showSuggestions && (
          <div className="absolute h-fit top-full left-0 w-1/2 bg-white border border-gray-200 rounded-lg py-2 px-2 z-40">
            <ul>
              {suggestions &&
                suggestions.map((s, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setSearchQuery(s); // Set input value to clicked suggestion
                      searchVideos(s); // Call search function
                    }}
                    className="px-3 py-2 shadow-sm hover:bg-gray-200"
                  >
                    {s}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
      <img
        className="h-9"
        alt="user-icon"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdc-W5ojfTUtpuXImje0ZtN86Fugts0-_bKw&s"
      />
      {currentSearch && <SearchVideos data={currentSearch} />}
    </div>
  );
};

export default Head;
