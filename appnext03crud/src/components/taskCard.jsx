"use client";
import { useRouter } from "next/navigation";

function TaskCard({ task }) {
  const router = useRouter();
  return (
    <div
      className="bg-slate-900 p-3 hover:bg-slate--800 hover:cursor-pointer"
      onClick={() => {
        router.push(`tasks/edit/${task.id}`);
      }}
    >
      <h1 className="bg-slate-600 rounded-md mb-2 p-3">{task.title}</h1>
      <h2 className=" text-center">{task.description}</h2>
      <p>{new Date(task.createdAt).toLocaleDateString()}</p>
      <div className="container bg-slate-700 mb-2 p-2 flex justify-between">
        <button className="bg-green-300 rounded-md justify-start px-4 text-black font-extrabold">
          Edit
        </button>
        
      </div>
    </div>
  );
}
export default TaskCard;
