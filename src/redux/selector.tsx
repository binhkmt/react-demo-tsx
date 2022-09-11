import { IAppState } from "./reducers";

export const getTodoListSelector = (state: IAppState, searchText: string) => {
  if (!searchText) return state.todoList;

  var a = state.todoList.filter((x) => x.name.includes(searchText));

  return a;
};
