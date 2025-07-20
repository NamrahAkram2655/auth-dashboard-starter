import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Signup from "./Components/Signup"
import Dashboard from './Components/Dashboard'
import Login from './Components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Signup /> } />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element = {<Dashboard /> } />
      </Routes>
    </>
  )
}

export default App
