import React from "react";
async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}
export default async function UserPage({ params }) {
  const user = await getUser(params.id);
  return (
    <div className="bg-blue-300 p-10 rounded-md">
      <img className="rounded-md m-auto" src={user.avatar} alt="" />
      <h3 className="bg-slate-700 text-white font-serif ">
        {user.first_name} {user.last_name}
      </h3>
      <h4 className="bg-zinc-400 text-stone-500 font-semibold ">
        {user.email}
      </h4>
    </div>
  );
}
