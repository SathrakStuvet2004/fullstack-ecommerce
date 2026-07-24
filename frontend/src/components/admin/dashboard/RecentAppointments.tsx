import "../../../css/RecentAppointment.css";

export interface Appointment {
  id: number;
  patientName: string;
  doctorName: string;
  department: string;
  time: string;
  status: "Completed" | "Pending" | "Cancelled";
}

interface RecentAppointmentsProps {
  appointments: Appointment[];
}

export default function RecentAppointments({
  appointments,
}: RecentAppointmentsProps) {
  return (
    <div className="recent-appointments">

      <div className="card-header">
        <h3>Recent Appointments</h3>

        <button className="view-all-btn">
          View All
        </button>
      </div>

      <div className="table-wrapper">

        <table>

          <thead>

            <tr>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Department</th>
              <th>Time</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            {appointments.map((appointment) => (

              <tr key={appointment.id}>

                <td>{appointment.patientName}</td>

                <td>{appointment.doctorName}</td>

                <td>{appointment.department}</td>

                <td>{appointment.time}</td>

                <td>

                  <span
                    className={`status ${appointment.status.toLowerCase()}`}
                  >
                    {appointment.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}