type TodoListItem = {
  todo: Todo;
  remove: UpdateTodo;
  finish: UpdateTodo;
  restart: UpdateTodo;
};

export const TodoListItem = ({
  todo,
  finish,
  restart,
  remove,
}: TodoListItem) => {
  return (
    <li className="flex w-full overflow-hidden rounded-md border border-indigo-200 bg-white">
      <p
        className={`grow p-4 text-justify transition-all ${todo.done ? "text-neutral-500 line-through" : ""}`}
      >
        {todo.content}
      </p>
      <div className="flex flex-col">
        {todo.done ? (
          <button
            onClick={() => restart(todo.id)}
            className="grow bg-indigo-200 px-5 py-2 transition-colors duration-75 hover:bg-indigo-300"
          >
            Restart
          </button>
        ) : (
          <button
            onClick={() => finish(todo.id)}
            className="grow bg-green-200 px-5 py-2 transition-colors duration-75 hover:bg-green-300"
          >
            Done
          </button>
        )}
        <button
          onClick={() => remove(todo.id)}
          className="w-32 bg-red-300 px-5 py-2 transition-colors duration-75 hover:bg-red-400"
        >
          Remove
        </button>
      </div>
    </li>
  );
};
