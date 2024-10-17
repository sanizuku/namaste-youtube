import React, { useEffect, useState } from "react";
import Youtube_Video_Url from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVideo } from "../utils/videoSlice";

const VideoContainer = () => {
  // const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.video.videos[0]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(Youtube_Video_Url);
    const json = await data.json();
    console.log(json.items);
    dispatch(addVideo(json.items));
    // setVideos(json?.items);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Render VideoCard only if videos[0] exists */}
      {videos?.length > 0 ? (
        videos.map((video) => (
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

export default VideoContainer;
