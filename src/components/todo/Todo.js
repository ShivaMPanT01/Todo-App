import { useState } from "react";

import classes from "./Todo.module.css";
import icon from "../../images/todo.png";
import TodoForm from "../todoform/TodoForm";
import TodoList from "../todolist/TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [editId, setEditId] = useState(null);

  const addTodoHandler = (todo) => {
    if (editId) {
      setTodos((prevTodo) => {
        return prevTodo.map((todo) => {
          if (todo.id === editId) {
            todo.text = inputText;
          }
          return todo;
        });
      });

      setEditId(null);
    } else {
      setTodos((prevTodo) => {
        return [...prevTodo, todo];
      });
    }
  };

  const deleteTodoHandler = (id) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((item) => item.id !== id);
    });
  };

  const completeTodoHandler = (id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updateTodos);
  };

  const editTodoHandler = (id) => {
    const editTodo = todos.find((todo) => todo.id === id);

    setInputText(editTodo.text);

    setEditId(id);
  };

  return (
    <>
      <figure className={classes.main}>
        <img src={icon} alt="This is a todo icon" />
        <figcaption>Add Your Todos Here!</figcaption>
      </figure>
      <TodoForm
        onAdd={addTodoHandler}
        setInputText={setInputText}
        inputText={inputText}
      />
      <section className={classes["list-data"]}>
        <ul className={classes.lists}>
          {todos.length > 0 ? (
            todos.map((todo) => {
              return (
                <TodoList
                  key={todo.id}
                  id={todo.id}
                  text={todo.text}
                  completed={todo.completed}
                  onEdit={editTodoHandler}
                  onComplete={completeTodoHandler}
                  onDelete={deleteTodoHandler}
                />
              );
            })
          ) : (
            <p>There is nothing to show here. Add Something TO DO 🤣</p>
          )}
        </ul>
      </section>
    </>
  );
};

export default Todo;
