function TodoItem({ name, date }) {
  return (
    <div className="container item-container">
      <div className="row my-row">
        <div className="col-4">{name}</div>
        <div className="col-4">{date}</div>
        <div className="col-4">
          <button type="button" className="btn btn-danger my-button">
            delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
