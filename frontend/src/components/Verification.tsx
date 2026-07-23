import { useEffect } from "react";
import { useVerify } from "../hoocks/hoock";
import { useNavigate, useSearchParams } from "react-router-dom";

import "../css/verification.css"

export default function Verification() {
  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");

  const { mutate: verifyUser, isSuccess, isPending, isError } = useVerify();

  const navigate = useNavigate();

  useEffect(() => {
    verifyUser({ token });
  }, [token]);

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        navigate("/login");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isSuccess, navigate]);

  return (
    <>
      <div className="verification">
        <div className="verification-card">

          {isPending && <div className="spinner"></div>}

          {isSuccess && (
            <div className="success-icon">
              ✓
            </div>
          )}

          {isError && (
            <div className="error-icon">
              ✕
            </div>
          )}

          <h1 className="verification-title">
            Email Verification
          </h1>

          <p className="verification-text">
            {isPending &&
              "Please wait while we're verifying your email address..."}

            {isSuccess &&
              "Your email has been verified successfully. Redirecting you to the login page..."}

            {isError &&
              "Verification failed. The verification link is invalid or has expired."}
          </p>

          {isPending && (
            <div className="status-label status-loading">
              Verifying...
            </div>
          )}

          {isSuccess && (
            <div className="status-label status-success">
              ✓ Verified Successfully
            </div>
          )}

          {isError && (
            <div className="status-label status-error">
              ✕ Verification Failed
            </div>
          )}

        </div>
      </div>
    </>
  );
}