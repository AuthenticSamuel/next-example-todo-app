type Todo = {
  id: string;
  content: string;
  done: boolean;
};

type UpdateTodo = (id: string) => void;
