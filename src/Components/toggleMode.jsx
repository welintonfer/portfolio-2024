import "../assets/css/style.css";
import sun from "../assets/img/sun-mode.svg";
import moon from "../assets/img/moon.svg";
export default function App() {
  return (
    <div>
      <input type="checkbox" className="checkbox" id="checkbox" />
      <label htmlFor="checkbox" className="checkbox-label">
        <i className="fas fa-moon"></i>
        {/* <i className="fas fa-sun"></i> */}
        <img src={moon} alt="" />
        <img src={sun} alt="" />
        <span className="ball"></span>
      </label>
    </div>
  );
}
