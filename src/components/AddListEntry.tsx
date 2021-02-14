import React, { useRef } from "react";
import styles from "./AddListEntry.module.scss";

interface Props {
  handleTodoSubmission: (text: string) => void;
}

const AddListEntry: React.FC<Props> = ({ handleTodoSubmission }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    handleTodoSubmission(enteredText);
  };

  return (
    <form>
      <div className={styles.inputRoot}>
        <label htmlFor="todo-text" className={styles.inputLabel}>
          Addeth thy entry
        </label>
        <input
          type="text"
          id="todo-text-input"
          className={styles.inputBox}
          ref={textInputRef}
        ></input>
        <button
          type="submit"
          className={styles.submitButton}
          onClick={todoHandler}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddListEntry;
