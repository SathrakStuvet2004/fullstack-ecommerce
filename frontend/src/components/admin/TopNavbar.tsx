import { useSelector } from "react-redux";
import {FaSearch,FaClipboardList,FaBell,FaPlus,FaChevronDown,FaUserMd,FaUserNurse,FaUserInjured,} from "react-icons/fa";

import "../../css/topbar.css";
import { useNavigate } from "react-router";

export default function TopNavbar() {
  const user = useSelector((state: any) => state.auth.user);

  const navigate = useNavigate();

  return (
    <header className="top-navbar">

      <div className="navbar-search">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search patients, doctors..."
        />
      </div>

      <div className="navbar-actions">
        <div className="nav-dropdown">

          <button className="nav-btn">
            <FaClipboardList className="nav-icon" />
            <span className="badge">5</span>
          </button>

          <div className="dropdown-menu">

            <div className="dropdown-header">
              <h4>Pending Tasks</h4>
              <span>5</span>
            </div>

            <div className="dropdown-item">
              <h5>Doctor Approval</h5>
              <p>2 doctors waiting for approval</p>
            </div>

            <div className="dropdown-item">
              <h5>Leave Requests</h5>
              <p>3 staff requests pending</p>
            </div>

            <div className="dropdown-item">
              <h5>Appointments</h5>
              <p>5 appointments need confirmation</p>
            </div>

            <button className="view-all">
              View All Tasks
            </button>

          </div>

        </div>

        <div className="nav-dropdown">

          <button className="nav-btn">
            <FaBell className="nav-icon" />
            <span className="badge">3</span>
          </button>

          <div className="dropdown-menu">

            <div className="dropdown-header">
              <h4>Notifications</h4>
              <span>3</span>
            </div>

            <div className="dropdown-item">
              <h5>New Patient</h5>
              <p>John registered just now</p>
            </div>

            <div className="dropdown-item">
              <h5>Appointment Cancelled</h5>
              <p>Room 204</p>
            </div>

            <div className="dropdown-item">
              <h5>System Backup</h5>
              <p>Completed successfully</p>
            </div>

            <button className="view-all">
              View All Notifications
            </button>

          </div>

        </div>

        <div className="quick-add-wrapper">
          <button className="quick-add">
            <FaPlus />
            <span>Quick Add</span>
          </button>

          <div className="quick-add-dropdown">
            <button onClick={()=>navigate("/admin/doctors/add")}>
              <FaUserMd />
              <span>Add Doctor</span>
            </button>

            <button>
              <FaUserNurse />
              <span>Add Receptionist</span>
            </button>

            <button>
              <FaUserInjured />
              <span>Add Patient</span>
            </button>
          </div>
        </div>

        <div className="profile-dropdown">

          <div className="profile">

            <div className="avatar">
              {user?.name?.charAt(0).toUpperCase()}
            </div>

            <div className="profile-info">
              <span>{user?.name}</span>
              <small>Administrator</small>
            </div>

            <FaChevronDown className="profile-arrow" />

          </div>

          <div className="profile-menu">

            <div className="profile-menu-item">
              👤
              <span>My Profile</span>
            </div>

            <div className="profile-menu-item">
              🔒
              <span>Change Password</span>
            </div>

            <div className="profile-menu-item">
              🌙
              <span>Dark Mode</span>
            </div>

            <div className="menu-divider"></div>

            <div className="profile-menu-item logout">
              🚪
              <span>Logout</span>
            </div>

          </div>

        </div>

      </div>

    </header>
  );
}