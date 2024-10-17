import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //Early return Pattern
  if (!isMenuOpen) return null;

  return (
    <div className="w-50 px-2 m-2  sticky top-0 h-screen">
      <ul>
        <li className="transform  hover:bg-stone-400 transition duration-500 hover:scale-125 rounded-md pl-2">
          <Link className="flex" to="/">
            <h4 className="text-lg text-center">Home</h4>
          </Link>
        </li>

        <li className=" pl-2">Shorts</li>
        <li className=" pl-2">Videos</li>
        <li className=" pl-2">Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">WatchLater</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
