import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import GameButton from "../buttons/AppButton";
import { useEffect, useState } from "react";
import "../css/signup.css";
import { useNavigate } from 'react-router-dom';
import { usePostUser } from '../hoocks/hoock';
import { notify } from '../utils/toster';

export default function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: adduser, isPending, isSuccess, isError } = usePostUser()

  const navigate = useNavigate()

  const handleSignUp = async () => {

    if (name.length === 0 || email.length === 0 || password.length === 0) {
      return notify.error("Please fill all the fields");
    }
    adduser({ name, email, password })
  };

  useEffect(() => {

    if (isPending) {
      notify.loading("loading", "signup")
    }

    if (isSuccess) {
      notify.dismiss("signup")
      notify.success("please check your mail for verification")

      setEmail("");
      setName("");
      setPassword("");
    }

  }, [isPending, isSuccess])

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        notify.dismiss("signup")
      }, 2000)

    }
  }, [isError])

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
            <GameButton  onClick={handleSignUp} disabled={isPending}>
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
