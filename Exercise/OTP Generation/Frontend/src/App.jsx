import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import OTP from './Pages/OTP'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/otp' element={<OTP />} />
      </Routes>
    </div>
  )
}

export default App