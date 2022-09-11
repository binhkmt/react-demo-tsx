import { Route, Routes } from "react-router-dom";
import { MyNoteDetailView } from "./views/MyNoteDetailView";
import { MyNoteView } from "./views/MyNoteView";
import { NotFoundNoteView } from "./views/NotFoundNoteView";

export const NoteRouting = () => {
  return (
    <Routes>
      <Route path="" element={<MyNoteView />} />
      <Route path=":noteId" element={<MyNoteDetailView />} />
      <Route path="*" element={<NotFoundNoteView />} />
    </Routes>
  );
};
