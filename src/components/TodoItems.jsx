import TodoItem from "./TodoItem";

export default function TodoItems({ todoList, setTodoList }) {
  // console.log("todos", todoItemsData);
  let todoItemsData = todoList;
  const todoItems = todoItemsData.map((item, i) => {
    return (
      <TodoItem
        date={item.date}
        name={item.name}
        key={i}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    );
  });

  return <>{todoItems}</>;
}
