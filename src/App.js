import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

let name="Sanjay";
function App() {
  return (
    <>
    {/* Added navbar */}
      <Navbar title={name} Textabout="Aboutnew"/>
      <div className="container">
        <TextForm heading="Enter the text below" />
      </div>
      

    </>
  );
}

export default App;