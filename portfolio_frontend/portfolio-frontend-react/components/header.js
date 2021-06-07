import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        setCurrent("home");
        break;
      case "/about":
        setCurrent("about");
        break;
      case "/experience":
        setCurrent("experience");
        break;
      case "/contact":
        setCurrent("contact");
        break;
      default:
        break;
    }
  });

  return (
    <header id="header">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className={current == "home" ? "current" : ""}>
            <Link href="/" prefetch={false}>
              <a className="smoothscroll">Home</a>
            </Link>
          </li>
          <li className={current == "about" ? "current" : ""}>
            <Link href="/about" prefetch={false}>
              <a className="smoothscroll">About</a>
            </Link>
          </li>
          <li className={current == "experience" ? "current" : ""}>
            <Link href="/experience" prefetch={false}>
              <a className="smoothscroll">Experience</a>
            </Link>
          </li>
          <li className={current == "contact" ? "current" : ""}>
            <Link href="/contact" prefetch={false}>
              <a className="smoothscroll">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
