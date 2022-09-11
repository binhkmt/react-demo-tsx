import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getNoteSelector } from "../selector";

/**
 * Xem ghi chú chi tiết
 */
export function MyNoteDetailView() {
  const { noteId } = useParams();

  const note = useSelector((state: any) => {
    return getNoteSelector(state, noteId);
  });

  console.log(`note`, note);

  return (
    <>
      <h3>{note?.title}</h3>

      <div>{note?.content}</div>
    </>
  );
}
