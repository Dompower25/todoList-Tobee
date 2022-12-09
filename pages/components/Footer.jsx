import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer">
      <span className="textTodoItem">2 item left</span>
      <div className="bntBox">
        <button className="allBtn btn">
          <Link href="/">All</Link>
        </button>

        <button className="activeBnt btn">
          <Link href="/Active">Active</Link>
        </button>

        <button className="completeBtn btn">
          <Link href="/Compoleted">Complete</Link>
        </button>
      </div>
    </div>
  );
};

export default Footer;
