import classes from "./TodoForm.module.css";

const TodoForm = ({ onAdd, setInputText, inputText }) => {
  const inputChangeHandler = (e) => {
    const { value } = e.target;
    setInputText(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (inputText.trim() === "") {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      text: inputText,
      completed: false,
    };

    onAdd(newTodo);

    setInputText("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <input
          type="text"
          placeholder="Enter Text here!"
          value={inputText}
          name="text"
          onChange={inputChangeHandler}
          autoComplete="off"
        />
        <button className={classes.btn}>+</button>
      </div>
    </form>
  );
};

export default TodoForm;
