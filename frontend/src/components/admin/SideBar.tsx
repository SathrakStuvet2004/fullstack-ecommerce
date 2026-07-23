import { Link } from "react-router-dom";
import "../../css/sidebar.css"

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <h2>Hospital</h2>
    </div>

      <nav>

        <Link to="/admin">Dashboard</Link>

        <Link to="/admin/doctors">Doctors</Link>

        <Link to="/admin/patients">Patients</Link>

        <Link to="/admin/appointments">Appointments</Link>

        <Link to="/admin/departments">Departments</Link>

        <Link to="/admin/settings">Settings</Link>

      </nav>

    </aside>
  );
}