import './App.css';
import Navbar from './Components/Navbar';

let name="Sanjay";
function App() {
  return (
    <>
    {/* Added navbar */}
      <Navbar title="Title_passed_by_props" Textabout="Aboutnew"/>
    </>
  );
}

export default App;