import "../../../css/recentPatients.css";

interface Patient {
  id: number;
  name: string;
  age: number;
  gender: "Male" | "Female";
  condition: string;
}

interface RecentPatientsProps {
  patients: Patient[];
}

export default function RecentPatients({
  patients,
}: RecentPatientsProps) {
  return (
    <div className="recent-patients">

      <div className="card-header">
        <h3>Recent Patients</h3>

        <button className="view-all-btn">
          View All
        </button>
      </div>

      <div className="patient-list">

        {patients.map((patient) => (

          <div
            className="patient-card"
            key={patient.id}
          >

            <div className="patient-avatar">
              {patient.name.charAt(0)}
            </div>

            <div className="patient-info">

              <h4>{patient.name}</h4>

              <p>
                {patient.age} Years • {patient.gender}
              </p>

              <span>{patient.condition}</span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}