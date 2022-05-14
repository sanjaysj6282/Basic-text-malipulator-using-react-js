import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react';

let name="Text";
function App() {
  const [mode, setMode] = useState('light');

  const toogleMode=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      document.title="Text utils-Light";
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#071e41';
      document.title="Text utils-Dark";
    }
  }

  return (
    <>
    <BrowserRouter>
      <Navbar title={name} Textabout="About" mode={mode} toggleMode={toogleMode}/>
      <div className="container my-3">
      <Routes>
        <Route path="/" element={<TextForm heading="Enter the text below" mode={mode}/>} />
        <Route exact path="about" element={<About/>} />
      </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;