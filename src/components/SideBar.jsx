import { Link, Outlet } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="layout">
      <div className="side">
        <div className="nav-links">
          <Link to={"/"}>Home</Link>
          <Link to={"/create"}>Create A Crewmate</Link>
          <Link to={"/gallery"}>Gallery</Link>
        </div>
      </div>
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};

export default SideBar;
