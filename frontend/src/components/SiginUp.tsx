import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, } from "@mui/material";
import GameButton from "../buttons/GameButton";
import { useState } from "react";
import { toast } from "react-toastify"
import { register } from '../services/auth.services';
import "../css/signup.css";
import { useNavigate } from 'react-router-dom';

export default function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleSignUp = async () => {

    if (name.length === 0 || email.length === 0 || password.length === 0) {
      return toast.error("Please fill all the fields");
    }

    const result = await register(email, password);

    toast.dark(result.message);

  };

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
          {/* <div className="role-selector-container">
            <FormControl>
              <FormLabel>Select Role</FormLabel>

              <RadioGroup
                row
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <FormControlLabel
                  value="user"
                  control={<Radio />}
                  label="User"
                />

                <FormControlLabel
                  value="seller"
                  control={<Radio />}
                  label="Seller"
                />
              </RadioGroup>
            </FormControl>
            
          </div> */}
          <div className="button">
            <GameButton variant="positive" onClick={handleSignUp}>
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
