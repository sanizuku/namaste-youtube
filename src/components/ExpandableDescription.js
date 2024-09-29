import React, { useState } from "react";

const ExpandableDescription = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the description view
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Length of characters to show when collapsed
  const characterLimit = 50;
  const truncatedDescription =
    description.length > characterLimit
      ? `${description.slice(0, characterLimit)}...`
      : description;

  return (
    <div className="text-gray-800 w-full max-w-xl">
      <p className="text-sm leading-6">
        {isExpanded ? description : truncatedDescription}
      </p>
      <button
        onClick={toggleExpand}
        className="text-blue-500 hover:text-blue-700 font-semibold mt-2 focus:outline-none"
      >
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default ExpandableDescription;
