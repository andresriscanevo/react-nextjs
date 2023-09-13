import React from "react";
import Link from "next/link";
function NavBar() {
  return (
    <nav className="bg-slate-400 mb-4 flex  items-center justify-between  px-28">
      <Link href="/">home</Link>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
