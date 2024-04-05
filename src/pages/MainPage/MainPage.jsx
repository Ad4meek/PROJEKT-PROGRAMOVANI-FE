import { Link } from "react-router-dom";
import "./MainPage.css";

export default function MainPage() {
  return (
    <>
      <div id="container">
        <form>
        <input id="input" type="text" placeholder="Gang Gang"/>
        <button id="btn">SEND</button>
        </form>
        
      </div>
    </>
  );
}
