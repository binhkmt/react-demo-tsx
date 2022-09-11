import { ITodo } from "../../App";
import { TodoItem } from "./todo-item";
import "./index.css";

export function TodoList(props: { todos: ITodo[] }) {
  return (
    <>
      <ul className="todo-list">
        {props.todos &&
          props.todos.map((t, index) => (
            <li key={t.id}>
              {t.id} -<TodoItem todo={t}></TodoItem>
            </li>
          ))}
      </ul>
    </>
  );
}
