export const Google_Api_Key = "AIzaSyADNt0LxouYLJNhCulcWTp3TpH6bf-8DwE";

const Youtube_Video_Url =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  Google_Api_Key;

export const Youtube_Search_Query_Api =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export default Youtube_Video_Url;
