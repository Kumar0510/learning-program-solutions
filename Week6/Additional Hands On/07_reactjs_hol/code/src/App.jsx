import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OnlineShopping from './OnlineShopping'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <OnlineShopping></OnlineShopping>
    </>
  )
}

export default App
