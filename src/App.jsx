// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Telemetry from './components/Telemetry.jsx'
import './App.css'

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Telemetry/>}></Route>
        </Routes>
    </Router>
  )
}

export default App
