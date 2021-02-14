import React from "react";
import styles from "./List.module.scss";
import { Todo } from "../models/Todo";

interface Props {
  todos: Todo[];
  handleCompleteTodo: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const List: React.FC<Props> = ({ todos, handleCompleteTodo }) => {
  return (
    <div className={styles.listRoot}>
      <h3 className={styles.listTitle}>Darth list</h3>
      <ul className={styles.lisItems}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              style={{ margin: "5px" }}
              type="checkbox"
              id={todo.id}
              checked={todo.isChecked}
              onChange={handleCompleteTodo}
            />
            <span className={todo.isChecked ? styles.lisItemsCrossedOut : ""}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
