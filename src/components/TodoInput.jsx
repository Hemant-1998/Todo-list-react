function TodoInput({ setTodoName, currentItem }) {
  function handleInputChange(event) {
    // console.log(event.target.value);
    // let newInput = event.target.value;
    setTodoName({ ...currentItem, name: event.target.value });
  }
  return (
    <>
      <label htmlFor="todo" className="my-label">
        Enter task's Name
      </label>
      <input
        required
        onChange={handleInputChange}
        id="todo"
        type="text"
        placeholder="Enter your todos."
      />
    </>
  );
}

export default TodoInput;
