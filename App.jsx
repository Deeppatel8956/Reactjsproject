import './App.css'
import Login from './Component/Login'
import Profile from './Component/Profile'
import Usercontextprovider from './Context/Usercontextprovider'

function App() {
return (
    <>
      <Usercontextprovider>
        <h1>Chai aur code context api</h1>
        <Login/>
        <Profile/>
      </Usercontextprovider>
    </>
  )
}

export default App
