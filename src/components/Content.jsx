import React, { useState } from "react";

const Content = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleEdit = () => {};
  const handleDelete = () => {};
  const handleAdd = () => {
    console.log(todo);
    setTodos([...todos, { todo, isCompleted: false }]);
    setTodo("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // alert("The browser will not reload when the alert box is closed.");
  };
  console.log(todos);
  return (
    <>
      <div className="container mx-auto my-5 p-5 bg-violet-200 rounded-xl w-[80%]">
        <form onSubmit={handleSubmit}>
        <div className="">
          <h2 className="text-lg font-bold mb-2">Add Todo</h2>
          <input
            type="text"
            className="w-1/2 rounded-lg p-1"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            className="bg-violet-500 px-3 rounded-lg py-1 text-white mx-6 font-bold"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        </form>
        <h2 className="text-xl font-bold">Your Todos</h2>
        <div className="todos">
          {
          todos.map((item, index) => {
              return (
                <div className="todo flex w-1/3 justify-between my-2" key={index}>
                  <input type="checkbox" name="" id="" />
                <div className={item.isCompleted ? "line-through" : "" }>{item.todo}</div>
                <div className="buttons">
                  <button
                    onClick={handleEdit}
                    className="bg-violet-500 px-3 rounded-lg py-1 text-white ml-4 font-bold"
                  >
                    Edit
                  </button>
                  <button
                    onClick={handleDelete}
                    className="bg-violet-500 px-3 rounded-lg py-1 text-white ml-2 font-bold"
                  >
                    Delete
                  </button>
                </div>
              </div>
              );
          })
          }
        </div>
      </div>
    </>
  );
};

export default Content;
