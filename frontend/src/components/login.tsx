import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from "@mui/material";

import "../css/login.css";
import { useEffect, useState } from 'react';
//import { login } from '../services/auth.services';
import { useLogin } from '../hoocks/hoock';
import { useNavigate } from 'react-router';
import AppButton from '../buttons/AppButton';
import { notify } from '../utils/toster';


export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: userLogin, isSuccess } = useLogin()

  const navigate = useNavigate();

  const handleLogin = async () => {
    /* the below line do auth in front end by using firebase
     const resutl = await login(email , password);
 
     if(resutl.success){
       return toast.success(resutl.message)
     }
     else{
       return toast.error(resutl.message);
     }
     */

    userLogin({ email, password })
  };

  useEffect(() => {
    if (isSuccess) {
      notify.success("login successfully")

      setEmail("");
      setPassword("")

      setTimeout(() => {
        navigate("/")
      }, 3000)
    }
  }, [isSuccess])

  return (
    <>
      <div className="login container">

        <div className="login-header">
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              mb: 3,
            }}
          >
            Login
          </Typography>
        </div>

        <div className="user-info">
          <div className="m-p-container">
            <Box
              component="form"
              sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
              noValidate
              autoComplete="off"
            >
              <div className="email">
                <TextField
                  required
                  id="outlined-required"
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-input": {
                      color: "#fff",
                    },
                  }}
                />
              </div>

              <div className="password">
                <TextField
                  required
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </Box>
          </div>
          <div className="button">
            <AppButton
              onClick={handleLogin}>
              Login
            </AppButton>


          </div>
        </div>

        <div className="signup-Link">
          <p>if u don't have an account, click here to sign up
            <button className="SignUp-button" onClick={() => { navigate("/signup") }}>
              signUp
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
