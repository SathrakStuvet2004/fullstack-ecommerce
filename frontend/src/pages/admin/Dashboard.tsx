import "../../css/Dasboard.css";

import { FaUserMd, FaUsers, FaCalendarCheck, FaBed, FaUserPlus, FaCalendarPlus, FaHospital, } from "react-icons/fa";

import StatCard from "../../components/admin/dashboard/StateCard";
import RecentAppointments from "../../components/admin/dashboard/RecentAppointments";
import RecentDoctors from "../../components/admin/dashboard/RecentDoctors";
import RecentPatients from "../../components/admin/dashboard/RecentPatients";
import QuickActions from "../../components/admin/dashboard/QuickActions";
import ActivityLog from "../../components/admin/dashboard/ActivityLog";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Doctors",
      value: 42,
      subtitle: "Active Doctors",
      trend: "+8%",
      trendType: "up" as const,
      icon: <FaUserMd />,
    },
    {
      title: "Total Patients",
      value: 1256,
      subtitle: "Registered Patients",
      trend: "+12%",
      trendType: "up" as const,
      icon: <FaUsers />,
    },
    {
      title: "Appointments",
      value: 38,
      subtitle: "Today's Schedule",
      trend: "-2%",
      trendType: "down" as const,
      icon: <FaCalendarCheck />,
    },
    {
      title: "Available Beds",
      value: "45 / 60",
      subtitle: "Current Capacity",
      trend: "+5%",
      trendType: "up" as const,
      icon: <FaBed />,
    },
  ];

  const appointments = [
    {
      id: 1,
      patientName: "John Doe",
      doctorName: "Dr. Smith",
      department: "Cardiology",
      time: "09:00 AM",
      status: "Completed" as const,
    },
    {
      id: 2,
      patientName: "Emma Wilson",
      doctorName: "Dr. David",
      department: "Neurology",
      time: "10:30 AM",
      status: "Pending" as const,
    },
    {
      id: 3,
      patientName: "Robert",
      doctorName: "Dr. James",
      department: "Orthopedics",
      time: "11:00 AM",
      status: "Cancelled" as const,
    },
  ];

  const doctors = [
    {
      id: 1,
      name: "Dr. John Smith",
      department: "Cardiology",
      experience: "10 Years",
      status: "Available" as const,
    },
    {
      id: 2,
      name: "Dr. Sarah Lee",
      department: "Neurology",
      experience: "8 Years",
      status: "Busy" as const,
    },
  ];

  const patients = [
    {
      id: 1,
      name: "David",
      age: 34,
      gender: "Male" as const,
      condition: "Diabetes",
    },
    {
      id: 2,
      name: "Sophia",
      age: 27,
      gender: "Female" as const,
      condition: "Migraine",
    },
  ];

  const actions = [
    {
      id: 1,
      title: "Add Doctor",
      icon: <FaUserMd />,
      onClick: () => { },
    },
    {
      id: 2,
      title: "Add Patient",
      icon: <FaUserPlus />,
      onClick: () => { },
    },
    {
      id: 3,
      title: "New Appointment",
      icon: <FaCalendarPlus />,
      onClick: () => { },
    },
    {
      id: 4,
      title: "Department",
      icon: <FaHospital />,
      onClick: () => { },
    },
  ];

  const activities = [
    {
      id: 1,
      title: "Doctor Added",
      description: "Dr. John Smith joined the hospital.",
      time: "2 min ago",
      type: "success" as const,
    },
    {
      id: 2,
      title: "Appointment Booked",
      description: "Emma Wilson booked an appointment.",
      time: "10 min ago",
      type: "warning" as const,
    },
    {
      id: 3,
      title: "Department Updated",
      description: "Cardiology department information updated.",
      time: "1 hour ago",
      type: "info" as const,
    },
  ];

  return (
    <div className="dashboard">

      <div className="dashboard-header">
        <h1>Welcome Back, Admin 👋</h1>
        <p>Hospital Management Overview</p>
      </div>

      <div className="stats-grid">
        {stats.map((item) => (
          <StatCard key={item.title} data={item} />
        ))}
      </div>

      <RecentAppointments appointments={appointments} />

      <div className="dashboard-grid">

        <RecentDoctors doctors={doctors} />

        <RecentPatients patients={patients} />

      </div>

      <div className="dashboard-grid">

        <QuickActions actions={actions} />

        <ActivityLog activities={activities} />

      </div>

    </div>
  );
}