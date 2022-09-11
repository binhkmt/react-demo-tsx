import { RootState } from "../../redux/store";

export const getNotesSelector = (state: RootState, searchText: string) => {
  if (!searchText) {
    return state.myNote.notes;
  }

  var a = state.myNote.notes.filter((x) => x.title.includes(searchText));

  return a;
};

export const getNoteSelector = (state: RootState, noteId?: string) => {
  if (!noteId) {
    return null;
  }

  var note = state.myNote.notes.find((x) => x.id === noteId);

  return note;
};
