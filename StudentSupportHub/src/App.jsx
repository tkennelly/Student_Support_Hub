import React, { useEffect, useState } from "react"
import { Routes, Route, useNavigate, Navigate } from "react-router-dom"
import axios from "axios"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Stack from 'react-bootstrap/Stack'
import Header from "./components/Header"
import Home from "./components/Home"
import Main from "./components/Main"


const App = ()=>{

  const [allStudents, setAllStudents] = useState('')
  const [allTeachers, setAllTeachers] = useState('')

  return (
     <div>
      <Header />
      <Main allStudents={allStudents} setAllStudents={setAllStudents} allTeachers={allTeachers} setAllTeachers={setAllTeachers}/>
     </div>
  )
}

export default App
