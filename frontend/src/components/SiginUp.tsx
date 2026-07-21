import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import GameButton from "../buttons/GameButton";
import { useEffect, useState } from "react";
import { toast } from "react-toastify"
import "../css/signup.css";
import { useNavigate } from 'react-router-dom';
import { usePostUser } from '../hoocks/hoock';

export default function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: adduser, isPending, isSuccess, isError } = usePostUser()

  const navigate = useNavigate()

  const handleSignUp = async () => {

    if (name.length === 0 || email.length === 0 || password.length === 0) {
      return toast.error("Please fill all the fields");
    }
    adduser({ name, email, password })
  };

  useEffect(() => {

    if (isPending) {
      toast.loading("loading", { toastId: "signup" })
    }

    if (isSuccess) {
      toast.dismiss("signup")

      setEmail("");
      setName("");
      setPassword("");
    }

  }, [isPending, isSuccess])

  useEffect(() => {
    if (isError) {
      toast.dismiss("signup")
    }
  },[isError])

  const navToLogin = () => {
    navigate("/login")
  }

  return (
    <>
      <div className="signup container">
        <p>SignUp Page</p>

        <div className="user-information">
          <div className="na-p-m-container">
            <Box
              component="form"
              className="signup-form"
              noValidate
              autoComplete="off"
            >
              <div className="name">
                <TextField
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="outlined-required"
                  label="name"
                />
              </div>

              <div className="email">
                <TextField
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="outlined-required"
                  label="email"
                  type='email'
                />
              </div>

              <div className="password">
                <TextField
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                />
              </div>
            </Box>
          </div>
          <div className="button">
            <GameButton variant="positive" onClick={handleSignUp} disabled={isPending}>
              sign up
            </GameButton>
          </div>
          <div className="signup-link">
            <p>
              Already have an account?
              <button
                type="button"
                onClick={navToLogin}
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
