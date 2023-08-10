// import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Textfrom from './Component/Textfrom';

function App() {
  return (
    <>

      <Navbar title="Textutils4" name="About us" />
      <div className='container my-10'> 

         <Textfrom heading="Exame the anaiz " /> 
       </div>
    </>
  );
}

export default App;
