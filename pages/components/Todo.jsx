import { Checkbox } from "@mui/material";
import Circle from "./icons/Circle";
import CircleCkecked from "./icons/CircleCkecked";
import { useState } from "react";
import { NoEncryption } from "@mui/icons-material";

const Todo = ({ text, completed }) => {
  const [compl, setCompl] = useState(completed);

  const checked = () => {
    compl ? setCompl(false) : setCompl(true);
  };
  return (
    <div className="list">
      <button className="checkBtn" onClick={checked}>
        {compl ? <CircleCkecked /> : <Circle />}
      </button>
      <div className="textTodo"> {text} </div>
      <button className="deleteBtn" />
    </div>
  );
};

export default Todo;
