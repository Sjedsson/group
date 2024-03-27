import { useState } from 'react'
import './App.css'
import Meny from "./components/Meny/Meny"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Meny/>
    </>
  )
}

export default App