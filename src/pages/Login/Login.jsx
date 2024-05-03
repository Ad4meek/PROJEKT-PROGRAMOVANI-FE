import { Link } from "react-router-dom";
import "./Login.css";
import Button from "@mui/material/Button";

export default function Login() {
  return (
    <>
      <div id="login">
        <div className="title">
          <h1> Login</h1>
        </div>
        <Link to={"/register"}>
          <Button className="btnRegister" variant="outlined">REGISTER</Button>
        </Link>
      </div>
    </>
  );
}
