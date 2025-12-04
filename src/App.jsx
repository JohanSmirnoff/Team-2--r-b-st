import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import UserList from "./components/UserList/UserList"
import { useState } from 'react';
import './App.css';
import TodoList from './TodoList/TodoList';
import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Calculator from './component/calculator/Calculator'

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <UserList />
      <TodoList />
      <Router>
        <Link to="/Calculator">Kalkylator, variant enkel</Link>
        <Routes>
          <Route path="/Calculator" element={<Calculator />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
