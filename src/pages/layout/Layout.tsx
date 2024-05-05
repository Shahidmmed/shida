import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-24">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
