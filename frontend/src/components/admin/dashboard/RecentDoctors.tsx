import "../../../css/RecentDoctors.css";

interface Doctor {
  id: number;
  name: string;
  department: string;
  experience: string;
  status: "Available" | "Busy" | "On Leave";
}

interface RecentDoctorsProps {
  doctors: Doctor[];
}

export default function RecentDoctors({
  doctors,
}: RecentDoctorsProps) {
  return (
    <div className="recent-doctors">

      <div className="card-header">
        <h3>Recent Doctors</h3>

        <button className="view-all-btn">
          View All
        </button>
      </div>

      <div className="doctor-list">

        {doctors.map((doctor) => (

          <div
            className="doctor-card"
            key={doctor.id}
          >

            <div className="doctor-avatar">
              {doctor.name.charAt(0)}
            </div>

            <div className="doctor-info">

              <h4>{doctor.name}</h4>

              <p>{doctor.department}</p>

              <span>{doctor.experience}</span>

            </div>

            <div
              className={`doctor-status ${doctor.status.toLowerCase().replace(" ", "-")}`}
            >
              {doctor.status}
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}