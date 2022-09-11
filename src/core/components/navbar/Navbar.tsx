import { Nav, NavDropdown } from "react-bootstrap";
import NavbarRB from "react-bootstrap/Navbar";

interface Props {
  /** Determines the navbar background color */
  bg?: string;
  /** Determines the letters color. It should be combined with the background color (bg) */
  variant?: "light" | "dark";
  /** Determines the links names, theirs onClick methods and paths. It has children array which contain links to be used on a dropdown. */
  navItems: any; // (NavIcon | NavImage | NavHeader | NavLink | NavLinkList | NavLinkListIcon | NavSearch)[]
  /** Defines the class of the list. */
  className?: string;
}

export const Navbar = (props: Props) => {
  const { bg } = props;

  return (
    <>
      <NavbarRB bg={bg} expand="lg" variant="dark">
        <NavbarRB.Brand href="/">Demo</NavbarRB.Brand>
        <NavbarRB.Toggle aria-controls="basic-navbar-nav" />
        <NavbarRB.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/my-notes">My notes</Nav.Link>
            <Nav.Link href="/my-notes/111">My notes chi tiet</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </NavbarRB.Collapse>
        {/* <NavbarRB.Collapse id="responsive-navbar-nav">
          <Nav className={className} style={{ width: "100%" }}>
            <Button className="navbar-toggler" type="button">
              <span>sdf</span>
            </Button>
            {navItems &&
              navItems.map((item: any, index: any) => {
                // if ((item as NavHeader).type === "header") {
                //   return getNavHeader(item as NavHeader, index);
                // }
                // if ((item as NavIcon).type === "icon") {
                //   return getNavIcon(item as NavIcon, index);
                // }
                // if ((item as NavLink).type === "link") {
                //   return getNavLink(item as NavLink, index);
                // }
                // if ((item as NavSearch).type === "search") {
                //   return getNavSearch(item as NavSearch, index);
                // }
                // if ((item as NavLinkList).type === "link-list") {
                //   return getNavLinkList(item as NavLinkList, index);
                // }
                // if ((item as NavLinkListIcon).type === "link-list-icon") {
                //   return getNavLinkListIcon(item as NavLinkListIcon, index);
                // }
                // if ((item as NavImage).type === "image") {
                //   return getNavImage(item as NavImage, index);
                // }
                return null;
              })}
          </Nav>
        </NavbarRB.Collapse> */}
      </NavbarRB>
    </>
  );
};
