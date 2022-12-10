import { Checkbox } from "@mui/material";
import Circle from "./icons/Circle";
import CircleCkecked from "./icons/CircleCkecked";
import { useState } from "react";
import { NoEncryption } from "@mui/icons-material";
import Close from "./icons/Close";

const Todo = ({ text, completed }) => {
  const [compl, setCompl] = useState(completed);

  const checked = () => {
    compl ? setCompl(false) : setCompl(true);
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

      <button className="deleteBtn">
        <Close />
      </button>
    </div>
  );
};

export default Todo;
