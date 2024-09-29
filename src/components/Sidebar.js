import React from "react";
import { useSelector } from "react-redux";
import {
  FaHome,
  // FaYoutube,
  // FaListAlt,
  // FaUserCircle,
  // FaVideo,
  // FaMusic,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //Early return Pattern
  if (!isMenuOpen) return null;
  // return (
  //   <div className="p-3 m-2 w-24 shadow-lg">
  //     <ul className="flex flex-col items-center cursor-pointer">
  //       <li className="mt-5 flex flex-col items-center">
  //         <Link to="/">
  //           <FaHome size={30} color="blue" />
  //           <span className="text-xs mt-1 text-center">Home</span>
  //         </Link>
  //       </li>
  //       <li className="mt-5 flex flex-col items-center">
  //         <FaYoutube size={30} color="red" />
  //         <span className="text-xs mt-1 text-center">Subscriptions</span>
  //       </li>
  //       <li className="mt-5 flex flex-col items-center">
  //         <FaListAlt size={30} color="green" />
  //         <span className="text-xs mt-1 text-center">Library</span>
  //       </li>
  //       <li className="mt-5 flex flex-col items-center">
  //         <FaUserCircle size={30} color="purple" />
  //         <span className="text-xs mt-1 text-center">Profile</span>
  //       </li>
  //     </ul>
  //   </div>
  // );

  return (
    <div className="bg-white w-50 p-2 m-2 sticky top-0 h-screen">
      <ul>
        <li className="hover:bg-gray-200 rounded-md ">
          <Link className="flex" to="/">
            <FaHome size={25} color="black" />
            <h4 className="text-lg mx-5 text-center">Home</h4>
          </Link>
        </li>

        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
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
