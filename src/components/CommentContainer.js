import React from "react";
import Comment from "./Comment";
const commentsData = [
  { name: "user1", text: "lorem ipsum", replies: [] },
  {
    name: "user1",
    text: "lorem ipsum",
    replies: [],
  },
  {
    name: "user1",
    text: "lorem ipsum",
    replies: [{ name: "user1", text: "lorem ipsum", replies: [] }],
  },
  {
    name: "user1",
    text: "lorem ipsum",
    replies: [{ name: "user1", text: "lorem ipsum", replies: [] }],
  },
  {
    name: "user1",
    text: "lorem ipsum",
    replies: [
      {
        name: "user1",
        text: "lorem ipsum",
        replies: [
          {
            name: "user1",
            text: "lorem ipsum",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "user1",
    text: "lorem ipsum",
    replies: [
      {
        name: "user1",
        text: "lorem ipsum",
        replies: [
          { name: "user1", text: "lorem ipsum", replies: [] },
          {
            name: "user1",
            text: "lorem ipsum",
            replies: [],
          },
        ],
      },
    ],
  },
  { name: "user1", text: "lorem ipsum", replies: [] },
  { name: "user1", text: "lorem ipsum", replies: [] },
];
const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-zinc-800-400 ml-5">
        <CommentsList comments={comment?.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="p-2 m-5">
      <h1 className="font-bold text-2xl">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
