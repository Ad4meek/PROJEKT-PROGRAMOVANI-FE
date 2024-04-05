import { Link } from "react-router-dom";
import "./MainPage.css";

export default function MainPage() {
  return (
    <>
      <div id="container">
        <form>
        <input id="input" type="text" placeholder="Gang Gang"/><br />   

        <br />
        <input type="radio" name="position" id="teacher" value="Teacher" />
        <label for="teacher">Teacher</label><br />
        <input type="radio" name="position" id="student" value="Student" />
        <label for="student">Student</label><br />
        <button id="btn">SEND</button>
        </form>
        
      </div>
    </>
  );
}
