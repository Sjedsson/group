import { useState } from 'react'
import Meny from "./components/Meny/Meny"
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Meny/>
    </>
  )
}

export default App
