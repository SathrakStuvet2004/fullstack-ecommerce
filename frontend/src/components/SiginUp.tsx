import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, } from "@mui/material";

export default function SignUp() {

  return (
    <>
      <div className="login container">
        <p>SignUp Page</p>

        <div className="user-info">
          <div className="n-p-m-container">
            <Box
              component="form"
              sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
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
          <div className="role-container">
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
            <button className="Login-button">
              sign up
            </button>
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
