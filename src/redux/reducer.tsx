import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../App";

export interface IAppState {
  filters: any;
  todoList: ITodo[];
}

const initState: IAppState = {
  filters: {},
  todoList: [{ id: "kjkj", name: "init ne" }],
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
