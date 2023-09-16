"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
function NewPage({ params }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch(`/api/task/${params.id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, [params.id]);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (params.id) {
      //updating
      const res = await fetch(`/api/task/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: { "Content-Type": "application/json" },
      });
    } else {
      const res = await fetch("/api/task", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data);
    }
    router.refresh();
    router.push("/");
  };
  return (
    <div className="h-screen  flex  justify-center items-center">
      <form className="bg-slate-700 p-10 sm:w-1/4 w-full" onSubmit={onSubmit}>
        <label htmlFor="title" className="text-white font-bold text-sm">
          Title task
        </label>
        <input
          id="title"
          type="text"
          className="border border-gray-400 p-2 mb-4 w-full rounded-s-md text-black"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="description" className="text-white font-bold text-sm">
          Describe to description
        </label>
        <textarea
          rows="3"
          className=" border border-gray-400 p-2 mb-4 w-full rounded-lg text-black"
          placeholder="Description task"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        >
          write to text
        </textarea>
        <button className="bg-blue-500 p-2 mb-4 justify-center rounded-s-sm">
          Create task
        </button>
        {params.id && (
          <button
            className="bg-red-600 rounded-md justify-end p-2  font-extrabold"
            onClick={async () => {
              const res = await fetch(`/api/tasks/${params.id}`, {
                method: "DELETE",
              });
              const data = await res.json();
              router.push("/");
            }}
          >
            X
          </button>
        )}
      </form>
    </div>
  );
}

export default NewPage;
