import { Link } from "react-router-dom";
import "./MainPage.css";
import Button from "@mui/material/Button";

export default function MainPage() {
  return (
    <>
      <div id="mainpage">
        <div className="title">
          <h1> Main page</h1>
        </div>
        <Link to={"/login"}>
          <Button className="btnRegister" variant="outlined">
            LOGIN
          </Button>
        </Link>
      </div>
    </>
  );
}
