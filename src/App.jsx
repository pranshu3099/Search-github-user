import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Error from './components/Error'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='*' element={<Error/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
