import Link from "next/link";
import { todos } from "../api/todoList";

const Footer = ({ lenthItems, complet, active }) => {
  return (
    <div className="footer">
      <span className="textTodoItem">{lenthItems} item left</span>
      <div className="bntBox">
        <button className="allBtn btn">All</button>

        <button onClick={active} className="activeBnt btn">
          Active
        </button>

        <button onClick={complet} className="completeBtn btn">
          Complete
        </button>
      </div>
    </div>
  );
};

export default Footer;
