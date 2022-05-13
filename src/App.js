import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react';

// import TextForm from './Components/TextForm';

let name="Text";
function App() {
  const [mode, setMode] = useState('light');

  const toogleMode=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#071e41';
    }
  }

  return (
    <>
    {/* Added navbar */}
      <Navbar title={name} Textabout="Aboutnew" mode={mode} toggleMode={toogleMode}/>
      <div className="container">
        <TextForm heading="Enter the text below" mode={mode}/>
      </div>

      {/* <About/> */}
      

    </>
  );
}

export default App;