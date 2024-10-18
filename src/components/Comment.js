const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-md bg-gray-400 p-2 rounded-lg m-2">
      <img
        className="h-8"
        alt="user"
        src="https://freesvg.org/img/abstract-user-flat-3.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
