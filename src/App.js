import './App.css';
//import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
//import {
  //Routes,
  //Route,
//} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#15077c';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode'; 
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
      {/*<Navbar title="TextUtils" aboutText="About TextUtils"/>*/}
      {/* <Navbar/> */}
      
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/*<Routes>*/}
        {/*<Route exact path="/about" element={<About />}>*/}
        {/*</Route>*/}
        {/*<Route exact path="/"*/} {<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}
        {/*</Route>*/}
      {/*</Routes>*/}
      </div>
    </>
  );
}

export default App;
