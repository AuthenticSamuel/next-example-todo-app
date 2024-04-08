import { useState } from "react";

type TodoAddProps = {
  add: UpdateTodo;
};

export const TodoAdd = ({ add }: TodoAddProps) => {
  const [content, setContent] = useState("");

  const handleAdd = () => {
    if (!content) return;
    add(content);
    setContent("");
  };

  return (
    <div className="flex w-full justify-center">
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={(e) => {
          e.key === "Enter" && handleAdd();
        }}
        className="grow rounded-l-md border border-indigo-200 px-3 py-2 transition-colors hover:border-indigo-300"
        placeholder="Add a new todo..."
      />
      <button
        onClick={handleAdd}
        disabled={!content}
        className="w-32 rounded-r-md bg-indigo-200 px-5 py-2 transition-colors duration-75 hover:bg-indigo-300 disabled:cursor-not-allowed disabled:bg-indigo-200"
      >
        Add
      </button>
    </div>
  );
};
