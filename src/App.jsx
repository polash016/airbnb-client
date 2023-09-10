import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <div>
     <NavBar></NavBar>
     <div className='pt-28 pb-20'>
     <Outlet></Outlet>
     </div>
    </div>
  )
}

export default App
