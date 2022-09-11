import { createSlice } from "@reduxjs/toolkit";
import { Note } from "../../shared/models/Note";

export interface NoteState {
  notes: Note[];
}

const initState: NoteState = {
  notes: [
    { id: "1", title: "title 1", content: "abc" },
    { id: "2", title: "title 2", content: "abc" },
    { id: "3", title: "title 3", content: "abc" },
  ],
};

const noteSlice = createSlice({
  name: "myNote",
  initialState: initState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
      console.log(`notes in slice`, state.notes);
    },
  },
});

// export const { addNote } = noteSlice.actions;

export default noteSlice;
