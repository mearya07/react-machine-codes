import { useRef, useState } from "react";
import "./styles.css";
// Create a to-do list component where users can add, remove,
//  and mark items as complete.

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const newTodoText = useRef("");

  const handleClickAddTodo = () => {
    const todoValue = newTodoText.current?.value.trim();
    if (!todoValue) return;
    setTodoList((todo) => [...todo, { text: todoValue, isCompleted: false }]);
    newTodoText.current.value = "";
  };

  const handleToggleComplete = (idx) => {
    // const item = todoList.find((_, index) => index === idx);
    // if (item) {
    //   item.isCompleted = !item.isCompleted;
    // }

    setTodoList((todoList) =>
      todoList.map((todo, index) =>
        index === idx
          ? {
              ...todo,
              isCompleted: !todo.isCompleted,
            }
          : todo
      )
    );
  };
  console.log(todoList);
  const handleDeleteTodo = (idx) => {
    setTodoList((todoList) => todoList.filter((_, index) => index !== idx));
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <div
        style={{
          display: "grid",
          width: "600px",
          margin: "0px auto",
        }}
      >
        <textarea
          style={{
            height: "100px",
            width: "100%",
            textAlign: "center",
            paddingTop: "35px",
            boxSizing: "border-box",
            wordBreak: "break-word",
            overflowWrap: "break-word",
            resize: "none",
            fontSize: "16px",
          }}
          placeholder="Add a to-do"
          ref={newTodoText}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "10px",
          }}
        >
          <button
            style={{
              width: "100px",
              height: "40px",
              cursor: "pointer",
            }}
            onClick={handleClickAddTodo}
          >
            Add
          </button>
        </div>
      </div>
      <ul>
        {todoList.map((todo, index) => {
          return (
            <li
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                backgroundColor: "#f9f9f9",
                borderRadius: "5px",
                marginBottom: "10px",
                textDecoration: todo.isCompleted ? "line-through" : "none",
                color: todo.completed ? "gray" : "black",
              }}
            >
              <div>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(index)}
                />
                <span style={{ marginLeft: "10px" }}>{todo.text}</span>
              </div>
              <button
                onClick={() => handleDeleteTodo(index)}
                style={{
                  backgroundColor: "#ff4d4d",
                  border: "none",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
