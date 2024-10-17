import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { Google_Api_Key } from "../utils/constants";
import ReactPlayer from "react-player";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videoData, setVideoData] = useState();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();

  const handleClick = async () => {
    const videoData = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        searchParams.get("v") +
        "&key=" +
        Google_Api_Key
    );

    const json = await videoData.json();
    setVideoData(json);
    console.log("Dataaaa", json);
  };
  useEffect(() => {
    dispatch(closeMenu());
    handleClick();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="px-5 flex">
        <div>
          <ReactPlayer
            url={"https://www.youtube.com/embed/" + searchParams.get("v")}
            controls={true} // Enables play/pause controls
            playing={true}
            width="900px"
            height="600px"
          />
          <h1 className="p-2 m-2 font-bold">
            {videoData?.items[0]?.snippet?.title}
          </h1>
        </div>

        <div className="w-full">
          <LiveChat />
        </div>
      </div>

      <div>
        <CommentContainer />
      </div>
      <div className="mb-12"></div>
    </div>
  );
};

export default WatchPage;
