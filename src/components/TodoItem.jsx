function TodoItem({ name, date ,todoList,
  setTodoList}) {
    const handleClick=(data)=>{
      //mujhe woh id filter krni h
      // console.log('todoList',todoList);
      // console.log('name',data);
      const newTodoList=todoList.filter((value)=>value.name!==data)
      // console.log('newTodoList',newTodoList)
      setTodoList(newTodoList)
      //phir mujhe setTodo me daalni
    }
  return (
    <div className="container item-container">
      <div className="row my-row">
        <div className="col-4">{name}</div>
        <div className="col-4">{date}</div>
        <div className="col-4">
          <button onClick={()=>handleClick(name)} type="button" className="btn btn-danger my-button">
            delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
