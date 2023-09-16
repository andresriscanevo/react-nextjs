import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <nav className="bg-slate-800 ">
      <div className="container mx-auto flex justify-between items-center">
        <h3 className="font-bold text-white">Next js Crud with prisma</h3>
        <ul className="flex gap-x-2 font-bold text-lg p-4">
          <li className="bg-slate-500 rounded-md">
            <Link href="/">Home</Link>
          </li>
          <li className="bg-slate-500 rounded-md">
            <Link href="/new">New</Link>
          </li>
          <li className="bg-slate-500 rounded-md">
            <Link href="/about">New</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
