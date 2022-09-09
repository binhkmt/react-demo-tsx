import { Link, Outlet } from "react-router-dom";
import Breadcrumbs from "../core/components/breadcrumb/Breadcrumbs";

export function LayoutView() {
  return (
    <>
      <div className="layout">
        {/* <h3>Layout title</h3> */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/abc">abc</Link>
            </li>
          </ul>
        </nav>
        <div style={{ height: "calc(100vh - 152px)" }}>
          <h3>Layout Body</h3>
          <div>
            <Breadcrumbs></Breadcrumbs>
          </div>
          <Outlet />
          <div>
            <h3>Footer</h3>
          </div>
        </div>
      </div>
    </>
  );
}
