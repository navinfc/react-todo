import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Content = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleEdit = () => {

  };

  const handleDelete = (e) => {
    let id = e;
    console.log(`The id is ${id}`);
    let newTodos = todos.filter(item => {
      return item.id !== id;
    });
    setTodos(newTodos);
    console.log(newTodos);
  };
  const handleAdd = () => {
    // console.log(todo);
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert("The browser will not reload when the alert box is closed.");
  };

  const handleCheckBox = (event) => { 
    let id = event.target.name; // Extract the ID from the event target name
    // console.log(id);
    let index = todos.findIndex(item => {
      return item.id === id;
    });
    console.log(index);
    let newTodos = [...todos];
    newTodos[index].isCompleted  = !newTodos[index].isCompleted;
    setTodos(newTodos);
    // console.log(newTodos);
  };

  // console.log(todos);
  return (
    <>
      <div className="container mx-auto my-5 p-5 bg-violet-300 rounded-xl w-[80%]">
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
          {todos.length === 0 && <div className="font-bold text-2xl my-2">👉No Todos To Display👈</div>}
          {
          todos.map((item) => {
              return (
                <div className="todo flex w-1/3 justify-between my-3" key={item.id}>
                  <div className="flex gap-5 items-center">
                  <input onChange={handleCheckBox} type="checkbox" name={item.id} id="" value={item.isCompleted}/>
                <div className={item.isCompleted ? "line-through" : "" }>{item.todo}</div>
                  </div>
                <div className="buttons">
                  <button
                    onClick={handleEdit}
                    className="bg-violet-500 px-3 rounded-lg py-1 text-white ml-4 font-bold"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
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
