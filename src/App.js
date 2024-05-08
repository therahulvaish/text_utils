import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from './components/About';

function App() {
  const [mode, setMode] = useState("light");
  const [modeText, modeSetText] = useState("Light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      modeSetText("Dark");
      document.body.style.transition = "0.5s";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      modeSetText("Light");
      document.body.style.transition = "0.5s";
      showAlert("Light Mode Enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        home="Home"
        about="About Us"
        mode={mode}
        toggleMode={toggleMode}
        modeText={modeText}
      />
      <Alert
      alert={alert}
      />
      <div className="container my-3">
        <TextForm mode={mode} showAlert={showAlert}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
