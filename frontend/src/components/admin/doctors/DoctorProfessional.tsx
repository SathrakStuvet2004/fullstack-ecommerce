import { useEffect, type Dispatch, type SetStateAction } from "react";
import type { Doctor } from "../../../types/doctorType";
import { useGetDepartments } from "../../../hoocks/admin/adminFetcherHoocks";
import { handleApiError } from "../../../services/error";

type Props = {
  doctor: Doctor;
  setDoctor: Dispatch<SetStateAction<Doctor>>;
};

export default function DoctorProfessional({ doctor, setDoctor, }: Props) {

  const { data: departments, error, isError } = useGetDepartments()

  useEffect(() => {
    
    if (isError) {
      handleApiError(error);
    }
  }, [isError, error]);

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
                department: Number(e.target.value),
              })
            }
          >
            <option value="">Select Department</option>

            {departments?.data.filter((dept: any) => dept.is_active === 1).map((dept: any) => (
              <option key={dept.dept_id} value={dept.dept_id}>
                {dept.department_name}
              </option>
            ))}
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