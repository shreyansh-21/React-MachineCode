import { useState } from 'react'
import OTP from './otp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <OTP/>
    </>
  )
}

export default App
