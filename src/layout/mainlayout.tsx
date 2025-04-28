import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/sidebar/sidebar";
import Header from "../components/common/header/header";

const Mainlayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex-1 p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Mainlayout;
