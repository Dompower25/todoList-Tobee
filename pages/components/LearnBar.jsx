import HeaderTodo from "./HeaderTodo";
import InputTodoText from "./InputTodoText";
import TodoList from "./TodoList";
import Footer from "./Footer";

const LearnBar = () => {
  return (
    <div className="learn-bar">
      <HeaderTodo />
      <InputTodoText/>
      <TodoList/>
      <Footer/>
    </div>
  );
};

export default LearnBar;
