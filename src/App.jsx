import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Calculator from './component/calculator/Calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Link to="/Calculator">Kalkylator, variant enkel</Link>
        <Routes>
          <Route path="/Calculator" element={<Calculator />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
