import HeaderTodo from "./HeaderTodo";
import InputTodoText from "./InputTodoText";
import Todo from "./Todo";
import Footer from "./Footer";
import { useState } from "react";
import { useFilterTodo } from "../hooks/useFilterTodo";
import { todos } from "../api/todoList";

const LearnBar = () => {
  const [todoListAll, setTodoListAll] = useState(todos || []);

  const complet = () => {
    const filteredCompletedTodos = useFilterTodo(todos || [], true);
    setTodoListAll(filteredCompletedTodos);
  };

  const active = () => {
    const filteredActiveTodos = useFilterTodo(todos || [], false);
    setTodoListAll(filteredActiveTodos);
  };

  useEffect(() => {
    setTodoListAll();
  }, [input]);
  return (
    <div className="learn_bar">
      <HeaderTodo />
      <InputTodoText />
      {todoListAll.map(({ id, text, completed }) => (
        <Todo text={text} key={id} id={id} completed={completed} />
      ))}
      {todoListAll.length ? (
        <Footer
          complet={complet}
          active={active}
          lenthItems={todoListAll.length}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default LearnBar;
