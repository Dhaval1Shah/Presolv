import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import "./login.css";
import Authuser from "../../Admin/pages/Authuser/Authuser";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/apiCalls";

const iniuser = {
  email: "",
  password: "",
};

function Login() {
  const history = useHistory();

  const [userName, setuserName] = useState(iniuser);

  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setuserName({ ...userName, [name]: value });
  };

  const handleSubmit = () => {
    let item = { email: userName.email, password: userName.password };

    login(dispatch, item);
  };

  return (
    <div>
      <div className="login__Main">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              value={userName.email}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              type="password"
              label="Password"
              variant="outlined"
              name="password"
              value={userName.password}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        <Grid item xs={12} style={{ margin: "10px" }}>
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={isFetching}
          >
            Save
          </Button>
        </Grid>
      </div>
    </div>
  );
}

export default Login;
