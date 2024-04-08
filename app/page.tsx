import { TodoList } from "@/components/todo-list";

type HomeProps = {};

const Home = ({}: HomeProps) => {
  return (
    <main className="flex w-full max-w-6xl flex-col items-center gap-16 pt-16">
      <h1 className="text-3xl font-semibold">Todos</h1>
      <TodoList />
    </main>
  );
};

export default Home;
