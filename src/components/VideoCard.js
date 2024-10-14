import React from "react";
const VideoCard = ({ info }) => {
  console.log("info", info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
<<<<<<< HEAD
        <li className="text-gray-500">{channelTitle}</li>
        <li className="text-gray-500">{statistics?.viewCount} views</li>
=======
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
>>>>>>> 39b982be48fdac07ecd83bdcb9f203822750f431
      </ul>
    </div>
  );
};

export default VideoCard;

// import React from "react";

// const VideoCard = ({ info }) => {
//   const { snippet, statistics } = info;
//   const { channelTitle, title, thumbnails } = snippet;

//   return (
//     <div className="relative p-2 w-72 h-48 shadow-lg rounded-lg overflow-visible group transition-all duration-500">
//       {/* Thumbnail always visible */}
//       <img
//         className="rounded-lg w-full h-full object-cover"
//         alt="thumbnail"
//         src={thumbnails.medium.url}
//       />

//       {/* Hover effect container (expands from center) */}
//       <div className="absolute p-4 top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-100 group-hover:w-[350px] group-hover:h-[300px] group-hover:translate-z-[50%]  transition-all duration-3000 delay-200 ease-in-out rounded-lg shadow-2xl z-10 ">
//         {/* Poster repeated inside the expanded hover card */}
//         <img
//           className="rounded-lg w-full h-40 object-cover"
//           alt="thumbnail"
//           src={thumbnails.medium.url}
//         />
//         <ul className="mt-2">
//           <li className="font-bold py-2">{title}</li>
//           <li className="text-gray-500">{channelTitle}</li>
//           <li className="text-gray-500">{statistics?.viewCount} views</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default VideoCard;
