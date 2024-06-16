import './App.css';
import React from "react"
import NavBar from "./components/NavBar"
import Login from "./components/Login"
import Register from "./components/Register"
import Courses from "./components/Courses"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./AuthContext"

const Home = () => {
  return (
    <>
    <h1>Bienvenidos a mi pagina web!</h1>
    <p>Por favor, registrate o inicia sesion</p>
    </>
  )
}


const App = () =>{

  return (
    <AuthProvider>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </Router>
    </AuthProvider>
  )
}

export default App
 