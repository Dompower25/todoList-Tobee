import Link from "next/link";
import { todos } from "../api/todoList";

const Footer = ({ lenthItems, all, active, complete }) => {
  return (
    <div className="footer">
      <span className="textTodoItem">{lenthItems} item left</span>
      <div className="bntBox">
        <button onClick={all} className="allBtn btn">
          All
        </button>

        <button onClick={active} className="activeBnt btn">
          Active
        </button>

        <button onClick={complete} className="completeBtn btn">
          Complete
        </button>
      </div>
    </div>
  );
};

export default Footer;
