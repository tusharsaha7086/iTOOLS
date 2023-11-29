import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/alert';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);
  const showalert = (msg,type)=>{
    setalert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, "1500");
  }
  const toggleMode = () =>{
    if (mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#020023";
      showalert("Dark mode enabled","success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      showalert("Light mode enabled","success")
    }
  }
  
  return (

    <>
      <Navbar title="iTools" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <TextForm mode={mode} showalert={showalert}/>
    </>
  );
}

export default App;
