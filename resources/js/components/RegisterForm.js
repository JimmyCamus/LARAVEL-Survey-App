import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Alert from "@mui/material/Alert";
import useHandleForm from "../hooks/useHandleForm";

const RegisterForm = () => {
  const [alert, setAlert] = useState({ severity: "", message: "" });
  const navigate = useNavigate();
  const handleForm = useHandleForm;
  const handleSubmit = async (e) => {
    const data = await handleForm(e, "/api/register");

    if (data.status == "success") {
      navigate("/login");
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
        <Grid container spacing={0} direction="column">
          <InputLabel
            htmlFor="input-with-icon-adornment"
            style={{ marginTop: "25px" }}
          >
            Username
          </InputLabel>
          <Input
            id="name"
            name="name"
            type="text"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
            autoComplete="off"
            required
          />
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
            Register
          </Button>
        </Grid>
      </form>
    </div>
  );
};

export default RegisterForm;
