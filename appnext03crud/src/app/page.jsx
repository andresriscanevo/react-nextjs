"use cliente";
import TaskCard from "@/components/taskCard";
import React from "react";
async function loadTask() {
  const res = await fetch("http://localhost:3000/api/task");
  const data = await res.json();
  return data;
}
async function HomePage() {
  const tasks = await loadTask();
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 mt-10">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
