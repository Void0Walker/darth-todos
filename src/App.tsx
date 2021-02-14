import React, { useState } from "react";
import "./App.scss";
import List from "./components/List";
import AddListEntry from "./components/AddListEntry";
import { nanoid } from "nanoid";
// for code reusability
import { Todo } from "./models/Todo";
import gif from "./tenor.gif";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleTodoSubmission = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: nanoid(), text, isChecked: false },
    ]);
  };

  const handleCompleteTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id;

    setTodos((prevTodos) => {
      const updatedtodos = prevTodos.map((todo) => {
        if (todo.id === id) {
          todo.isChecked = event.target.checked;
        }
        return todo;
      });
      return updatedtodos;
    });
  };

  return (
    <div className="appRoot">
      <header className="appTitle">
        <div style={{ textAlign: "center", display: "flex" }}>
          <img
            src={gif}
            alt="vader"
            style={{
              maxHeight: 150,
              borderRadius: "10px",
              border: "3px solid red",
              margin: "24px",
            }}
          />
        </div>
        <div>
          <h3>DARTH TODOS</h3>
          <h5>TypeScript, sass</h5>
        </div>
      </header>
      <main>
        <AddListEntry handleTodoSubmission={handleTodoSubmission} />
        <List todos={todos} handleCompleteTodo={handleCompleteTodo} />
      </main>
    </div>
  );
};

export default App;
