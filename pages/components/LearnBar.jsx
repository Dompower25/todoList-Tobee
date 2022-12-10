import HeaderTodo from "./HeaderTodo";
import InputTodoText from "./InputTodoText";
import Todo from "./Todo";
import Footer from "./Footer";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useFilterTodo } from "../hooks/useFilterTodo";
import { todos } from "../api/todoList";

const LearnBar = () => {
  const [todoListAll, setTodoListAll] = useState(todos || []);
  const [activeFilter, setActiveFilter] = useState(null);

  const filteredTodo = (array, param) => {
    if (param === true) {
      return array.filter((todo) => todo.completed);
    }
    if (param === false) {
      return array.filter((todo) => !todo.completed);
    }
    return array;
  };

  const todoList = useMemo(() => {
    return filteredTodo(todoListAll, activeFilter);
  }, [todoListAll, activeFilter]);

  const all = () => {
    setActiveFilter(null);
  };

  const active = () => {
    setActiveFilter(false);
  };
  const completed = () => {
    setActiveFilter(true);
  };

  const onDelete = (id) => {
    setTodoListAll(todoListAll.filter((todo) => todo.id !== id));
  };

  const onInsert = (newObj) => {
    setTodoListAll([newObj, ...todoListAll]);
  };

  return (
    <div className="learn_bar">
      <HeaderTodo />
      <InputTodoText onInsert={onInsert} />
      {todoList.map(({ id, text, completed }) => (
        <Todo
          text={text}
          key={id}
          id={id}
          completed={completed}
          onDelete={onDelete}
        />
      ))}
      {todoListAll.length ? (
        <Footer
          all={all}
          active={active}
          complete={completed}
          lenthItems={todoListAll.length}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default LearnBar;
