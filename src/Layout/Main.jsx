import { Outlet } from "react-router-dom";
import NavbarTop from "../Component/NavbarTop/NavbarTop";
import Sidebar from "../Component/Sidebar/Sidebar";

const Main = () => {
  return (
    <div>
      {/* NavbarTop */}
      <div className="w-full ">
        <NavbarTop />
      </div>

      <div className="flex gap-4">
        {/* Sidebar - only show on larger screens */}
        <div className="border lg:w-[400px] h-[calc(100vh-60px)] hidden lg:block">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
