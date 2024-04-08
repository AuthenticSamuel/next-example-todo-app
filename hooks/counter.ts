"use client";

import { useState } from "react";

export const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const add = (content: string) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: Date.now().toString(),
          content,
          done: false,
        },
      ];
    });
  };

  const remove = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const clear = () => {
    setTodos([]);
  };

  const finish = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id !== id) return todo;

        return {
          ...todo,
          done: true,
        };
      });
    });
  };

  const restart = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id !== id) return todo;

        return {
          ...todo,
          done: false,
        };
      });
    });
  };

  const toggle = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id !== id) return todo;

        return {
          ...todo,
          done: !todo.done,
        };
      });
    });
  };

  return {
    todos,
    add,
    remove,
    clear,
    finish,
    restart,
    toggle,
  };
};
