import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
// import TextForm from './Components/TextForm';

let name="Text";
function App() {
  return (
    <>
    {/* Added navbar */}
      <Navbar title={name} Textabout="Aboutnew"/>
      {/* <div className="container">
        <TextForm heading="Enter the text below" />
      </div> */}

      <About/>
      

    </>
  );
}

export default App;