import Link from "next/link";
import "../styles/navbar.css";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link className="logo" href="/">
            Portfolio
          </Link>
        </li>
      </ul>
      <ul>
        <li className="active">
          <Link href="#hero">Home</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
