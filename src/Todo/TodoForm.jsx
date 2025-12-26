import React, { useState } from "react";
import { useTodo } from "./TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");

  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex flex-col sm:flex-row gap-2">
      <input
        type="text"
        placeholder="Write todo..."
        className="
      w-full
      border border-black/10
      rounded-lg sm:rounded-r-none
      px-3
      py-2
      text-base sm:text-lg
      outline-none
      duration-150
      bg-white/20
      text-white
      placeholder:text-white/70
    "
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button
        type="submit"
        className="
      w-full sm:w-auto
      rounded-lg sm:rounded-l-none
      px-5
      py-2
      bg-green-600
      text-white
      font-medium
      hover:bg-green-700
      transition
      shrink-0
    "
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
