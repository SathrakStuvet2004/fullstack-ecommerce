import type { Dispatch, SetStateAction } from "react";
import type { Doctor } from "../../../types/doctorType";

type Props = {
  doctor: Doctor;
  setDoctor: Dispatch<SetStateAction<Doctor>>;
};

export default function DoctorAccount({
  doctor,
  setDoctor,
}: Props) {
  return (
    <section className="form-card">
      <h2>Account Information</h2>

      <div className="form-grid">
        <div className="form-group">
          <label>Username</label>

          <input
            type="text"
            value={doctor.username}
            onChange={(e) =>
              setDoctor({
                ...doctor,
                username: e.target.value,
              })
            }
          />
        </div>

        <div className="form-group">
          <label>Status</label>

          <select
            value={doctor.status}
            onChange={(e) =>
              setDoctor({
                ...doctor,
                status: e.target.value,
              })
            }
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="On Leave">On Leave</option>
          </select>
        </div>
      </div>
    </section>
  );
}