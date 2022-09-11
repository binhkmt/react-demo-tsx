import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./reducers";

// //tổng hợp tất cả reducer
// const reducer = combineReducers({
//   note: noteSlice.reducer, //phải chính xác "name" của slice "notes"
// });

const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof reducers>; //trả về type của reducers

export default store;
