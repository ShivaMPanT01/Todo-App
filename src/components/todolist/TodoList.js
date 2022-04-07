import classes from "./TodoList.module.css";

const TodoList = ({ text, onComplete, onDelete, completed, id, onEdit }) => {
  return (
    <div className={classes.list}>
      <div className={classes.data}>
        <input
          type="checkbox"
          onClick={() => onComplete(id)}
          checked={completed}
        />
        <p className={completed ? classes.completed : ""}>{text}</p>
      </div>
      <div className={classes.action}>
        <button
          className={classes.button}
          onClick={() => {
            onDelete(id);
          }}
        >
          ❌
        </button>
        <button className={classes.button} onClick={() => onEdit(id)}>
          📋
        </button>
      </div>
    </div>
  );
};

export default TodoList;
