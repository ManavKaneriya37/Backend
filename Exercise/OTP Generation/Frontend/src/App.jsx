import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import OTP from './Pages/OTP'
import Dashboard from './Pages/Dashboard'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/otp' element={<OTP />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App