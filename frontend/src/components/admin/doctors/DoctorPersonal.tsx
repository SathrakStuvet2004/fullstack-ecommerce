import type { Dispatch, SetStateAction } from "react";
import type { Doctor } from "../../../types/doctorType";

type Props = {
  doctor: Doctor;
  setDoctor: Dispatch<SetStateAction<Doctor>>;
};

export default function DoctorPersonal({ doctor, setDoctor, }: Props) {
  return (
    <section className="form-card">
      <h2>Personal Information</h2>

      <div className="form-grid">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={doctor.name}
            onChange={(e) =>
              setDoctor({
                ...doctor,
                name: e.target.value,
              })
            }
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={doctor.email}
            onChange={(e) =>
              setDoctor({
                ...doctor,
                email: e.target.value,
              })
            }
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            value={doctor.phone}
            onChange={(e) =>
              setDoctor({
                ...doctor,
                phone: e.target.value,
              })
            }
          />
        </div>

        <div className="form-group">
          <label>Gender</label>

          <select
            value={doctor.gender}
            onChange={(e) =>
              setDoctor({
                ...doctor,
                gender: e.target.value,
              })
            }
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            value={doctor.dob}
            onChange={(e) =>
              setDoctor({
                ...doctor,
                dob: e.target.value,
              })
            }
          />
        </div>

        <div className="form-group full-width">
          <label>Address</label>
          <textarea
            rows={4}
            value={doctor.address}
            onChange={(e) =>
              setDoctor({
                ...doctor,
                address: e.target.value,
              })
            }
          />
        </div>
      </div>
    </section>
  );
}