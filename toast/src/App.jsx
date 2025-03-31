import { useState } from 'react'
import './App.css'
import Toasty from '../components/toasty'
import Rating from '../components/Rating'
function App() {


  return (
    <div>
     <Toasty />
     <Rating starCount ={7}/>
    </div>
  )
}

export default App
