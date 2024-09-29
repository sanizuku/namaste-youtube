import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Youtube_Search_Query_Api } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const getSearchSuggestion = useCallback(async () => {
    const data = await fetch(Youtube_Search_Query_Api + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
  }, [searchQuery]);
  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(), 200);
    return () => clearTimeout(timer);
  }, [searchQuery, getSearchSuggestion]);

  // console.log(suggestions);
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
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 p-2 rounded-r-full">
            🔍
          </button>
        </div>
        {searchQuery && showSuggestions && (
          <div className="absolute h-fit top-full left-0 w-1/2 bg-white border border-gray-200 rounded-lg py-2 px-2 z-40">
            <ul>
              {suggestions &&
                suggestions.map((s) => (
                  <li key={s} className="px-3 py-2 shadow-sm hover:bg-gray-200">
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
    </div>
  );
};

export default Head;
