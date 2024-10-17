import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {
  MENU_LOGO_URL,
  USER_ICON_URL,
  YOUTUBE_LOGO_URL,
  Youtube_Search_Query_Api,
} from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import SearchVideos from "./SearchVideos";
import ToggleSwitch from "./ToogleSwitch";

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
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
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

  const searchVideos = (query) => {
    console.log("Searching for:", query); // Log the query
    setCurrentSearch(query);
    window.location.href = `/results?search_query=${query}`;
    // navigate(`/searchResults?q=${query}`);
    setShowSuggestions(false); // Hide suggestions after selection
  };
  return (
    <div
      className={`relative shadow-lg top-0 z-30 w-full grid grid-flow-col p-4  ${
        isDarkMode ? "bg-zinc-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto flex items-center">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-12 cursor-pointer"
          alt="hamburger-icon"
          src={MENU_LOGO_URL}
        />
        <a href="/">
          <img
            className="h-12 ml-4"
            alt="youtube-logo"
            src={YOUTUBE_LOGO_URL}
          />
        </a>
      </div>
      <div className="col-span-10 px-10 relative ml-24">
        <div>
          <input
            className={`w-2/3 border border-gray-400 p-2 rounded-l-full ${
              isDarkMode ? "bg-black text-white" : "bg-white text-black"
            }`}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            onFocus={() => setShowSuggestions(true)}
            // onBlur={() => setShowSuggestions(false)}
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
          <div
            className={`w-1/2 absolute h-fit top-full border border-gray-200 rounded-lg py-2 px-2 z-40 ${
              isDarkMode ? "bg-zinc-900 text-white" : "bg-white text-black"
            }`}
          >
            <ul>
              {suggestions &&
                suggestions.map((s, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setSearchQuery(s); // Set input value to clicked suggestion
                      searchVideos(s); // Call search function
                    }}
                    className="px-3 py-2 shadow-sm hover:bg-gray-500"
                  >
                    {s}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
      <ToggleSwitch />
      <img className="h-9" alt="user-icon" src={USER_ICON_URL} />
      {currentSearch && <SearchVideos data={currentSearch} />}
    </div>
  );
};

export default Head;
