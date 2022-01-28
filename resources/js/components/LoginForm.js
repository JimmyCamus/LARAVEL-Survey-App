import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Alert from "@mui/material/Alert";
import useHandleForm from "../hooks/useHandleForm";

const LoginForm = ({ setUser }) => {
  const [alert, setAlert] = useState({ severity: "", message: "" });
  const handleForm = useHandleForm;
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    const data = await handleForm(e, "/api/login");

    if (data.status == "success") {
      setUser({ name: data.user.name, email: data.user.email });
      navigate("/");
      return;
    }

    setAlert({ severity: "error", message: data.message });
  };

  const handleAlert = (value, message) => {
    if (value == "error") {
      return <Alert severity="error">{message}</Alert>;
    }

    return null;
  };

  return (
    <div>
      {handleAlert(alert.severity, alert.message)}
      <form onSubmit={handleSubmit}>
        <Grid
          container
          spacing={0}
          direction="column"
          style={{ width: "100%" }}
        >
          <InputLabel
            htmlFor="input-with-icon-adornment"
            style={{ marginTop: "25px" }}
          >
            Email
          </InputLabel>
          <Input
            id="email"
            name="email"
            type="email"
            startAdornment={
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            }
            autoComplete="off"
            required
          />
          <InputLabel
            htmlFor="input-with-icon-adornment"
            style={{ marginTop: "25px" }}
          >
            Password
          </InputLabel>
          <Input
            id="password"
            name="password"
            type="password"
            startAdornment={
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            }
            autoComplete="off"
            required
          />
          <Button
            variant="contained"
            type="submit"
            style={{ marginTop: "25px" }}
          >
            Login
          </Button>
        </Grid>
      </form>
    </div>
  );
};

export default LoginForm;
