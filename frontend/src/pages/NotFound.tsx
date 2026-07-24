import { Link } from "react-router-dom";
import { FaArrowLeft, FaHospitalAlt } from "react-icons/fa";
import "../css/notfound.css";

export default function NotFound() {
  return (
    <div className="not-found">

      <div className="not-found-card">

        <div className="not-found-icon">
          <FaHospitalAlt />
        </div>

        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          The page you're looking for doesn't exist or has been moved.
          Please check the URL or return to the dashboard.
        </p>

        <Link to="/" className="back-home-btn">
          <FaArrowLeft />
          Back to Home
        </Link>

      </div>

    </div>
  );
}