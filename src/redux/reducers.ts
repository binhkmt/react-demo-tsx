import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../App";
import noteSlice from "../features/Note/note-slice";

export interface IAppState {
  filters: any;
  todoList: ITodo[];
}

const initState: IAppState = {
  filters: {},
  todoList: [
    { id: "1", name: "todo 1" },
    { id: "2", name: "todo 2" },
    { id: "3", name: "todo 3" },
  ],
};

// export const rootReducer = (
//   state = initState,
//   action: { type: string; payload: any }
// ) => {
//   console.log(`rootReducer called`, action.type);

//   switch (action.type) {
//     case "todoList/addTodo":
//       return {
//         ...state,
//         todoList: [...state.todoList, action.payload],
//       };

//     default:
//       return state;
//   }
// };

export const rootReducer = createSlice({
  name: "todoList",
  initialState: initState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
  },
});

export const reducers = combineReducers({
  rootReducer: rootReducer.reducer,
  myNote: noteSlice.reducer,
});
