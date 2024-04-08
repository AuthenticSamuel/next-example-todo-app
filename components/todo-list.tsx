"use client";

import { useTodo } from "@/hooks/counter";
import { TodoAdd } from "@/components/todo-add";
import { TodoListItem } from "@/components/todo-list-item";

type TodoListProps = {};

export const TodoList = ({}: TodoListProps) => {
  const { todos, add, remove, finish, restart } = useTodo();

  return (
    <div className="flex w-full max-w-2xl flex-col items-center gap-8">
      <TodoAdd add={add} />
      <ul className="flex w-full flex-col gap-2">
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            remove={remove}
            finish={finish}
            restart={restart}
          />
        ))}
      </ul>
    </div>
  );
};
