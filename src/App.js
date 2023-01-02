import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("Enable Dark Mode")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#161616"
      setText("Enable Light Mode")
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      setText(("Enable Dark Mode"))
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} text={text} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<TextForm heading="Example of Text Area" mode={mode} showAlert={showAlert} />} />
          <Route exact path="/about" element={<About about="About Us" />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

