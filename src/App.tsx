import "./App.scss";
import { Routes, Route } from "react-router-dom";

import { LayoutView } from "./views/layout-view";
import { HomeView } from "./views/home-view";
import { AboutView } from "./views/about-view";
import { NoPageView } from "./views/nopage-view";
import { NoteRouting } from "./features/Note/NoteRouting";

export interface ITodo {
  id: string;
  name: string;
}

function init() {
  //khởi tạo một số thứ
  console.log(`[App] init`);
}

export function App() {
  console.log(`[App] start, env`, process.env.NODE_ENV);
  init();
  console.log(`[App] return view`);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutView />}>
          <Route index element={<HomeView />} />
          <Route path="my-notes/*" element={<NoteRouting />} />
          <Route path="about" element={<AboutView />} />
          <Route path="*" element={<NoPageView />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
