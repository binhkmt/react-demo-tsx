import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import noteSlice from "../note-slice";
import { getNotesSelector } from "../selector";

/**
 * Trang ghi chú của tôi
 */
export function MyNoteView() {
  const dispatch = useDispatch();

  const noteList = useSelector((state: any) => {
    return getNotesSelector(state, "");
  });
  // const noteList = useSelector((state: RootState) => {
  //   console.log(`state`, state);
  //   console.log(`state.notes`, JSON.stringify(state.myNote.notes));

  //   return state.myNote.notes;
  // });

  console.log(`notes`, noteList);

  const onAddNote = (e: any) => {
    dispatch(
      noteSlice.actions.addNote({
        id: v4(),
        title: "title",
        content: "content, " + v4(),
      })
    );
  };

  return (
    <>
      <h3>Danh sách Ghi chú</h3>
      <div>
        <Button onClick={onAddNote}>Them</Button>
      </div>

      <div>
        {noteList &&
          noteList.map((item, index) => (
            <li key={item.id}>
              <Link to={"/my-notes/" + item.id}>
                {item.id} - {item.title}
              </Link>
            </li>
          ))}
      </div>
    </>
  );
}
