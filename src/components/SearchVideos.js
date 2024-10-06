import React, { useEffect, useState } from "react";
import { Google_Api_Key } from "../utils/constants";
import SearchReults from "./SearchReults";

const SearchVideos = (queryname) => {
  const [searchReults, setSearchResults] = useState([]);
  //   console.log(queryname.data);
  const query = JSON.stringify(queryname.data);

  console.log(query);
  const Youtube_Search_API =
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" +
    query +
    "&key=" +
    Google_Api_Key;

  const getSearchVideos = async () => {
    console.log("api", Youtube_Search_API);
    const getData = await fetch(Youtube_Search_API);
    const searchedData = await getData.json();
    setSearchResults(searchedData?.items);
    console.log(searchedData?.items);
  };
  useEffect(() => {
    getSearchVideos();
  }, [query]);
  return <div>{searchReults && <SearchReults data={searchReults} />}</div>;
};

export default SearchVideos;
