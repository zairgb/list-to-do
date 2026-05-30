import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl text-center text-white font-bold pt-10">
        Welcome to Vite + React!
      </h1>
    </div>
  )
}

export default App
