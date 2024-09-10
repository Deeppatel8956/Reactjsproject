import logo from './logo.svg';
import Home from './pages/Home';
// import './App.css';
import CategoryMovie from './pages/CategoryMovie';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import { routePath } from './constants/routes';
function App() {
  return (
    <>
    
    <Router>
      <Routes>
        <Route path={routePath.home} element={<Home/>}/>
        <Route path={routePath.categories} element={<CategoryMovie/>}/>
        <Route path={routePath.invalid} element={<Home/>}/>
      </Routes>
    </Router>
    </>
     );
}

export default App;
