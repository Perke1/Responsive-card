import "./App.css";
import qr from "./assets/image-qr-code.png";

function App() {
  return (
    <div className="container">
      <div className="card">
        <img src={qr} className></img>
        <h1> Improve your front-end skill by building projects</h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skill
          to the next level
        </p>
      </div>
    </div>
  );
}

export default App;
