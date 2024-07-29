import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="w-screen h-full overflow-x-hidden">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
