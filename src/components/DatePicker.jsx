function DatePicker({ setTodoDate, currentItem }) {
  function handleInputChange(event) {
    // console.log(event.target.value);
    // console.log(event);
    setTodoDate({ ...currentItem, date: event.target.value });
  }
  return (
    <>
      <label htmlFor="input-date" className="my-label">
        Enter Date
      </label>
      <input
        required
        onChange={handleInputChange}
        id="input-date"
        type="date"
      />
    </>
  );
}

export default DatePicker;
