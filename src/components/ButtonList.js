import React from "react";
import Button from "./Button";

const list = [
  "All",
  "News",
  "Live",
  "Cricket",
  "Data Structures",
  "Web Development",
];
const ButtonList = () => {
  return (
    <div className=" flex space-x-4">
      {list.map((buttonName, index) => (
        <Button key={index} name={buttonName} />
      ))}
    </div>
  );
};

export default ButtonList;
