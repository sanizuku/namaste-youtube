import React from "react";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

const SearchReults = (props) => {
  console.log(props.data[0]);
  return (
    <div className="grid grid-row-1 sm:grid-row-2 lg:grid-row-4 gap-6">
      {/* Render VideoCard only if videos[0] exists */}
      {props.data?.length > 0 ? (
        props.data.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SearchReults;
