import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { getRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat?.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      //   console.log("API Polling");
      dispatch(
        addMessage({
          name: getRandomName(),
          message: makeRandomMessage(20) + "🚀",
        })
      );
    }, 1500);
    return () => clearInterval(i);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="ml-2 p-2 border border-black h-[600px] bg-gray-500  rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full border border-black p-2 ml-2 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({ name: "Sandeep Singh", message: liveMessage }));
          setLiveMessage("");
        }}
      >
        <input
          className="w-96 px-2"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-200 rounded-lg hover:bg-green-800">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
