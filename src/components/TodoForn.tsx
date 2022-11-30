import React, { useRef } from "react";
import { TodoFormProps } from "../interfaces";
const TodoForm: React.FC<TodoFormProps> = (props) => {
  const ref = useRef<HTMLInputElement>(null);
  const keyPresHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      props.onAdd(ref.current!.value);
      ref.current!.value = "";
    }
  };
  return (
    <div className="input-field ">
      <input
        className="input"
        onKeyPress={keyPresHandler}
        ref={ref}
        type="text"
        id="title"
        placeholder="Enter the title"
      />
      <label htmlFor="title" className="active my2 pink-text ">
        Enter the title
      </label>
    </div>
  );
};
export default TodoForm;
