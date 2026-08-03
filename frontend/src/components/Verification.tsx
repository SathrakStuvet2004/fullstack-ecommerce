import { useEffect, useState } from "react";
import { useVerify } from "../hoocks/hoock";
import { useSearchParams } from "react-router-dom";

import "../css/verification.css";
import { notify } from "../utils/toster";

export default function Verification() {
  const [isVerified, setIsVerified] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");

  const { mutate: verifyUser, isSuccess, isPending, isError, } = useVerify();

  useEffect(() => {
    if (token) {
      verifyUser({ token });
    }
  }, [token, verifyUser]);

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsVerified(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      notify.error("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      notify.error("Passwords do not match.");
      return;
    }

    console.log({ token, password, });

    // Call your Set Password API here
  };

  return (
    <div className="verification">
      <div className="verification-card">

        {!isVerified ? (
          <>
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
                "Your email has been verified successfully. Preparing your account..."}

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
          </>
        ) : (
          <>
            <div className="success-icon">
              🔒
            </div>

            <h1 className="verification-title">
              Set Your Password
            </h1>

            <p className="verification-text">
              Your email has been verified successfully. Please create a password to activate your account.
            </p>

            <form className="password-form" onSubmit={handleSubmit}>

              <input
                type="password"
                placeholder="Enter your password"
                className="password-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <input
                type="password"
                placeholder="Confirm your password"
                className="password-input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <button
                type="submit"
                className="set-password-btn"
              >
                Set Password
              </button>

            </form>
          </>
        )}

      </div>
    </div>
  );
}