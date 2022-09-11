import { Outlet } from "react-router-dom";
import Breadcrumbs from "../core/components/breadcrumb/Breadcrumbs";
import { Navbar } from "../core/components/navbar/Navbar";

export function LayoutView() {
  return (
    <>
      <Navbar bg={"dark"} className="" navItems={undefined}></Navbar>

      <div className="layout">
        <div className="layout-body">
          <h3>Layout Body</h3>
          <div>
            <Breadcrumbs></Breadcrumbs>
          </div>
          <div className="main-content">
            <Outlet />
          </div>
          <div>
            <h3>Footer</h3>
          </div>
        </div>
      </div>
    </>
  );
}
