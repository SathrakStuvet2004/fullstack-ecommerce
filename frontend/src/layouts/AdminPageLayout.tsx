import Sidebar from "../components/admin/SideBar";
import TopNavbar from "../components/admin/TopNavbar";
import { Outlet } from "react-router-dom";
import "../css/adminLayout.css"

export default function AdminLayout() {
  return (
    <div className="admin-layout">

      <Sidebar />

      <div className="admin-content">

        <TopNavbar />

        <main>
          <Outlet />
        </main>

      </div>

    </div>
  );
}