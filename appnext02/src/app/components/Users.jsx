"use client";
import Link from "next/link";
import React from "react";
function Users({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <Link href={`users/${user.id}`}>
          <li className="bg-slate-400 mb-2 p-4 rounded-md text-black flex justify-between">
            <div>
              <h5 className="font-bold">
                {user.id} {user.first_name} {user.last_name}
              </h5>
              <p className="text-slate-900">user.email:{user.email}</p>

              <img
                src={user.avatar}
                className="rounded-full w-20 "
                alt={user.first_name}
              ></img>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default Users;
