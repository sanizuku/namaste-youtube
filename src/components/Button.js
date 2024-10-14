import React from "react";
import { useSelector } from "react-redux";

const Button = ({ name }) => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <div>
      <button
        className={`px-3 py-1 m-2 rounded-lg ${
          isDarkMode ? "bg-gray-500 text-white" : "bg-gray-300"
        }`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
