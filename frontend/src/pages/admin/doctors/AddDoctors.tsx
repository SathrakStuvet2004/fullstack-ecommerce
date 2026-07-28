import { useState } from "react";
import DoctorAccount from "../../../components/admin/doctors/DoctorAccount";
import DoctorPersonal from "../../../components/admin/doctors/DoctorPersonal";
import DoctorProfessional from "../../../components/admin/doctors/DoctorProfessional";
import type { Doctor } from "../../../types/doctorType";
import "../../../css/addDoctors.css";



export default function AddDoctor() {

  const [doctor, setDoctor] = useState<Doctor>({
    name: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    address: "",

    department: 0,
    specialization: "",
    qualification: "",
    experience: 0,
    consultationFee: 0,
    licenseNumber: "",

    username: "",
    password: "",
    confirmPassword: "",
    status: "Active",
  });

  return (
    <div className="add-doctor">
      <div className="page-header">
        <h1>Add Doctor</h1>
        <p>Create a new doctor account</p>
      </div>

      <form>
        <DoctorPersonal
          doctor={doctor}
          setDoctor={setDoctor}
        />

        <DoctorProfessional
          doctor={doctor}
          setDoctor={setDoctor}
        />

        <DoctorAccount
          doctor={doctor}
          setDoctor={setDoctor}
        />

        <div className="form-actions">
          <button type="button">
            Cancel
          </button>

          <button type="submit">
            Save Doctor
          </button>
        </div>
      </form>
    </div>
  );
}