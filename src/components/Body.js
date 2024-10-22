import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Head from "./Head";

const Body = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Head />

      <div
        className={`flex h-full ${
          isDarkMode ? "bg-zinc-900 text-white" : "bg-white text-black"
        }`}
      >
        <Sidebar />
        <div className="flex-1 overflow-y-auto h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;
