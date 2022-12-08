import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <span>2 item left</span>
      <Link href="/">
        <button>All</button>
      </Link>
      <Link href="/Active">
        <button> Active</button>
      </Link>
      <Link href="/Compoleted">
        <button>Compoleted</button>
      </Link>
    </div>
  );
};

export default Footer;
