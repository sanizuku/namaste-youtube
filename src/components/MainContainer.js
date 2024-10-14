import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useLocation } from "react-router-dom";
import SearchResults from "./SearchReults";
<<<<<<< HEAD
import { useSelector } from "react-redux";

const MainContainer = () => {
  const location = useLocation(); // Get the current route
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  // Check if the current path contains '/search'
  const isSearchResultsPage = location.pathname.includes("/results");
=======

const MainContainer = () => {
  const location = useLocation(); // Get the current route

  // Check if the current path contains '/search'
  const isSearchResultsPage = location.pathname.includes("/results");

>>>>>>> 39b982be48fdac07ecd83bdcb9f203822750f431
  return (
    // <div className="flex-1 overflow-hidden">
    //   {/* Sticky Button List */}
    //   <div className="sticky top-0 z-50 bg-white shadow-md p-3">
    //     <ButtonList />
    //   </div>

    //   {/* Scrollable Video Container */}
    //   <div className="overflow-y-auto h-[calc(100vh-64px)] p-4">
    //     <VideoContainer />
    //   </div>
    // </div>
    <div className="flex-1 flex flex-col">
      {/* Sticky Button List */}
      <div
        className={`sticky top-0 z-10 ${
          isDarkMode ? "bg-zinc-900 text-white" : "bg-white text-black"
        }`}
      >
        <ButtonList />
      </div>

      {/* Scrollable Video Container */}
      <div className="flex-1 overflow-y-auto p-4">
        {isSearchResultsPage ? <SearchResults /> : <VideoContainer />}
      </div>
    </div>
  );
};

export default MainContainer;
