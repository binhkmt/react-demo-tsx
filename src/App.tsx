import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LayoutView } from "./views/layout-view";
import { HomeView } from "./views/home-view";
import { PricingView } from "./views/pricing-view";
import { AboutView } from "./views/about-view";
import { NoPageView } from "./views/nopage-view";
import { Navbar } from "./core/components/navbar/Navbar";

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
      <Navbar></Navbar>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutView />}>
            <Route index element={<HomeView />} />
            <Route path="pricing" element={<PricingView />} />
            <Route path="about" element={<AboutView />} />
            <Route path="*" element={<NoPageView />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <div style={{ height: "50px", backgroundColor: "gray" }}>Hết trang</div>
    </div>
  );
}

export default App;
