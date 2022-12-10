import Circle from "./icons/Circle";
import CircleCkecked from "./icons/CircleCkecked";
import { useState } from "react";
import Close from "./icons/Close";

const Todo = ({ text, id, completed, onDelete }) => {
  const [compl, setCompl] = useState(completed);

  const checked = () => {
    compl ? setCompl(false) : setCompl(true);
  };
  const clickDelete = () => {
    onDelete(id);
  };

  let classBtn = "textTodo";
  if (compl) {
    classBtn += " anActive";
  }
  return (
    <div className="list">
      <button className="checkBtn" onClick={checked}>
        {compl ? <CircleCkecked /> : <Circle />}
      </button>
      <div className={classBtn}> {text} </div>

      <button onClick={clickDelete} className="deleteBtn">
        <Close />
      </button>
    </div>
  );
};

export default Todo;
