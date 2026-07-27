import type { Dispatch, SetStateAction } from "react";
import type { Doctor } from "../../../types/doctorType";

type Props = {
  doctor: Doctor;
  setDoctor: Dispatch<SetStateAction<Doctor>>;
};

export default function DoctorProfessional({
  doctor,
  setDoctor,
}: Props) {
  return (
    <section className="form-card">
      <h2>Professional Information</h2>

      <div className="form-grid">
        <div className="form-group">
          <label>Department</label>

          <select
            value={doctor.department}
            onChange={(e) =>
              setDoctor({
                ...doctor,
                department: e.target.value,
              })
            }
          >
            <option value="">Select Department</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Neurology">Neurology</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Pediatrics">Pediatrics</option>
          </select>
        </div>

        <div className="form-group">
          <label>Specialization</label>

          <input
            type="text"
            value={doctor.specialization}
            onChange={(e) =>
              setDoctor({
                ...doctor,
                specialization: e.target.value,
              })
            }
          />
        </div>

        <div className="form-group">
          <label>Qualification</label>

          <input
            type="text"
            value={doctor.qualification}
            onChange={(e) =>
              setDoctor({
                ...doctor,
                qualification: e.target.value,
              })
            }
          />
        </div>

        <div className="form-group">
          <label>Experience (Years)</label>

          <input
            type="number"
            value={doctor.experience}
            onChange={(e) =>
              setDoctor({
                ...doctor,
                experience: Number(e.target.value),
              })
            }
          />
        </div>

        <div className="form-group">
          <label>Consultation Fee</label>

          <input
            type="number"
            value={doctor.consultationFee}
            onChange={(e) =>
              setDoctor({
                ...doctor,
                consultationFee: Number(e.target.value),
              })
            }
          />
        </div>

        <div className="form-group">
          <label>License Number</label>

          <input
            type="text"
            value={doctor.licenseNumber}
            onChange={(e) =>
              setDoctor({
                ...doctor,
                licenseNumber: e.target.value,
              })
            }
          />
        </div>
      </div>
    </section>
  );
}