import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
  let [todoList, setTodoList] = useState([]);

  // console.log(`${todoList}`);
  // console.log(typeof todoList);

  return (
    <>
      <AppName />
      <AddTodo setTodoList={setTodoList} todoList={todoList} />
      {todoList.length !== 0 ? (
        <TodoItems
          todoItemsData={todoList}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ) : null}
      {/*  */}
    </>
  );
}

export default App;
