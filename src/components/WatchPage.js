import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { Google_Api_Key } from "../utils/constants";
import ReactPlayer from "react-player";
// import ExpandableDescription from "./ExpandableDescription";

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
    <div>
      {/* <img
        src={videoData?.items[0]?.snippet?.thumbnails?.high?.url}
        alt="videoTHumbnail"
      /> */}
      <ReactPlayer
        url={"https://www.youtube.com/embed/" + searchParams.get("v")}
        controls={true} // Enables play/pause controls
        playing={true}
        width="966px"
        height="543px"
      />
      <h1 className="p-2 m-2 font-bold">
        {videoData?.items[0]?.snippet?.title}
      </h1>
      {/* {videoData.length > 0 ? (
        <ExpandableDescription
          description={videoData?.items[0]?.snippet?.description}
        />
      ) : (
        "....Loding"
      )} */}
    </div>
  );
};

export default WatchPage;
