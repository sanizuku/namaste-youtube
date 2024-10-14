import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../utils/themeSlice";

const ToggleSwitch = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode); // Get theme state from Redux

  const handleToggle = () => {
    dispatch(toggleTheme()); // Dispatch action to toggle theme
  };

  return (
    <div
      onClick={handleToggle}
      className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
        isDarkMode ? "bg-slate-700" : "bg-gray-400"
      }`}
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          isDarkMode ? "translate-x-6" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
