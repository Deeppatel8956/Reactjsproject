// import logo from './logo.svg';
import './App.css';
import About from './Compo/About';
import Navbar from './Compo/Navbar';
// import Textfrom from './Compo/Textfrom';

function App() {
  return (
    <>
    <Navbar title="Deep" handing="Aboutus"/>
    <div className='container'>
      {/* <Textfrom heding="Deatils"/> */}
      <About/>
    </div>
    </>
  );
}

export default App;
