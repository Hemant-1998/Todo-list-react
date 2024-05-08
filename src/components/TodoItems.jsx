import TodoItem from "./TodoItem";

export default function TodoItems({ todoItemsData, todoList, setTodoList }) {
  // console.log("todos", todoItemsData);
  const todoItems = todoItemsData.map((item) => {
    return (
      <TodoItem
        date={item.date}
        name={item.name}
        key={item.id}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    );
  });

  return <>{todoItems}</>;
}
