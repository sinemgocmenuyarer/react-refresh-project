import { useState } from "react";

export const NewTask = ({ onAdd, onDelete }) => {
  const [enteredTask, setEnter] = useState("");

  function handleChange(event) {
    setEnter(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      alert("Please enter a task");
      return;
    }
    onAdd(enteredTask);
    setEnter("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        onChange={(e) => handleChange(e)}
        value={enteredTask}
        type="text"
        className="w-64 px-2 py-1 round-sm bg-stone-200"
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
};
