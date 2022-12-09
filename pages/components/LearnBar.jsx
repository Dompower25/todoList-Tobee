import HeaderTodo from "./HeaderTodo";
import InputTodoText from "./InputTodoText";
import Todo from "./Todo";
import Footer from "./Footer";
import { useState } from "react";

const LearnBar = () => {
  const [todoListAll, setTodoListAll] = useState([
    {
      id: 1,
      text: "Hello World",
      completed: true,
    },
    {
      id: 2,
      text: "This is a todo",
      completed: false,
    },
    {
      id: 3,
      text: "Can I see this",
      completed: false,
    },
  ]);

  const [todoListActive, setTodoListActive] = useState([]);
  const [todoListComplete, settodoListComplete] = useState([]);

  return (
    <div className="learn_bar">
      <HeaderTodo />
      <InputTodoText />
      {todoListAll.map(({ id, text, completed }) => (
        <Todo text={text} key={id} id={id} completed={completed} />
      ))}
      {todoListAll.length ? <Footer /> : ""}
    </div>
  );
};

export default LearnBar;
