import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, } from "@mui/material";
import GameButton from "../buttons/GameButton";
import "../css/signup.css";

export default function SignUp() {

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
                  id="outlined-required"
                  label="name"
                />
              </div>

              <div className="email">
                <TextField
                  required
                  id="outlined-required"
                  label="email"
                  type='email'
                />
              </div>

              <div className="password">
                <TextField
                  required
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                />
              </div>
            </Box>
          </div>
          <div className="role-selector-container">
            <FormControl>
              <FormLabel>Select Role</FormLabel>

              <RadioGroup
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
          </div>
          <div className="button">
            <GameButton variant="positive">
              sign up
            </GameButton>
          </div>
        </div>
      </div>
    </>
  );
}
