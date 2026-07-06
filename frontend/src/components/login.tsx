import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from "@mui/material";
import GameButton from "../buttons/GameButton";
import "../css/login.css";
import { useState } from 'react';
import { login } from '../services/auth.services';
import { toast } from 'react-toastify';


export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async() => {
   
    const resutl = await login(email , password);

    if(resutl.success){
      return toast.success(resutl.message)
    }
    else{
      return toast.error(resutl.message);
    }
  };

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
            <GameButton variant="positive"
              onClick={handleLogin}>
              Login
            </GameButton>
          </div>
        </div>

        <div className="signup-Link">
          <p>if u don't have an account, click here to sign up
            <button className="SignUp-button">
              signUp
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
