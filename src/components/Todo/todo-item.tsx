import { ITodo } from "../../App";

export function TodoItem(props: { todo: ITodo }) {
  return (
    <>
      <div>
        {props.todo.name}
      </div>
    </>
  );
}
