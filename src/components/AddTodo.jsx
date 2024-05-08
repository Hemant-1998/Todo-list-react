import { useState } from "react";
import DatePicker from "./DatePicker";
import TodoInput from "./TodoInput";

function AddTodo({ setTodoList, todoList }) {
  let [item, setItem] = useState({ name: "", date: "" });

  function handleButtonClick(event) {
    // console.log(`button click event`, event);
    // console.log(`items value`, item);
    let newTodoList = [...todoList, item];
    console.log(newTodoList);
    setTodoList(newTodoList);
  }

  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-4">
          <TodoInput setTodoName={setItem} currentItem={item} />
        </div>
        <div className="col-4">
          <DatePicker setTodoDate={setItem} currentItem={item} />
        </div>
        <div className="col-4">
          <br />
          <button
            onClick={handleButtonClick}
            type="button"
            className="btn btn-success my-button"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
