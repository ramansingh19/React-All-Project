import React, { useState } from 'react'
import { useTodo } from './TodoContext'

function TodoItem({ todo }) {
    const [todoMsg , setTodoMsg] = useState(todo.todo)
    const [isTodoEditable , setIsTodoEditable] = useState(false)
    const {deleteTodo , updateTodo , toggleTodo} = useTodo()

    //this is use for edit in our todo list 
    const editTodo = () => {
        updateTodo(todo.id , {...todo , todo : todoMsg})
        setIsTodoEditable(false)
    }

    //this is use to toogle the todo
    const toggleCompleted = () => {
        toggleTodo(todo.id)
    }

    return (
        <div
  className={`flex items-start sm:items-center
    border border-black/10
    rounded-lg
    px-2 sm:px-3
    py-2
    gap-x-2 sm:gap-x-3
    gap-y-2
    shadow-sm shadow-white/50
    duration-300
    text-black
    ${
      todo.completed ? "bg-[#c0e79e]" : "bg-[#c6abdb]"
    }`}
>
  <input
    type="checkbox"
    className="cursor-pointer mt-1 sm:mt-0"
    checked={todo.completed}
    onChange={toggleCompleted}
  />

  <input
    type="text"
    className={`border outline-none w-full
      bg-transparent
      rounded-lg
      text-sm sm:text-base
      ${
        isTodoEditable ? "border-black/10 px-2" : "border-transparent"
      }
      ${todo.completed ? "line-through" : ""}
    `}
    value={todoMsg}
    onChange={(e) => setTodoMsg(e.target.value)}
    readOnly={!isTodoEditable}
  />

  {/* Edit / Save Button */}
  <button
    className="
      inline-flex
      w-7 h-7 sm:w-8 sm:h-8
      rounded-lg
      text-xs sm:text-sm
      border border-black/10
      justify-center items-center
      bg-gray-50 hover:bg-gray-100
      shrink-0
      disabled:opacity-50
    "
    onClick={() => {
      if (todo.completed) return;

      if (isTodoEditable) {
        editTodo();
      } else setIsTodoEditable((prev) => !prev);
    }}
    disabled={todo.completed}
  >
    {isTodoEditable ? "📁" : "✏️"}
  </button>

  {/* Delete Button */}
  <button
    className="
      inline-flex
      w-7 h-7 sm:w-8 sm:h-8
      rounded-lg
      text-xs sm:text-sm
      border border-black/10
      justify-center items-center
      bg-gray-50 hover:bg-gray-100
      shrink-0
    "
    onClick={() => deleteTodo(todo.id)}
  >
    ❌
  </button>
</div>

    );
}

export default TodoItem;
